import { Elysia } from "elysia";

import { count } from "@smartflow/db";

import { db } from "@smartflow/db/client";

import { User } from "@smartflow/db/schema";

export const server = new Elysia({ prefix: "/api" })
  .get("/", () => "Hello Elysia")
  .get("/users-amount", async () => {
    console.log("Hello from elysia");
    const amount = await db.select({ count: count() }).from(User);
    return amount[0]?.count;
  });
