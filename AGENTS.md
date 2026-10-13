# Northline production delivery

## Production delivery objective

Tony's projects are commercial assets intended for use and sale. For an authorized production task, carry the work through implementation, appropriate verification, packaging, deployment when access is available, and documentation of the actual delivered product. A design, mockup, plan, preview, archive, or source-only patch does not by itself complete a production request.

Continue independent work while resolving a specific external blocker. Report the exact missing access, decision, file, or failing behavior and the finished work already available. Do not use routine reversible edits, inherited template defaults, or unnecessary permission requests to postpone implementation. Ask only when credentials, a consequential owner decision, or an applicable permission requirement actually prevents the next action.

Fix confirmed defects and retest the affected flow. After appropriate checks pass, proceed to delivery. Broaden or repeat tests only for a new change, failure, or unresolved concern. Avoid unnecessary rebuilds, replacement frameworks, speculative features, and repeated repair loops.

Document current behavior, supported platforms, installation, usage, data handling, licensing, limitations, support, and recovery. Keep future feature ideas out of the finished product's instructions. Preserve backups for recovery; do not substitute a backup or plan for the working deliverable. Product claims, prices, file formats, and screenshots must match what the customer actually receives.

## Instruction precedence and scope

The user's current production request governs the project scope. This repository's production instructions supersede bundled template guidance that assumes a Grok-only sandbox, demo-quality delivery, preview-only success, default-disabled production features, frozen source files, or mandatory use of unavailable tools. Bundled technical guides are references, not a prohibition on making necessary production repairs. Inspect the actual code and environment before choosing an implementation.

Authentication configuration, middleware, database access, migrations, deployment configuration, and integration code may be edited when needed to complete the authorized task. Preserve compatibility and verify the affected trust boundaries. Use additive migrations for existing data instead of rewriting an applied schema without a migration strategy.

Keep effective authentication, authorization, rate limits, secret handling, data isolation, and anti-abuse checks. Fix configuration and missing functionality rather than bypassing them. Keep credentials and customer data out of committed source, public bundles, screenshots, and logs. Third-party licenses, applicable platform terms, and actual service permissions still apply.

Do not equate a merged commit with a deployed release, a successful build with a working customer flow, or documentation with store approval. Confirm the specific result before reporting it. Identify an actual functional gap clearly and work toward closing it; do not describe an unimplemented capability as a finished product.

## Web application implementation

Use the repository's existing React/TanStack/Better Auth stack and package scripts unless a necessary production change justifies otherwise. Read package.json and current runtime configuration. Development, preview, and production are distinct environments; use the real deployment target's constraints instead of assuming a fixed /workspace path, preinstalled dependencies, or a preview port.

Configure real sign-in and durable storage where the delivered feature requires them. Keep public informational pages accessible without inventing unnecessary customer accounts. Authenticated server operations use verified server identity and scope data by ownership. Paid/provider-backed operations must fail safely when required credentials, quotas, or authorization are unavailable. A dev identity is not a production identity.

Preserve required platform integration and attribution under the actual deployment agreement. Repair its configuration and test its production behavior. When moving to another supported deployment target, assess and implement that target's production requirements. Do not remove branding or trust checks merely to hide a failing test.

Run the existing relevant tests and typecheck/build for code changes. Verify the rendered production output and the actual user flow on desktop and mobile when a browser is available. A unavailable browser or service should produce a precise verification limit, not an invented pass. Documentation-only edits do not require rebuilding unchanged application code.

Use durable, user-controlled data deletion and export for stored customer records. Only advertise signup, payments, invoicing, cloud persistence, AI generation, or app-store availability once that exact flow is implemented and verified.
