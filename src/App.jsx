import { useEffect, useRef, useState } from 'react'

/* ---------- Links ---------- */
const GITHUB_PROFILE = 'https://github.com/Natanasundaram'
const LINKEDIN_URL = 'https://www.linkedin.com/in/natanasundaram08/'
const PHONE_DISPLAY = '+91 93843 75263'
const PHONE_TEL = 'tel:+919384375263'
const LOCATION = 'Chennai, India'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/* Numbers shown in the strip under the hero. */
const STATS = [
  { value: '3', label: 'Internships' },
  { value: '5', label: 'Projects built' },
  { value: '8.03', label: 'CGPA, B.E. CSE' },
  { value: '2026', label: 'B.E. graduate' },
]

/* The "quick facts" panel in the About section. */
const FACTS = [
  ['location', LOCATION],
  ['degree', 'B.E. Computer Science and Engineering'],
  ['graduated', 'May 2026 · CGPA 8.03'],
  ['focus', 'Full-stack web development'],
  ['stack', 'React.js, Node.js, Express.js, SQL Server'],
  ['targeting', 'Full Stack Developer / Software Engineer (entry-level)'],
]

const EXPERIENCE = [
  {
    role: 'Full-Stack Development Intern',
    org: 'NoviTech R&D Private Limited',
    dates: 'Oct 2024 – Nov 2024',
    location: 'Remote',
    points: [
      'Completed a full-stack training program in React.js, HTML5, CSS3 and JavaScript, covering component structure and state management, and applied both in independent Create, Read, Update, Delete (CRUD) projects.',
      'Traced the front-end-to-back-end flow of a web application, including how UI components connect to Node.js and Express.js logic.',
    ],
    stack: ['React.js', 'Node.js', 'Express'],
  },
  {
    role: 'Web Development Intern',
    org: 'CodSoft',
    dates: 'Aug 2024 – Sep 2024',
    location: 'Remote',
    points: [
      'Worked through a structured web development curriculum in HTML5, CSS3 and JavaScript and built responsive page layouts in independent projects.',
      'Practiced cross-browser compatibility and core user interface and user experience (UI/UX) principles.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    role: 'Web Development Intern',
    org: 'TechnoHack',
    dates: 'Feb 2024 – Mar 2024',
    location: 'Remote',
    points: [
      'Completed front-end training in HTML5, CSS3 and JavaScript and applied it to responsive layouts in independent projects.',
      'Practiced responsive design and site-structure fundamentals in coding modules covering React, Express.js and Node.js.',
    ],
    stack: ['React', 'Express', 'Node.js'],
  },
]

/*
  Every project has a GitHub link. Projects marked `featured` are shown as wide cards;
  the rest sit in a row of compact cards below them.
  Air Quality: swap `link` for the exact repository URL when you have it
  (right now it points to your GitHub profile).
*/
const PROJECTS = [
  {
    name: 'JOB NEXA',
    file: 'Job-Nexa/',
    date: 'Sep 2026 – Oct 2026',
    featured: true,
    description: 'Full Stack Job Portal and Recruitment Management System',
    points: [
      'Developed a full-stack job portal with job search, filtering, profile management and application tracking for candidates, and job posting and applicant management for recruiters.',
      'Built responsive React.js front ends with React Router DOM, Axios and CSS, including role-based dashboards for Candidates, Recruiters and Admins.',
      'Developed REST APIs in Node.js and Express.js on Microsoft SQL Server, with JWT and bcrypt authentication and authorization, resume uploads and job application workflows.',
    ],
    stack: [
      'React.js', 'Vite', 'JavaScript (ES6+)', 'React Router DOM', 'Axios', 'HTML5', 'CSS3',
      'Node.js', 'Express.js', 'RESTful APIs', 'Microsoft SQL Server', 'JWT', 'bcrypt',
      'Multer', 'Recharts', 'Git', 'GitHub',
    ],
    link: 'https://github.com/Natanasundaram/JOB-NEXA',
  },
  {
    name: 'Task Manager',
    file: 'task-manager/',
    date: 'Sep 2026',
    featured: true,
    description: 'Full-stack task manager with secure user authentication and task CRUD.',
    points: [
      'Built a full-stack task manager with 8 REST API endpoints covering task CRUD, user registration, login and a database health check.',
      'Implemented JWT authentication, bcrypt password hashing and parameterized T-SQL queries, with every query scoped to user ID so users access only their own tasks.',
      'Designed a relational SQL Server schema with a foreign key (cascade delete), CHECK constraints and a composite index.',
      'Built the front end with React Router protected routes, Axios interceptors and React Hooks (useState, useEffect, useMemo).',
    ],
    stack: ['React 18', 'Vite', 'Node.js', 'Express 5', 'SQL Server', 'RESTful APIs', 'bcrypt', 'JWT'],
    link: 'https://github.com/Natanasundaram/Task-Manager',
  },
  {
    name: 'Social Media Application',
    file: 'social-app/',
    description:
      'A React front end wired to a REST API through Axios, with full CRUD on posts — create, edit, delete, and a live feed.',
    points: [
      'Integrated a React.js front end with REST APIs using Axios, implementing CRUD operations (GET, POST, PUT, DELETE) for post management.',
      'Built 5+ reusable React components with Hooks for updates without a page refresh, in a responsive UI for desktop and mobile.',
    ],
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Axios'],
    link: 'https://github.com/Natanasundaram/Social-media',
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
    name: 'Air Quality & Health Assessment',
    file: 'air-quality-fl/',
    description:
      'Team project using Dynamic PLI and federated learning to connect air quality readings to health risk.',
    points: [
      'Tracked 5+ air quality parameters and surfaced pollution levels in real time.',
      'Built 2+ alert features and mapped readings against a health dataset covering 20+ conditions.',
    ],
    stack: ['HTML', 'CSS'],
    link: GITHUB_PROFILE,
    linkLabel: 'GitHub profile',
  },
]

const SKILLS = [
  { group: 'Programming Languages', items: ['JavaScript (ES6+)', 'Java', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'React Router', 'React Hooks', 'Vite', 'Axios', 'Recharts'] },
  {
    group: 'Backend and APIs',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT authentication and authorization', 'bcrypt', 'Multer'],
  },
  { group: 'Databases', items: ['Microsoft SQL Server', 'MySQL', 'SQL', 'T-SQL'] },
  { group: 'Tools', items: ['Git (version control)', 'GitHub', 'Visual Studio Code', 'Postman'] },
  {
    group: 'Professional Skills',
    items: [
      'Problem Solving',
      'Attention to Detail',
      'Team Collaboration',
      'Communication',
      'Adaptability',
      'Time Management',
    ],
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor of Engineering (B.E.), Computer Science and Engineering',
    school: 'SRM TRP Engineering College',
    location: 'Trichy, India',
    dates: 'Sep 2022 – May 2026',
    score: 'CGPA 8.03',
  },
  {
    degree: 'Higher Secondary',
    school: 'Nirmala Matric Hr Sec School',
    location: 'Chidambaram, India',
    dates: '2020 – 2021',
    score: '80.30%',
  },
]

/* ---------- Email ---------- */
// It feeds the "say hello" button and the big email button in the Contact section.
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
// The photo lives in the project's `public` folder (next to index.html).
// To change it, replace public/photo.png — or point PHOTO_FILE at a different file name.
// The frame is portrait (4:5) like a LinkedIn / Naukri profile picture, so a head-and-shoulders
// or half-body shot with the suit showing works best.
const PHOTO_FILE = 'photo.png'
const PHOTO_SRC = `${import.meta.env.BASE_URL}${PHOTO_FILE}`

function GithubIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  )
}

