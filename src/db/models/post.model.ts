import mongoose from "mongoose";

import { AppSettings } from "../../settings/app.settings";
import { TPost } from "../../types";

type PostDocument = mongoose.Document & TPost;

const PostSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: AppSettings.USER_COLLECTION,
      required: true
    }
  },
  { timestamps: true }
);

export const Post = mongoose.model<PostDocument>(
  AppSettings.POST_COLLECTION,
  PostSchema
);
