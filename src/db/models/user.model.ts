import mongoose from "mongoose";

import { AppSettings } from "../../settings/app.settings";
import { TUser } from "../../types";

type UserDocument = mongoose.Document & TUser;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    avatar: String,
    savedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: AppSettings.POST_COLLECTION
      }
    ],
    password: String
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>(
  AppSettings.USER_COLLECTION,
  UserSchema
);
