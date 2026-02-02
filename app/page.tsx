import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Backend Development",
    subtitle: "Laravel & PHP",
    items: ["RESTful APIs", "Authentication & authorization", "Scalable architecture"]
  },
  {
    title: "Database Design & Optimization",
    subtitle: "MySQL",
    items: ["Performance optimization", "Secure data handling", "Schema planning"]
  },
  {
    title: "API Integration",
    subtitle: "Third-party services",
    items: ["Frontend-backend communication", "Webhooks", "Reliable data flows"]
  },
  {
    title: "Maintenance & Bug Fixing",
    subtitle: "Stability & speed",
    items: ["Debugging", "Performance improvements", "Ongoing support"]
  }
];

const skills = {
  technical: [
    "PHP (Laravel)",
    "SQL / MySQL",
    "RESTful APIs",
    "OOP",
    "Data Structures & Algorithms",
    "Database Design"
  ],
  tools: ["Git", "GitHub"],
  soft: ["Leadership", "Time management", "Attention to detail", "Communication"]
};

const projects = [
  {
    name: "911 Digital – Website",
    description: "Laravel & PHP backend with RESTful APIs, role-based authentication, and database design.",
    stack: "Laravel, PHP, MySQL",
    link: "https://911digital.co/en",
    label: "Live Site"
  },
  {
    name: "Nature Way – Website (Freelance)",
    description: "Laravel backend with API integrations, authentication, and role management.",
    stack: "Laravel, PHP, API Integration",
    link: "https://natureway.world/en",
    label: "Live Site"
  },
  {
    name: "Company Database Management System",
    description: "Admin, employees, and departments modules for a full internal DBMS workflow.",
    stack: "HTML, CSS, JavaScript, PHP, MySQL",
    link: "https://github.com/Yasmine-Khaled/Company-DBMS",
    label: "GitHub"
  }
];

const education = [
  {
    title: "Ain Shams University – Cairo",
    subtitle: "Bachelor of Computer Science · Scientific Computing Department",
    date: "Sep 2020 – June 2024",
    details: [
      "Graduation Project: Driver Safety System",
      "Multi-model deep learning solution detecting drowsiness, distraction, emotions",
      "Grade: A"
    ]
  },
  {
    title: "Instant – Full Stack Diploma",
    subtitle: "HTML, CSS, Bootstrap, JavaScript, jQuery, Angular, PHP, Laravel, MySQL",
    date: "Sep 2022 – Sep 2023",
    details: []
  }
];

const experience = [
  {
    title: "Back-End Developer | Freelancer | 911 Digital",
    date: "April 2025 – Present",
    details: [
      "Laravel backend development",
      "Database optimization",
      "RESTful APIs",
      "Bug fixing & maintenance",
      "Independent project delivery"
    ]
  },
  {
    title: "Machine Learning Engineer Intern | Cellula Technologies",
    date: "Sep 2023 – Oct 2023",
    details: ["Flask & Django deployment", "Team leadership", "ML model integration"]
  },
  {
    title: "Web Development Workshop | Ain Shams University",
    date: "Jun 2021 – Aug 2021",
    details: ["HTML, CSS, JavaScript", "Team project: Movies website"]
  }
];

export default function HomePage() {
  return (
    <main id="top" className="pattern-grid">
      <section className="hero-bg">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:pt-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              Yasmine Khaled · Cairo, Egypt
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Laravel Backend Developer
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
              APIs · Databases · Scalable Systems
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-base text-muted">
              Detail-oriented backend developer with solid experience in Laravel and PHP. Strong
              problem-solving background gained from competitive programming. Experienced in
              building scalable web applications and RESTful APIs. Open to freelance and full-time
              opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/YasmineKhaled_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent"
              >
                Hire Me
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 grid gap-4 text-sm text-muted md:grid-cols-3">
              <div className="glass rounded-2xl border border-border p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Email</p>
                <p className="mt-2 text-sm text-fg">yasminkhaled32003@gmail.com</p>
              </div>
              <div className="glass rounded-2xl border border-border p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Phone</p>
                <p className="mt-2 text-sm text-fg">+20 1117035734</p>
              </div>
              <div className="glass rounded-2xl border border-border p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Availability</p>
                <p className="mt-2 text-sm text-fg">Freelance & Full-time</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                  My Quality Services
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What I deliver</h2>
              </div>
              <p className="max-w-xl text-sm text-muted">
                Focused on backend architecture that is reliable, secure, and ready for scale.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.1 * index}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-glow">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-pad bg-card/50">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">My Skills</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Built for backend excellence</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-bg p-6">
                <h3 className="text-lg font-semibold">Technical Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-bg p-6">
                <h3 className="text-lg font-semibold">Tools</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-border bg-bg p-6">
                <h3 className="text-lg font-semibold">Soft Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                  My Recent Works
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Selected projects</h2>
              </div>
              <p className="max-w-xl text-sm text-muted">
                A mix of client and internal systems focused on scalable Laravel backends.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={0.1 * index}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-glow">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    {project.stack}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{project.name}</h3>
                  <p className="mt-4 text-sm text-muted">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:text-accent2"
                  >
                    {project.label}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-pad bg-card/50">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">Education</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Academic background</h2>
            </div>
          </Reveal>
          <div className="mt-10 space-y-8 border-l border-border pl-6">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">{item.date}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.subtitle}</p>
                  {item.details.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">Experience</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Professional timeline</h2>
            </div>
          </Reveal>
          <div className="mt-10 space-y-8 border-l border-border pl-6">
            {experience.map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">{item.date}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-card/50">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Let’s build your backend</h2>
                <p className="mt-4 max-w-xl text-sm text-muted">
                  Reach out for freelance or full-time opportunities. I respond quickly and focus on
                  clean, scalable Laravel systems.
                </p>
                <div className="mt-6 space-y-3 text-sm text-muted">
                  <p>
                    <span className="font-semibold text-fg">Email:</span> yasminkhaled32003@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold text-fg">Phone:</span> +20 1117035734
                  </p>
                  <p className="flex flex-wrap gap-3">
                    <a
                      href="https://linkedin.com/in/yasmine-khaled"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted transition hover:border-accent hover:text-fg"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Yasmine-Khaled"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted transition hover:border-accent hover:text-fg"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-bg p-6 shadow-soft">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-muted">
          <p>© 2026 Yasmine Khaled. All rights reserved.</p>
          <p>Laravel Backend Developer · Cairo, Egypt</p>
        </div>
      </footer>
    </main>
  );
}
