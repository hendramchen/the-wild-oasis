# The Wild Oasis

Internal hotel management app for **The Wild Oasis**, a small luxury cabin hotel. Staff use it to manage cabins, bookings, guests, check-in/check-out, and hotel settings — not a guest-facing booking website.

Built with React as part of [Jonas Schmedtmann’s Ultimate React course](https://www.udemy.com/course/the-ultimate-react-course/).

## Features

- **Dashboard** — bookings, sales, check-ins, occupancy rate, sales chart, stay-duration chart, and today’s activity (last 7 / 30 / 90 days)
- **Bookings** — filter by status (unconfirmed, checked in, checked out), sort, paginate, view details, delete
- **Check-in / check-out** — confirm payment, optionally add breakfast, then check guests in or out
- **Cabins** — create, edit, duplicate, and delete cabins (capacity, price, discount, photo)
- **Users** — sign up new hotel employees (Supabase Auth)
- **Settings** — min/max nights, max guests per booking, breakfast price
- **Account** — update name, avatar, and password
- **Auth** — login, logout, protected routes
- **Dark mode** — theme toggle stored in local storage

## Tech stack

| Area | Library |
| --- | --- |
| UI | React 18, Vite, styled-components |
| Routing | React Router 6 |
| Server state | TanStack Query (React Query) |
| Forms | React Hook Form |
| Backend | Supabase (Postgres, Auth, Storage) |
| Charts | Recharts |
| Dates | date-fns |
| Toasts | react-hot-toast |

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). You need a valid hotel employee account to sign in.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

### Backend (Supabase)

The app talks to Supabase for cabins, bookings, guests, settings, auth, and cabin images.

1. Create a project at [supabase.com](https://supabase.com).
2. Create tables for `cabins`, `bookings`, `guests`, and `settings`, plus storage for cabin photos.
3. Point `src/services/supabase.js` at your project URL and **anon** key (do not use the service role key in the client).

Sample cabin, guest, and booking data lives in `src/data/`. Logged-in staff can load that sample data from the uploader in the sidebar.

## App routes

| Path | Page |
| --- | --- |
| `/login` | Sign in |
| `/dashboard` | Home / analytics |
| `/bookings` | Booking list |
| `/bookings/:bookingId` | Booking detail |
| `/checkin/:bookingId` | Check-in |
| `/cabins` | Cabin inventory |
| `/users` | Create employee |
| `/settings` | Hotel rules |
| `/account` | Current user profile |

All routes except `/login` require an authenticated user.

## Project layout

```
src/
  features/     # Domain modules (auth, bookings, cabins, dashboard, …)
  pages/        # Route-level screens
  services/     # Supabase API clients
  ui/           # Shared UI primitives
  context/      # Dark mode
  hooks/        # Shared hooks
  data/         # Sample seed data + uploader
  styles/       # Global styles
```
