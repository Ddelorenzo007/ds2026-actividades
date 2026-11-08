import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
// lee tu .env (expande ${POSTGRES_USER} como Compose)
const env = loadEnv("test", process.cwd(), "");
export default defineConfig({
 test: {
 env: {
 JWT_SECRET: "secreto-solo-para-tests", // nunca el real
 DATABASE_URL: env.DATABASE_URL ?? "",
 },
 },
});
