import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
    dialect: "sqlite",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.FILE_NAME!,
    },
});
