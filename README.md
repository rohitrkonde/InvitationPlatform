# InvitationPlatform

A free-first digital invitation platform MVP built with React, TypeScript and Vite. The initial demo focuses on editable invitation previews and shareable invitation pages. The planned production architecture adds an ASP.NET Core API, Supabase authentication/database, verified payment webhooks, image/video rendering, and an admin dashboard.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.

## Deploy the frontend

GitHub Pages can host the static frontend. Configure the Vite `base` path to `/InvitationPlatform/` for project Pages. Backend features require a separately hosted API; never put payment secrets or service-role keys in frontend code.

## Planned milestones

- [x] Initial invitation editor demo
- [ ] Customer accounts and saved invitations
- [ ] Image export and templates
- [ ] ASP.NET Core API and database
- [ ] Verified payment flow
- [ ] Animated video generation and publishing
- [ ] Admin dashboard