import { Hono } from "hono";
import { microsoftEntraIdRouter } from "./microsoft";

export const authRouter = new Hono().basePath("/auth").route(
  "/",
  microsoftEntraIdRouter({
    scopes: ["User.Read", "offline_access"],
    extraAuthUrlQueryParams: {
      prompt: "select_account",
    },
  }),
);
