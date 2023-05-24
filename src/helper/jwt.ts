import { config } from '../config';
import jwt from 'jsonwebtoken';

interface JWTPayload {
  userId: number;
}

export class JWTHelper {
  private secret: string;

  constructor() {
    this.secret = config.jwt.secret;
  }

  public generateToken = ({ userId }: JWTPayload): string => {
    return jwt.sign({ userId }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
  };

  public generateAccessToken = ({ userId }: JWTPayload): string => {
    return jwt.sign({ userId }, config.jwt.secret, { subject: 'ACCESS_TOKEN' });
  };

  public generateJWTToken = ({ userId }: JWTPayload): { access_token: string } => {
    const access_token = this.generateAccessToken({ userId });
    return { access_token };
  };

  public verifyJwtToken = async (token: string) => {
    const decodedToken = await jwt.verify(token, this.secret);
    return decodedToken;
  };

  public decodeAccessToken = async (token: string): Promise<JWTPayload> => {
    const decodedAccessToken: JWTPayload = (await this.verifyJwtToken(token)) as JWTPayload;
    return decodedAccessToken;
  };
}
