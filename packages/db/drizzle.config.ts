import type { Config } from "drizzle-kit";

if (!process.env.POSTGRES_URL_NON_POOLING) {
  throw new Error("Missing POSTGRES_URL");
}

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: process.env.POSTGRES_URL_NON_POOLING },
} satisfies Config;
