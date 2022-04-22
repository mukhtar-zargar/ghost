import { AuthenticationError } from "apollo-server-core";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserById } from "../modules/user.module";

import { AppSettings } from "../settings/app.settings";

export const generateHash = (text: string): string => {
  return bcrypt.hashSync(text, 3);
};

export const verifyHash = (text: string, hash: string): boolean => {
  return bcrypt.compareSync(text, hash);
};

export const createToken = (data: any, expiresIn: number): string => {
  data.expiresIn = expiresIn;
  return jwt.sign(data, AppSettings.JWT_SECRET, {
    expiresIn: expiresIn
  });
};

export const verifyToken = (data: any) => {
  return jwt.verify(data, AppSettings.JWT_SECRET);
};

export const verifyUser = async (bearer: string) => {
  if (!bearer) {
    throw new AuthenticationError("Invalid token");
  }

  const token = bearer.split(" ");

  if (token.length === 2) {
    try {
      const decoded: any = verifyToken(token[1]);
      const user = await getUserById(decoded?._id);
      return user;
    } catch (err) {
      console.log("Error verifyUser", err);
      throw new AuthenticationError("Invalid token");
    }
  } else {
    throw new AuthenticationError("Invalid token");
  }
};
