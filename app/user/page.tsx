import apiClient from "../api-client";
import { IUser } from "../types";

const getUserDetails: () => Promise<IUser | undefined> = async () => {
  try {
    const userDetails = await apiClient.get<IUser>("/api/v1/user", {
      params: {
        userName: "sanchit",
      },
    });

    if (!!userDetails?.data) {
      return userDetails.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export default async function UserDetails() {
  const userDetails = await getUserDetails();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col w-60 h-60 justify-center items-center bg-red-500">
        <h1>{userDetails?.userName}</h1>
        <p>{userDetails?.email}</p>
      </div>
    </div>
  );
}
