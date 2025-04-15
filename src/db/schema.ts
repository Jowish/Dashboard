import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: integer().primaryKey({ autoIncrement: true }),
    username: text().notNull().unique(),
    password: text().notNull(),
    email: text().notNull().unique(),
});

export const habits = sqliteTable("habits", {
    id: integer().primaryKey({ autoIncrement: true }),
    title: text().notNull(),
    description: text().notNull(),
    complete: integer({ mode: "boolean" }).default(false),
    ownerId: integer().references(() => users.id),
});
