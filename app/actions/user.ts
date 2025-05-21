"use server";

import { prisma } from "../lib/prisma/prismaClient";

export const signUpUser = async (userDetails: {
  userName: string;
  email: string;
  password: string;
}) => {
  try {
    const newUser = await prisma.user.create({ data: userDetails });

    // New User logged
    console.log(newUser);

    return { message: "User Logged In Successfully", newUser };
  } catch (err: any) {
    return { message: "Error in Creating User" };
  }
};