/* ---------- 3D effects ---------- */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/*
  Tilt: the element leans toward the mouse pointer (CSS does the 3D, this only feeds it numbers).
  `max` is the strongest lean in degrees. Mouse only — touch screens and
  "reduce motion" users get the plain, flat card.
*/
function Tilt({ as: Component = 'div', max = 6, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return
      const box = el.getBoundingClientRect()
      const x = (event.clientX - box.left) / box.width // 0 → 1, left to right
      const y = (event.clientY - box.top) / box.height // 0 → 1, top to bottom
      el.style.setProperty('--ry', `${((x - 0.5) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--rx', `${((0.5 - y) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
      el.classList.add('is-tilting')
    }

    const onLeave = () => {
      el.classList.remove('is-tilting')
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max])

  return (
    <Component ref={ref} className={`tilt ${className}`.trim()} {...rest}>
      {children}
    </Component>
  )
}

/* Elements marked data-reveal rise and flip into place the first time they scroll into view. */
function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) return undefined

    const root = document.documentElement
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
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
  useReveal()

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
          <div className="hero-copy">
            <p className="hero-eyebrow">Full Stack Developer | Software Engineer</p>

            <h2>
              Natana <span className="hero-surname">Sundaram</span>
            </h2>

            <p className="hero-line">
              I build interfaces in React and the APIs behind them in Node and Express
              <span className="caret" aria-hidden="true"></span>
            </p>

            <p className="hero-sub">
              Three internships and five projects in — I've owned features start to finish:
              component design, REST endpoints, JWT authentication and the SQL schema underneath.
              Graduated in May 2026 and looking for an entry-level Full Stack Developer or
              Software Engineer role.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#projects">See the projects</a>
              <a className="btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>

          <Tilt className="profile" max={9}>
            <div className="hero-grid" aria-hidden="true" />

            <div className="profile-card">
              <div className="profile-photo">
                {photoFailed ? (
                  <div className="profile-fallback" aria-hidden="true">NS</div>
                ) : (
                  <img
                    src={PHOTO_SRC}
                    alt="Portrait of Natana Sundaram"
                    width="480"
                    height="600"
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>

              <div className="profile-body">
                <p className="profile-name">Natana Sundaram</p>
                <p className="profile-role">Full Stack Developer</p>
                <p className="profile-loc">{LOCATION}</p>
                <p className="profile-status">Open to work</p>
              </div>
            </div>

            {/* Chips that float in front of the photo card (they sit at a different 3D depth). */}
            <span className="float-chip chip-react" aria-hidden="true">React.js</span>
            <span className="float-chip chip-node" aria-hidden="true">Node.js</span>
            <span className="float-chip chip-sql" aria-hidden="true">SQL Server</span>
            
          </Tilt>

          <ul className="hero-stats">
            {STATS.map((stat, i) => (
              <li key={stat.label} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section">
          <p className="section-tag">About</p>
          <div className="about-grid">
            <div className="section-body">
              <p>
                I'm a Software Developer who enjoys turning ideas into functional, user-friendly web applications. I work across frontend and backend development, building responsive interfaces, developing REST APIs, and integrating databases to create complete web solutions.

                I enjoy solving problems, exploring new technologies, and continuously improving my development skills. My focus is on writing clean, maintainable code and building applications that are not just functional, but also deliver a great user experience
              </p>
              <p>
                I graduated in May 2026 with a B.E. in Computer Science and Engineering from SRM
                TRP Engineering College (CGPA 8.03), and I'm looking for my first full-time role as
                a full-stack developer or software engineer. I'm comfortable moving between the
                React side of a feature and the Node/Express/SQL side of it, and I'd rather ship
                something small and working than talk about something big and theoretical.
              </p>
            </div>

            <div className="facts" data-reveal>
              <p className="facts-title">quick facts</p>
              <dl>
                {FACTS.map(([key, value]) => (
                  <div className="facts-row" key={key}>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-tag">Experience</p>
          <ol className="timeline">
            {EXPERIENCE.map((job) => (
              <li key={job.org} className="timeline-item" data-reveal>
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
            {PROJECTS.map((project, i) => (
              <Tilt
                as="article"
                max={project.featured ? 2.5 : 6}
                className={`project-card ${project.featured ? 'is-featured' : ''}`}
                key={project.name}
                data-reveal
                style={{ '--d': `${Math.max(0, i - 2) * 100}ms` }}
              >
                <div className="project-head">
                  <div className="project-meta">
                    <span className="project-file">{project.file}</span>
                    {project.date && <span className="project-date">{project.date}</span>}
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>

                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="tag-row project-tags">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-foot">
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} — ${project.linkLabel ?? 'GitHub repository'}`}
                  >
                    <GithubIcon />
                    {project.linkLabel ?? 'GitHub repository'}
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="project-repo">{project.link.replace('https://', '')}</span>
                </div>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-tag">Skills</p>
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <Tilt
                className="skills-group"
                max={5}
                key={group.group}
                data-reveal
                style={{ '--d': `${(i % 3) * 90}ms` }}
              >
                <h4>{group.group}</h4>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-tag">Education</p>
          <div className="edu-grid">
            {EDUCATION.map((item, i) => (
              <Tilt
                className="edu-card"
                max={4}
                key={item.degree}
                data-reveal
                style={{ '--d': `${i * 120}ms` }}
              >
                <div className="edu-top">
                  <span className="edu-dates">{item.dates}</span>
                  <span className="edu-score">{item.score}</span>
                </div>
                <h3>{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
                <p className="edu-loc">{item.location}</p>
              </Tilt>
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
            <a className="contact-item" href={PHONE_TEL} data-reveal style={{ '--d': '0ms' }}>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{PHONE_DISPLAY}</span>
            </a>
            <a
              className="contact-item"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ '--d': '90ms' }}
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">Natanasundaram ↗</span>
            </a>
            <a
              className="contact-item"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ '--d': '180ms' }}
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">natanasundaram08 ↗</span>
            </a>
            <div className="contact-item" data-reveal style={{ '--d': '270ms' }}>
              <span className="contact-label">Location</span>
              <span className="contact-value">{LOCATION}</span>
            </div>
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
