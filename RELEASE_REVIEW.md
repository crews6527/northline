# Release review, October 11, 2026

These changes are proposed, not a production compliance certification. Apply migrations before enabling authentication or AI. Configure server credentials through the hosting environment; GROK_PREVIEW_CLIENT_SECRET replaces the old source constant. Historical credentials need platform-owner review/rotation. A .gitignore change does not remove historical files.

The rateLimit table is shared auth infrastructure; verify the runtime role's minimal table grants, proxy IP handling and real login 429s. Never give a browser a database key. AI quota RLS must run with a non-superuser/non-BYPASSRLS role. A full production RLS audit, API/global cost limits, deletion flow, encrypted daily backups, restore drill and monitored error pipeline remain release gates.

Privacy/terms are drafts for the inspected behavior. Confirm seller identity, provider practices and retention before publication. Local draft deletion is not server account deletion. Do not activate consumer signup or claim mobile approval until account deletion and store privacy/payment requirements are fulfilled.

Build/typecheck and npm vulnerability checks passed. Desktop/mobile previews rendered without uncaught page exceptions or overflow. The platform extension request to grok.com was unavailable in the review environment, so strict smoke checks remain incomplete. Test it on the live host. Preserve platform branding and broker integration.
