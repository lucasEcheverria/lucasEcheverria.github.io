# Lucas Echeverría Madariaga — Portfolio Content & Design Brief

This document is the complete content and design spec for a personal portfolio
website. It is meant to be handed to Claude Code to scaffold and build the
site. All site copy below is final and in English (the whole site is
English-only). Notes addressed to the builder (not site copy) are marked
**[Builder note]**.

---

## 1. Tech stack & deployment

- **Stack:** React + Vite.
- **Hosting:** GitHub Pages.
  - Recommended repo name: `<github-username>.github.io` for a clean root
    URL (avoids the Vite `base` path configuration a project-named repo
    would need).
  - Deploy via a GitHub Actions workflow that builds and publishes on push
    to the main branch.
- **Routing:** The site has four real, separate pages (not just anchored
  sections), so it needs client-side routing.
  - **[Builder note]** Use React Router. `HashRouter` is the simplest choice
    on GitHub Pages (no extra config). If `BrowserRouter` (clean URLs) is
    preferred instead, it needs the standard GitHub Pages SPA fallback
    (a `404.html` that redirects back into the app) so deep links and page
    refreshes work.
- **[Builder note]** A visual mockup already exists for the aesthetic
  direction (colors, typography, hero treatment, terminal panel, roadmap
  timeline component) — it was built as a single page with a Develop/Security
  toggle. That toggle structure is now **superseded** by real routing (see
  Sitemap below); reuse its visual language, not its page structure.

---

## 2. Sitemap

- **Home** (`/`)
- **Develop** (`/develop`)
- **Security** (`/security`)
- **About Me** (`/about`)
- **Contact** — not a separate page. Lives as a persistent element in the nav
  (a button/link) and in the footer on every page.

---

## 3. Global design system

**Palette**
- Background: `#0A0E16` (near-black, blue undertone — not pure black)
- Panel/raised background: `#10151F`
- Text (primary): `#D7DCE3`
- Text (muted): `#6B7485` / `#8A93A1`
- Border: `rgba(255,255,255,0.08–0.14)`
- Accent — Develop: `#5CC8FF` (cyan/blue)
- Accent — Security: `#FF6B6B` (coral/red)

**Color logic (functional, not decorative):** color encodes what kind of
content something is, consistently across the whole site — not just on one
page.
- The **Develop** page uses the blue accent throughout (headings, tags,
  buttons, borders).
- The **Security** page uses the red accent throughout.
- **Home** and **About Me** are neutral by default (muted greys/white for
  structure), but content that clearly belongs to one track keeps that
  track's color — e.g. on Home, the Erasmus+Friends card uses the blue
  accent and the Homelab card uses the red accent, even though the page
  itself is neutral.
- The hero name treatment (see below) always shows **both** colors together,
  as the one constant brand mark that ties the two tracks together.

**Typography**
- `JetBrains Mono` throughout (thematically justified — terminal/IDE
  identity), weights 400–800 for hierarchy.
- Hero name gets a chromatic-aberration effect: oversized weight-800 display,
  with a subtle red/blue offset text-shadow (glitch effect) — this is the one
  deliberate "loud" moment; everything else stays quiet and disciplined.

**Recurring components / motifs**
- Terminal window panel (minimal chrome, three small monochrome dots, no
  fake macOS traffic-light colors) used for code/scan-style flavor content.
- Scanline overlay, very subtle, low-opacity.
- Vertical timeline component (used for the Roadmap) — dot + connecting line
  + label, this is the one place numbered/sequential markers are
  appropriate.
- Skill tags: plain bordered chips (no rounded-corner-plus-left-border
  cards, no drop shadows — keep it flat and sharp-edged, consistent with the
  terminal identity).

**Avoid** (established while designing the mockup, still applies): gradient
washes, the generic "SaaS card" kit (identical rounded cards + soft grey
shadow), tracked-out ALL-CAPS eyebrow labels repeated on every section,
arrows appended to button/link text, unmotivated hover/entrance animations
on every element. Reserve numbered markers for the Roadmap only, since it's
the one genuinely sequential content.

---

## 4. Page-by-page content

### 4.1 Home

**Bio**
> I hold a Computer Engineering degree from the University of Deusto and
> currently work as a Cloud Analyst at Deloitte, after building full-stack
> systems at Sener. I like understanding things well enough to build them —
> and well enough to break them. That drive is what's pulling me toward
> cybersecurity, and I bring the same work ethic to it: hardworking,
> committed, and always looking to learn and grow in the field. HTB's CJCA
> is already done, and I'm working my way toward Security+ and, eventually,
> running red team engagements.

**Name display:** "Lucas" large, "Echeverría Madariaga" beneath it in a
smaller weight, with "Based in Bilbao" as a small badge/line next to or
under the name.

**Highlighted soft skills (4):** Problem-solving · Self-directed learning ·
Adaptability · Time management

**Experience (short form):**
> Cloud Analyst @ Deloitte (AWS) — previously Full-Stack Developer @ Sener
> (GIS, microservices)

**Skills summary (short form, neutral color):** Full-Stack Development ·
AWS · Pentesting · SIEM / Blue Team · AI & Agents

**Featured projects (2):**
1. **Erasmus+Friends** *(blue accent)* — Social app that helps Erasmus
   students meet and connect, with identity verification. `Mobile` `Social`
