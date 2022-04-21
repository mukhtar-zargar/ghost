import { UserInputError } from "apollo-server-core";
import { User } from "../db/models/user.model";

export const addUser = async (args: any) => {
  const user = new User(args.details);

  try {
    const existingUser = await User.findOne({ email: args.details.email });

    if (existingUser) {
      throw new UserInputError("User already exists");
    }

    return await user.save();
  } catch (err) {
    console.log("Error addUser", err);
    throw err;
  }
};
