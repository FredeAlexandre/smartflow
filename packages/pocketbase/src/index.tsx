import PocketBase from "pocketbase";

import { env } from "../env";

export const pb = new PocketBase(env.POCKETBASE_BASEURL);
