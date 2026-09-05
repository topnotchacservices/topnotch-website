# Admin Setup

The `/admin` route is protected. It cannot read or save content until local environment credentials are configured.

1. Copy `.env.example` to `.env.local`.
2. Set `ADMIN_USERNAME` to the desired administrator username.
3. Generate a password hash locally. Do not share the password in chat:

```powershell
node scripts/create-admin-password-hash.mjs "your-password"
```

4. Put the complete `salt:hash` output in `ADMIN_PASSWORD_HASH`.
5. Generate `ADMIN_SESSION_SECRET` locally:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

6. Restart `npm run dev`, then visit `/admin` and sign in.

Saved content is stored in `.topnotch-content/site-content.json`. This local runtime content is ignored by Git and the built-in defaults remain available when the store does not exist or cannot be read.

Before production deployment, move the content store to a managed persistent database or storage service and configure the same environment variables in the deployment platform.
