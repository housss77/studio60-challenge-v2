# Studio60 Challenge V2 - Final Submission

## Project Overview

Studio60 Challenge V2 is a full-stack bilingual landing page solution built with a Laravel + Statamic backend and a Gatsby frontend. The project supports French and English content, responsive layouts, and content management through Statamic collections and global sets.

The backend preserves a complete CMS workflow for managing homepage, services, and projects content. The frontend is deployed as a static Gatsby build for reliable challenge submission and Netlify hosting.

## Live Demo

Frontend URL:

```txt
https://studio60-challenge-v2.netlify.app
```

## GitHub Repository

Repository URL:

```txt
https://github.com/housss77/studio60-challenge-v2
```

## Architecture

### Backend

- Laravel
- Statamic CMS
- Services Collection
- Projects Collection
- Homepage Global Set
- Custom JSON API routes for content export

### Frontend

- Gatsby
- Static build
- EN/FR routing
- Responsive landing page
- Static JSON data imported at build time
- Static project images served from Gatsby assets

## Content Management

Content is managed in Statamic through:

- Services collection: service titles, bilingual descriptions, images, and ordering.
- Projects collection: project titles, bilingual descriptions, technologies, project URLs, images, and ordering.
- Homepage global set: hero, about, and contact content in French and English.

The Gatsby frontend uses exported JSON snapshots of this content for static deployment while preserving the complete Statamic content model and administration workflow.

## Installation

### Backend

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

### Frontend

```bash
npm install
gatsby develop
```

Production build:

```bash
npm run build
```

## Technical Choices

Statamic's built-in content API is a Pro feature, so custom Laravel routes were originally implemented to expose homepage, services, and projects content as JSON. This allowed the Gatsby frontend to consume CMS-managed content without requiring Statamic Pro API access.

For final challenge deployment, the Gatsby site was converted to a static build. The current Netlify deployment imports JSON data directly from `src/data`, which removes any runtime dependency on a local or hosted backend API.

Netlify is used for frontend deployment, connected to the GitHub repository for continuous deployment from the submitted source code.

## Notes

The Gatsby deployment is statically generated for challenge submission while preserving the complete Statamic content model and administration workflow.

No credentials, API keys, or production secrets are committed to the repository.
