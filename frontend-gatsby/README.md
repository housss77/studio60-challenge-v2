# Studio60 Challenge V2 - Frontend

Gatsby frontend for the Studio60 Challenge V2 landing page. The site renders a modern bilingual landing page using static JSON data exported from the Laravel/Statamic backend.

Live frontend:

```txt
https://studio60-challenge-v2.netlify.app
```

## Stack

- Gatsby 5
- React 18
- CSS Modules
- Prettier

## Routes

- `/` redirects to `/fr/`
- `/fr/` renders the French homepage
- `/en/` renders the English homepage

The EN/FR controls are real Gatsby links, so users can switch between language routes directly.

## Static Data

The Netlify build does not require a live backend API. Content is imported from local JSON files:

- `src/data/homepage.json`
- `src/data/services.json`
- `src/data/projects.json`

These files mirror the backend API responses and include bilingual fields such as `title_fr`, `title_en`, `description_fr`, and `description_en`.

Project images are served from `static/assets` and referenced with public `/assets/...` paths.

## Local Installation

From the `frontend-gatsby` directory:

```bash
npm install
```

## Run Development Server

```bash
npm run develop
```

By default, Gatsby runs at:

```txt
http://localhost:8000
```

If the backend is already using port `8000`, run Gatsby on another port:

```bash
npm run develop -- -p 8001
```

## Build Production Version

```bash
npm run build
```

Serve the production build locally:

```bash
npm run serve
```

Or choose a specific port:

```bash
npm run serve -- -p 8001
```

## Environment and Configuration Notes

No runtime API environment variable is required for the current static submission. To refresh content, export new data from the backend endpoints and update the JSON files in `src/data`.

## Features Implemented

- Modern responsive landing page
- Real `/fr/` and `/en/` routes
- Default `/` redirect to `/fr/`
- Bilingual content rendering
- Header anchor navigation
- Services and projects card grids
- Project links opening in a new tab with `rel="noreferrer"`
- Guarded image rendering for empty/null images
- Static project assets served from `static/assets`
- Contact section with mail link

## Deployment Notes

- Run `npm run build` before deployment.
- Deploy the generated `public` directory or connect Gatsby to a compatible hosting platform.
- No backend server is required at runtime for the current static version.

## Security

No credentials, API keys, or production secrets should be committed to the repository. Use environment variables or deployment platform secrets for sensitive values.
