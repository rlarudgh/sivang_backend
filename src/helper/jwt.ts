import { config } from '../config';
import jwt from 'jsonwebtoken';

interface JWTPayload {
  userId: number;
}

export class JWTHelper {
  public generateToken = ({ userId }: JWTPayload) => {
    return jwt.sign({ userId }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
  };

  public generateAccessToken = ({ userId }: JWTPayload) => {
    return jwt.sign({ userId }, config.jwt.secret, { subject: 'ACCESS_TOKEN' });
  };

  public generateJWTToken = ({ userId }: JWTPayload) => {
    const access_token = this.generateAccessToken({ userId });
    return { access_token };
  };
}
