import { Hono } from "hono";
import { microsoftEntraIdRouter } from "../../lib/oauth/providers/microsoft";

export const authRouter = new Hono().basePath("/auth").route(
  "/",
  microsoftEntraIdRouter({
    scopes: ["openid", "profile", "email", "User.Read", "offline_access"],
    extraAuthUrlQueryParams: {
      prompt: "select_account",
    },
  }),
);
