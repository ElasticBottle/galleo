import * as v from "valibot";

const EnvSchema = v.object({
  NEXT_PUBLIC_CHAT_API_URL: v.string(),
});
export type EnvSchema = v.InferOutput<typeof EnvSchema>;
export const env = v.parse(EnvSchema, import.meta.env);
