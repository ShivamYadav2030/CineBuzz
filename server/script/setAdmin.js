import 'dotenv/config';
import { clerkClient } from "@clerk/express";

const userId = "user_30KUvDAZLAVdLxFNvf9lpOhFBXv"; // Replace with the actual Clerk user ID

const setAdmin = async () => {
  await clerkClient.users.updateUser(userId, {
    privateMetadata: { role: "admin" }
  });
  console.log("Admin role set!");
};

setAdmin();