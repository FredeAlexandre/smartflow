import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    POCKETBASE_BASEURL: z.string(),
  },
  server: {},
  client: {},
  experimental__runtimeEnv: {
    POCKETBASE_BASEURL: process.env.POCKETBASE_BASEURL,
  },
  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
