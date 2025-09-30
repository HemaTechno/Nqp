// appwriteClient.js
import { Client, Account } from "https://esm.sh/appwrite";

// حط هنا بيانات مشروعك
const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1") // Endpoint
    .setProject("68dbf92f0021e60a075f"); // Project ID

export const account = new Account(client);
