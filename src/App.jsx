import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const EXPERIENCE = [
  {
    role: 'Full-Stack Development Intern',
    org: 'NoviTech R&D Private Limited',
    dates: 'Oct 2024 – Nov 2024',
    location: 'Remote',
    points: [
      'Went through a full-stack training program covering React component structure and state management, HTML5, CSS3, and JavaScript — applied it afterward in the To-Do and Social Media projects.',
      'Traced how a UI layer talks to Node.js/Express logic end to end, which became the mental model for every project since.',
    ],
    stack: ['React.js', 'Node.js', 'Express'],
  },
  {
    role: 'Web Development Intern',
    org: 'CodSoft',
    dates: 'Aug 2024 – Sep 2024',
    location: 'Remote',
    points: [
      'Worked through a structured HTML5/CSS3/JavaScript curriculum, then used it to build responsive page layouts on my own.',
      'Practiced cross-browser layout fixes and basic UI/UX principles across a set of exercises.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    role: 'Web Development Intern',
    org: 'TechnoHack',
    dates: 'Feb 2024 – Mar 2024',
    location: 'Remote',
    points: [
      'Completed front-end training modules covering React, Express, and Node.js fundamentals.',
      'Applied responsive design and page-structure basics to build layouts outside the coursework.',
    ],
    stack: ['React', 'Express', 'Node.js'],
  },
]

const PROJECTS = [
  {
    name: 'JOB NEXA',
    file: 'Job-Nexa/',
    description:
      'Full Stack Job Portal & Recruitment Management System',
    points: [
      ' Developed a full-stack job portal application similar to Naukri, designed for freshers and experienced professionals, enabling candidates to search and apply for jobs while recruiters manage job postings and recruitment activities.',
      'Built responsive frontend interfaces using React.js, Vite, React Router DOM, Axios, and CSS, implementing role-based dashboards for Candidates, Recruiters, and Admins, along with job search, filtering, profile management, and application tracking',
      ' Developed RESTful APIs using Node.js and Express.js, integrated Microsoft SQL Server for database management, and implemented secure authentication and authorization using JWT and bcrypt, including resume uploads, applicant management,and job application workflows',
    ],
    stack: ['React.js', 'Vite, JavaScript (ES6+)', 'React Router DOM, Axios', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'RESTful APIs',
      'Microsoft SQL Server', 'JWT', 'bcrypt', 'Multer, Recharts', ' Git', ' GitHub'],
    link: 'https://github.com/Natanasundaram/JOB-NEXA',
  },
  {
    name: 'Task Manager',
    file: 'task-manager/',
    description:
      'Developed a full-stack Task Manager application with secure user authentication and task CRUD operations. Built REST APIs using Node.js and Express.js, integrated SQL Server for data management, and implemented JWT authentication, bcrypt password hashing, and protected React routes.',
    points: [
      ' Built a full-stack task manager with 8 REST API endpoints covering task CRUD, registration, login, and a database health check.',
      'Secured the API with JWT authentication, bcrypt password hashing, and parameterized T-SQL queries; scoped every query by user ID so each user can only read and change their own tasks..',
      'Designed the relational SQL Server schema with a foreign key (cascade delete), CHECK constraints, and a composite index.',
      ' Built the UI with React Router protected routes, Axios interceptors, and React Hooks (useState, useEffect, useMemo).'
    ],
    stack: ['React 18', 'Vite', 'Node.js', 'Express 5', 'Microsoft SQL Server', 'RESTful APIs', 'bcrypt', 'JWT'],
    link: 'https://github.com/Natanasundaram/Task-Manager',
  },
  {
    name: 'To-Do List Web Application',
    file: 'todo-app/',
    description:
      'A full CRUD task manager split into 10 reusable React components, with localStorage keeping tasks in place across reloads.',
    points: [
      'State handled entirely with useState across all 10 components — no prop drilling, no state library.',
      'CSS3 layout that keeps create/edit/delete flows consistent from phone to desktop.',
    ],
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    link: 'https://github.com/Natanasundaram/To-Do-List',
  },
  {
    name: 'Social Media Application',
    file: 'social-app/',
    description:
      'A React front end wired to a REST API through Axios, with full CRUD on posts — create, edit, delete, and a live feed.',
    points: [
      'GET/POST/PUT/DELETE all implemented against the API, no page reloads for post updates.',
      '5+ reusable components built with Hooks, styled responsively in HTML5/CSS3.',
    ],
    stack: ['React.js', 'JavaScript', 'Axios', 'HTML5', 'CSS3'],
    link: 'https://github.com/Natanasundaram/Social-media',
  },
  {
    name: 'Air Quality & Health Assessment',
    file: 'air-quality-fl/',
    description:
      'Team project using Dynamic PLI and federated learning to connect air quality readings to health risk.',
    points: [
      'Tracked 5+ air quality parameters and surfaced pollution levels in real time.',
      'Built 2+ alert features and mapped readings against a health dataset covering 20+ conditions.',
    ],
    stack: ['HTML', 'CSS'],
    link: 'https://github.com/natanasundaram08',
  },
]

const SKILLS = [
  { group: 'Languages', items: ['JavaScript', 'Java'] },
  { group: 'Frameworks & Libraries', items: ['React.js', 'Node.js', 'Express'] },
  { group: 'Databases', items: ['MySQL', 'MS SQL Server'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

/* ---------- Email ---------- */
const EMAIL = 'nadanasundaram79@gmail.com'
const MAIL_SUBJECT = 'Hello Natana' // edit this to change the pre-filled subject line

const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(MAIL_SUBJECT)}`

const IS_MOBILE =
  typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

const MAIL_LINK_PROPS = IS_MOBILE
  ? { href: MAILTO_URL }
  : { href: GMAIL_COMPOSE_URL, target: '_blank', rel: 'noreferrer' }

/* ---------- Profile photo ---------- */
// Put your photo in the project's `public` folder (next to index.html) and name it photo.jpg.
// Using a different name or format (e.g. me.png)? Just change PHOTO_FILE below.
const PHOTO_FILE = 'photo.png'
const PHOTO_SRC = `${import.meta.env.BASE_URL}${PHOTO_FILE}`

// Inline styles so the photo looks right without touching your CSS file.
// Change `width` / `height` here to make the photo bigger or smaller.
const PHOTO_STYLE = {
  position: 'relative',
  zIndex: 1,
  display: 'block',
  width: 140,
  height: 140,
  maxWidth: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center top', // keeps faces in frame for portrait photos
  border: '2px solid rgba(128, 128, 128, 0.4)',
  boxShadow: '0 8px 28px rgba(0, 0, 0, 0.25)',
  marginBottom: 24,
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}

export default function App() {
  const active = useActiveSection(NAV_LINKS.map((link) => link.id))
  const [menuOpen, setMenuOpen] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false) // true if the image file is missing

  return (
    <>
      <header className="nav">
        <a className="nav-mark" href="#top">
          NS<span className="dot">.</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? 'close' : 'menu'}
        </button>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="nav-resume"
            {...MAIL_LINK_PROPS}
            onClick={() => setMenuOpen(false)}
          >
            say hello
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />

          {!photoFailed && (
            <img
              src={PHOTO_SRC}
              alt="Portrait of Natana Sundaram"
              width="140"
              height="140"
              style={PHOTO_STYLE}
              onError={() => setPhotoFailed(true)}
            />
          )}

          <p className="hero-eyebrow">
            full-stack developer, based in Chennai, India
          </p>

          <h2>Natana sundaram</h2>

          <p className="hero-line">
            I build interfaces in React and the APIs behind them in Node and Express
            <span className="caret" aria-hidden="true"></span>
          </p>

          <p className="hero-sub">
            Three internships and two independent projects in — I've owned features start to
            finish: component design, REST endpoints, and the SQL schema underneath. Looking for
            an entry-level full-stack role to keep going.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#projects">See the projects</a>
            <a className="btn-ghost" href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-tag">About</p>
          <div className="section-body">
            <p>
              I got into web development the way most people in this field do now: through
              structured internships rather than a single bootcamp or course. NoviTech, CodSoft,
              and TechnoHack each covered a different slice of the stack — React state, layout
              fundamentals, cross-browser quirks — and I turned that training into two projects
              of my own so the concepts would actually stick.
            </p>
            <p>
              I'm currently in my final year of a Computer Science degree at SRM TRP Engineering
              College, and I'm looking for my first full-time role as a full-stack developer.
              I'm comfortable moving between the React side of a feature and the Node/Express/SQL
              side of it, and I'd rather ship something small and working than talk about
              something big and theoretical.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-tag">Experience</p>
          <ol className="timeline">
            {EXPERIENCE.map((job) => (
              <li key={job.org} className="timeline-item">
                <div className="timeline-head">
                  <h3>{job.role}</h3>
                  <span className="timeline-dates">{job.dates}</span>
                </div>

                <p className="timeline-org">
                  {job.org} · {job.location}
                </p>

                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="tag-row">
                  {job.stack.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section">
          <p className="section-tag">Projects</p>
          <div className="project-list">
            {PROJECTS.map((project) => (
              <a
                className="project-card"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <div className="project-file">{project.file}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>

                <span className="project-link">view repo →</span>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-tag">Skills</p>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skills-group" key={group.group}>
                <h4>{group.group}</h4>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <p className="section-tag">Contact</p>
          <h2>Working on something and need another pair of hands?</h2>
          <p className="contact-sub">
            I'm open to entry-level full-stack roles and internships — email is the fastest way
            to reach me.
          </p>

          <a className="btn-primary btn-large" {...MAIL_LINK_PROPS}>
            {EMAIL}
          </a>

          <div className="contact-links">
            <a href="tel:+919384375263">+91 93843 75263</a>
            <a href="https://github.com/Natanasundaram" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/natanasundaram08/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>Chennai, India</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Natana Sundaram, {new Date().getFullYear()}</span>
        <a href="#top">back to top ↑</a>
      </footer>
    </>
  )
}