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
  const userDetails = await req.json();

  return Response.json(
    { message: "User Logged In Successfully" },
    { status: 201 }
  );
};
