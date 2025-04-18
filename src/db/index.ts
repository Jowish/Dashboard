import { drizzle } from "drizzle-orm/better-sqlite3";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export const db = drizzle(process.env.FILE_NAME!);
