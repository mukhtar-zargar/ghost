import { IFormatResponse, TPost, TUser } from "../types";

class FormatResponse implements IFormatResponse {
  constructor(success: boolean, message: string, code: string) {
    this.success = success;
    this.message = message;
    this.code = code;
  }
  success: boolean;
  code: string;
  message: string;
}

export class UserFormatResponse extends FormatResponse {
  constructor(success: boolean, message: string, code: string, user: TUser) {
    super(success, message, code);
    this.user = user;
  }
  user: TUser;
}

export class PostFormatResponse extends FormatResponse {
  constructor(success: boolean, message: string, code: string, post: TPost) {
    super(success, message, code);
    this.post = post;
  }
  post: TPost;
}
