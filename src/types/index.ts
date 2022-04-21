import mongoose from "mongoose";

export type PostDocument = mongoose.Document & {
  headline: string;
  body: string;
  postedBy: string;
};

export type UserDocument = mongoose.Document & {
  name: string;
  email: string;
  avatar: string;
  savedPosts: Array<string>;
};
