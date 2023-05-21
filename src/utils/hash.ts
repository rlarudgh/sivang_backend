import * as bcrypt from 'bcrypt';

export const generatePasswordHash = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (hashedPassword: string, password: string) => {
  return bcrypt.compare(hashedPassword, password);
};
