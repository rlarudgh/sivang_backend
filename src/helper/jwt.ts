import { config } from '../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface JWTPayload {
  userId: number;
}

export class JWTHelper {
  private secret: string;

  constructor() {
    this.secret = config.jwt.secret;
  }

  public generateToken = ({ userId }: JWTPayload): string => {
    return jwt.sign({ userId }, this.secret, { expiresIn: config.jwt.expiresIn });
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

  public decodeAccessToken = (token: string): JwtPayload => {
    const decodedAccessToken: JWTPayload = jwt.verify(token, this.secret) as JWTPayload;
    return decodedAccessToken;
  };
}