2. **Homelab** *(red accent)* — Self-hosted NAS, GPU compute and honeypots
   running on personal infrastructure, with IDS monitoring. `Infra`
   `Honeypots` `IDS`

---

### 4.2 Develop

Accent: blue, throughout.

**Featured skills (shown first, larger/emphasized):** Python · Java /
Spring Boot · React · AWS · AI & Agents

**Full skills breakdown (shown below the featured row, all of it — nothing
hidden):**
- **Backend:** Java, Spring Boot, Python, Django, FastAPI, C/C++, C#, .NET,
  relational databases, non-relational databases
- **Frontend:** HTML, CSS, JavaScript, React, Angular, Vue
- **AWS:** EC2, Lambda, ECS/Fargate, S3, RDS, DynamoDB, VPC, API Gateway,
  CloudFront, Route53, IAM, KMS, Cognito, SQS, SNS, Step Functions,
  CloudFormation, CDK, Terraform, CloudWatch
- **AI:** Artificial Intelligence, Computer Vision, Fine-tuning, Agents
- **Fundamentals:** Data Structures & Algorithms, Computer Architecture,
  Software Engineering
- **Game Development:** C++, Game Design, Unity

**Projects (short descriptions — no deep technical detail):**
1. **Erasmus+Friends** — Social app that helps Erasmus students meet and
   connect, with identity verification. `Mobile` `Social`
2. **FIFA Scoreboard (ESP32)** — A physical scoreboard for FIFA matches,
   built with an ESP32, buttons, a display and sound. `Hardware` `IoT`

No experience section on this page (experience lives on About Me).

---

### 4.3 Security

Accent: red, throughout.

**Featured skills (shown first, larger/emphasized):** Pentesting · Blue
Team / SIEM · Incident Response · Threat Hunting · IDS

**Full skills breakdown (shown below, all of it):** Operating Systems,
Pentesting, Networking, Blue Team / SIEM, IDS, Incident Response, Threat
Hunting, Enumeration, Privilege Escalation, Vulnerability Assessment,
Security Reporting

**Projects (short descriptions — no deep technical detail):**
1. **Homelab** — Self-hosted NAS, GPU compute and honeypots running on
   personal infrastructure, with IDS monitoring. `Infra` `Honeypots` `IDS`
2. **HTB & TryHackMe** — Hands-on offensive security practice across
   HackTheBox and TryHackMe labs. `Pentesting` `CTF`

No experience section on this page (experience lives on About Me). No
mention of HTB CJCA here — it's listed once, under Studies on About Me, to
avoid duplicating it.

---

### 4.4 About Me

Neutral accent. Order: **Bio → Studies → Experience → Roadmap**.

**Bio:** same text as Home (reused verbatim — this page is the "full
breakdown", not a different bio).

**Soft skills — full breakdown (9), each with a one-line rationale:**
1. **Hardworking** — completed a full engineering degree while holding
   down full-time roles at Sener and Deloitte.
2. **Committed** — saw a 315+ module certification path (HTB CJCA) through
   to completion.
3. **Eager to learn and grow** — chasing Security+ and a red-team career
   on top of a full-time cloud role.
4. **Teamwork** — built full-stack systems at Sener as part of a team.
5. **Problem-solving** — years of full-stack debugging plus CTF and
   pentesting practice.
6. **Self-directed learning** — HTB CJCA, AWS Cloud Practitioner and the
   homelab were all built outside any required curriculum.
7. **Adaptability** — moves comfortably between GIS/microservices, cloud,
   and offensive security.
8. **Communication** — writes clear penetration-testing reports (part of
   the HTB CJCA path).
9. **Time management** — finished a Computer Engineering degree while
   working full-time.

**Languages:** Spanish (native) · English (advanced) · Italian (basic)

**Studies:**
- Computer Engineering, Universidad de Deusto — completed 2026
- Own degree in Video Game Development and Design, Universidad de Deusto
- HTB CJCA (Certified Junior Cybersecurity Associate) — HackTheBox
- AWS Certified Cloud Practitioner
- IBM OA6 competition — 1st place, university round; eliminated in the
  Madrid round

**Experience (full detail):**
- **Deloitte — Cloud Analyst** (Jul 2026 – Present). Cloud development,
  primarily on AWS.
- **Sener — Full-Stack Developer** (Nov 2025 – Jun 2026). Custom
  development for in-house systems; full-stack work around GIS and
  microservices. Stack: Python, C#, .NET, relational databases, AI, React,
  Angular.

**Roadmap** (vertical timeline):
- **Now** — Working as a Cloud Analyst at Deloitte, preparing the move into
  cybersecurity.
- **Next** — Land a cybersecurity-focused role. Make the full move from
  cloud into security, professionally.
- **Then** — CompTIA Security+. Foundational security certification to
  build on.
- **Later** — Red Team Manager. Leading offensive security engagements end
  to end.

No extra personal note beyond the above (considered and deliberately left
out).

---

## 5. Contact (persistent nav + footer element, all pages)

- Email: `lucasecheverriamdariaga@gmail.com`
- Phone: `684 234 410` (visible on the site, per Lucas's choice)
- GitHub: `lucasEcheverria`
- LinkedIn: `linkedin.com/in/lucas-echeverría-madariaga-66381a20a`
- Location: Bilbao (also shown next to the name in the Home hero)
- Resume/CV: download button — **[Builder note]** no PDF has been supplied
  yet; wire up the button and drop the file in once it exists.
