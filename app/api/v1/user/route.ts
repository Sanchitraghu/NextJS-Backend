import { prisma } from "@/app/lib/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url || "");
  const name = searchParams.get("userName");
  console.log(name);

  return NextResponse.json({
    userName: "Sanchit Raghuwanshi",
    email: "sanchit.raghu113@gmail.com",
  });
};

export const POST = async (req: NextRequest) => {
  try {
    const userDetails = await req.json();
    const newUser = await prisma.user.create({ data: userDetails });

    // New User logged
    console.log(newUser);

    // Get Headers
    const authHeader = req.headers.get("Authorization");
    console.log(authHeader);

    // Get QueryParameters
    const searchParams = req.nextUrl.searchParams.get("userName");
    console.log(searchParams);

    return NextResponse.json(
      { message: "User Logged In Successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    console.log(err.message, "Error in Creating User");
    return NextResponse.json(
      { message: "Error in Creating User" },
      { status: 500 }
    );
  }
};
