import mongoose from "mongoose";
import { AppSettings } from "../settings/app.settings";

export const initDB = async () => {
  try {
    await mongoose.connect(AppSettings.DB_URL, {
      authSource: "admin"
    });

    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(`There is error in connecting MongoDB ${err.message}`);
  }
};
