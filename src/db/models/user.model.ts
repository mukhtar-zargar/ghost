import mongoose from "mongoose";

import { AppSettings } from "../../settings/app.settings";
import { UserDocument } from "../../types";

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
    ]
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>(
  AppSettings.USER_COLLECTION,
  UserSchema
);
