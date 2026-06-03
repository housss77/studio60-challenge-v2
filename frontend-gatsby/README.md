# Studio60 Challenge V2 - Frontend

Gatsby frontend for the Studio60 Challenge V2 landing page. The site renders a modern bilingual landing page and consumes content from the Laravel/Statamic backend API.

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

## API Dependencies

The frontend fetches content from the backend running at `http://127.0.0.1:8000`.

Required endpoints:

```txt
http://127.0.0.1:8000/api/homepage
http://127.0.0.1:8000/api/services
http://127.0.0.1:8000/api/projects
```

The frontend expects bilingual fields such as `title_fr`, `title_en`, `description_fr`, and `description_en`.

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

The API base URL is currently hardcoded in `src/components/HomePage.js` as:

```txt
http://127.0.0.1:8000
```

For production deployment, update this value or move it to environment configuration so the frontend points to the deployed backend.

## Features Implemented

- Modern responsive landing page
- Real `/fr/` and `/en/` routes
- Default `/` redirect to `/fr/`
- Bilingual content rendering
- Header anchor navigation
- Services and projects card grids
- Project links opening in a new tab with `rel="noreferrer"`
- Guarded image rendering for empty/null images
- Loading, empty, and API error states
- Contact section with mail link

## Deployment Notes

- Run `npm run build` before deployment.
- Deploy the generated `public` directory or connect Gatsby to a compatible hosting platform.
- Ensure the deployed backend API allows requests from the frontend domain.
- Confirm the production API URL is configured before publishing.

## Security

No credentials, API keys, or production secrets should be committed to the repository. Use environment variables or deployment platform secrets for sensitive values.
