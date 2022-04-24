import mongoose from "mongoose";

export type TPost = {
  headline: string;
  body: string;
  postedBy: string;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  password: string;
  savedPosts: Array<string>;
};

export type TUserSignUp = {
  name: string;
  email: string;
  avatar: string;
  password: string;
};

export type TUserLogin = {
  email: string;
  password: string;
};

export interface IFormatResponse {
  success: boolean;
  code: string;
  message: string;
}
