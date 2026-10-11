-- Server-owned auth infrastructure. No browser or public database access.
CREATE TABLE IF NOT EXISTS "rateLimit" (
  "id" text PRIMARY KEY,
  "key" text NOT NULL UNIQUE,
  "count" integer NOT NULL,
  "lastRequest" bigint NOT NULL
);
REVOKE ALL ON "rateLimit" FROM PUBLIC;
