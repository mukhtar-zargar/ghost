import dotenv from "dotenv";

dotenv.config();

export class AppSettings {
  public static readonly PORT = process.env.PORT || 3000;
  public static readonly DB_URL = `${process.env.MONGO_CONNECTION_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  public static readonly USER_COLLECTION = process.env.USER_COLLECTION;
  public static readonly POST_COLLECTION = process.env.POST_COLLECTION;
}
