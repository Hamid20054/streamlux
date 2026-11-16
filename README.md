# StreamLux

A responsive StreamLux entertainment-platform website concept built with Next.js, React, and TypeScript. The current delivery is a polished marketing and discovery frontend, not a production streaming or subscription service.

## Run locally

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production with `npm run build`, then run `npm start`.

## Included

- Responsive cinematic homepage with accessible navigation and mobile menu.
- Interactive channel category filters and FAQ accordion.
- Illustrative live-programming guide and film artwork, created with CSS rather than unlicensed third-party assets.
- Four subscription duration cards. Prices are intentionally not invented; configure amounts and renewal terms before connecting checkout.
- Responsive device showcase, support section, and StreamLux favicon.

## Important production limitations

This repository currently contains a website frontend only. Login, customer/admin dashboards, live playback, catalogue APIs, database, streaming authorization, Android/TV apps, email automation, and Stripe/PayPal processing are not implemented. Buttons are not connected to payment, authentication, or media services. Do not use this preview to sell subscriptions or represent illustrative artwork/programs as licensed content.

Before launch, add a backend and PostgreSQL migrations, secure authentication and role-based admin access, pricing configured by an authorized administrator, payment-provider server integrations with signature-verified webhooks, and playback authorization for content with verified rights. Add and review required privacy, terms, refund, renewal, and licensing policies. Keep all secrets server-side and use authorized media only.

## Notes

The sample channel names and movie titles are illustrative placeholders. The support and email addresses use the reserved `.example` domain. Replace them with real, monitored contact details before launch.
