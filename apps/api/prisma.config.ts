import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Only commands that talk to the database (migrate, db push, studio) need
    // this. It is read with process.env (not Prisma's env() helper, which
    // throws when unset) so `prisma generate` still works on a fresh clone
    // before .env exists — it runs from the postinstall script.
    url: process.env.DATABASE_URL,
  },
});
