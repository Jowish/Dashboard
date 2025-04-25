import { relations } from "drizzle-orm";
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
    hour: text().notNull(),
    complete: integer({ mode: "boolean" }).default(false),
    date: text({ mode: "json" }).$type<boolean[]>().notNull(),
    ownerId: integer("owner_id"),
});

export const usersRelations = relations(users, ({ many }) => ({
    habits: many(habits),
}));

export const habitsRelations = relations(habits, ({ one }) => ({
    owner: one(users, {
        fields: [habits.ownerId],
        references: [users.id],
    }),
}));
