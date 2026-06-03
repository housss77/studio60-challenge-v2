# Studio60 Challenge V2 - Backend

Laravel/Statamic backend for the Studio60 Challenge V2 landing page. The backend manages bilingual homepage, service, and project content, then exposes simple JSON endpoints consumed by the Gatsby frontend.

## Stack

- PHP 8.3+
- Laravel 13
- Statamic 6
- Composer
- Flat-file Statamic content storage

## Content Model

Content is managed in Statamic using one global set and two collections.

### Homepage Global Set

Handle: `homepage`

Fields:

- `hero_title_fr`, `hero_title_en`
- `hero_subtitle_fr`, `hero_subtitle_en`
- `about_text_fr`, `about_text_en`
- `contact_text_fr`, `contact_text_en`
- `contact_email`

### Services Collection

Collection: `services`

Fields:

- `title`
- `title_fr`, `title_en`
- `description_fr`, `description_en`
- `image`
- `order`

### Projects Collection

Collection: `projects`

Fields:

- `title`
- `title_fr`, `title_en`
- `description_fr`, `description_en`
- `technologies`
- `project_url`
- `image`
- `order`

## Custom API Endpoints

The custom API routes are defined in `routes/web.php`.

- `GET /api/homepage`
- `GET /api/services`
- `GET /api/projects`

These endpoints return the fields needed by the frontend and sort services/projects by `order`.

## Statamic Pro/API Note

Statamic's built-in content API is a Pro feature. To keep this challenge self-contained and compatible with the available setup, the project uses custom Laravel routes instead of relying on the Statamic Pro API. The routes use Statamic facades (`Entry` and `GlobalSet`) to read content and return JSON.

## Local Installation

From the `backend-statamic` directory:

```bash
composer install
cp .env.example .env
php artisan key:generate
```

If the project uses SQLite locally, ensure the database file exists:

```bash
mkdir -p database
touch database/database.sqlite
```

Then run migrations if required:

```bash
php artisan migrate
```

## Run Locally

```bash
php artisan serve
```

The backend should run at:

```txt
http://127.0.0.1:8000
```

API examples:

```txt
http://127.0.0.1:8000/api/homepage
http://127.0.0.1:8000/api/services
http://127.0.0.1:8000/api/projects
```

## Admin Panel

The Statamic control panel is available at:

```txt
http://127.0.0.1:8000/cp
```

Admin users should be created and managed locally or through the deployment environment. Do not commit credentials.

## Deployment Notes

- Configure the production `.env` file on the server.
- Set `APP_ENV=production` and `APP_DEBUG=false`.
- Run `composer install --no-dev --optimize-autoloader`.
- Ensure writable storage/cache directories are configured.
- Configure the web server document root to Laravel's `public` directory.
- Confirm the frontend can access the backend API URL.

## Security

No credentials, API keys, or production secrets should be committed to the repository. Environment-specific values belong in `.env` files or deployment platform secrets.
