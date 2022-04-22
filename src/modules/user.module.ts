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

export const getUserById = async (id: string) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new UserInputError("Invalid ID");
    }
    return user;
  } catch (err) {
    console.log("Error getUserById", err);
    throw err;
  }
};

export const getAllUsers = async ({ page = 1, pageSize = 10 }) => {
  try {
    if (page < 1) {
      page = 1;
    }
    const users = await User.find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return users;
  } catch (err) {
    console.log("Error getAllUsers", err);
    throw err;
  }
};
