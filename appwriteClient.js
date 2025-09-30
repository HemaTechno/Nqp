// appwriteClient.js
import { Client, Account } from "https://esm.sh/appwrite";

// حط هنا بيانات مشروعك
const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Endpoint
    .setProject("YOUR_PROJECT_ID"); // Project ID

export const account = new Account(client);
