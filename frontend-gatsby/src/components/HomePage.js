import * as React from "react"
import { Link } from "gatsby"

import homepage from "../data/homepage.json"
import projects from "../data/projects.json"
import services from "../data/services.json"
import * as styles from "../pages/index.module.css"

const labels = {
  en: {
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    contactButton: "Contact us",
    projectsButton: "View projects",
    noProjects: "Projects will be available soon.",
    noServices: "Services will be available soon.",
    technologies: "Technologies",
  },
  fr: {
    about: "A propos",
    services: "Services",
    projects: "Projets",
    contact: "Contact",
    contactButton: "Contactez-nous",
    projectsButton: "Voir les projets",
    noProjects: "Les projets seront bientot disponibles.",
    noServices: "Les services seront bientot disponibles.",
    technologies: "Technologies",
  },
}

const getImageUrl = image => {
  if (!image) {
    return ""
  }

  if (typeof image === "string") {
    if (image.startsWith("http://127.0.0.1:8000/assets/")) {
      return image.replace("http://127.0.0.1:8000", "")
    }

    return image
  }

  if (Array.isArray(image)) {
    return getImageUrl(image[0])
  }

  return getImageUrl(image.url || image.permalink || image.path)
}

export default function HomePage({ language }) {
  const text = labels[language]
  const field = (item, name) => item?.[`${name}_${language}`] || ""

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#hero">
          Studio60
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#about">{text.about}</a>
          <a href="#services">{text.services}</a>
          <a href="#projects">{text.projects}</a>
          <a href="#contact">{text.contact}</a>
        </nav>

        <div className={styles.languageSwitch} aria-label="Language switcher">
          <Link
            className={language === "en" ? styles.activeLanguage : ""}
            to="/en/"
          >
            EN
          </Link>
          <Link
            className={language === "fr" ? styles.activeLanguage : ""}
            to="/fr/"
          >
            FR
          </Link>
        </div>
      </header>

      <section className={styles.hero} id="hero">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Studio60 Challenge V2</p>
          <h1>{field(homepage, "hero_title") || "Studio60 Challenge V2"}</h1>
          <p className={styles.heroSubtitle}>
            {field(homepage, "hero_subtitle")}
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">
              {text.contactButton}
            </a>
            <a className={styles.secondaryButton} href="#projects">
              {text.projectsButton}
            </a>
          </div>
        </div>

        <div className={styles.heroPanel} aria-label="Studio60 highlights">
          <div>
            <span>{services.length}</span>
            <p>{text.services}</p>
          </div>
          <div>
            <span>{projects.length}</span>
            <p>{text.projects}</p>
          </div>
          <div>
            <span>EN/FR</span>
            <p>Content</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{text.about}</p>
          <h2>{text.about}</h2>
        </div>
        <p className={styles.aboutText}>{field(homepage, "about_text")}</p>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{text.services}</p>
          <h2>{text.services}</h2>
        </div>

        {services.length === 0 && (
          <p className={styles.statusText}>{text.noServices}</p>
        )}

        <div className={styles.cardGrid}>
          {services.map(service => (
            <article className={styles.card} key={service.title_en}>
              {getImageUrl(service.image) && (
                <img
                  className={styles.cardImage}
                  src={getImageUrl(service.image)}
                  alt={field(service, "title")}
                />
              )}
              <h3>{field(service, "title")}</h3>
              <p>{field(service, "description")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{text.projects}</p>
          <h2>{text.projects}</h2>
        </div>

        {projects.length === 0 && (
          <p className={styles.statusText}>{text.noProjects}</p>
        )}

        <div className={styles.cardGrid}>
          {projects.map(project => (
            <article className={styles.card} key={project.title_en}>
              {getImageUrl(project.image) && (
                <img
                  className={styles.cardImage}
                  src={getImageUrl(project.image)}
                  alt={field(project, "title")}
                />
              )}
              <h3>{field(project, "title")}</h3>
              <p>{field(project, "description")}</p>
              {project.technologies && (
                <p className={styles.technologies}>
                  <strong>{text.technologies}:</strong> {project.technologies}
                </p>
              )}
              {project.project_url && (
                <a
                  className={styles.cardLink}
                  href={project.project_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.project_url}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div>
          <p className={styles.eyebrow}>{text.contact}</p>
          <h2>{text.contact}</h2>
          <p>{field(homepage, "contact_text")}</p>
        </div>
        {homepage.contact_email && (
          <a
            className={styles.primaryButton}
            href={`mailto:${homepage.contact_email}`}
          >
            {homepage.contact_email}
          </a>
        )}
      </section>
    </main>
  )
}
