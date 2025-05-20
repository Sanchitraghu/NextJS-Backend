import { prisma } from "@/app/lib/prisma/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest) => {
  const { searchParams } = new URL(req.url || "");
  const name = searchParams.get("userName");
  console.log(name);

  return Response.json({
    userName: "Sanchit Raghuwanshi",
    email: "sanchit.raghu113@gmail.com",
  });
};

export const POST = async (req: Request) => {
  try {
    const userDetails = await req.json();
    const newUser = await prisma.user.create({ data: userDetails });

    console.log(newUser);

    return Response.json(
      { message: "User Logged In Successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    console.log(err.message, "Error in Creating User");
    return Response.json(
      { message: "Error in Creating User" },
      { status: 500 }
    );
  }
};
