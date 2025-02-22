import { type Config } from "drizzle-kit";

export default {
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  tablesFilter: ["fullstack_*"],
} satisfies Config;
