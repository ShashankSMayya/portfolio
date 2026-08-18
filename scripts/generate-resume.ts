// Requires a Chrome/Chromium install (override with CHROME_PATH); no npm deps.

import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cv } from "../src/data/cv";
import { getProjectById } from "../src/data/projects";

const projectRoot = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const outputPath = join(projectRoot, "public", "resume.pdf");

function findChrome(): string {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter((p): p is string => Boolean(p));
  const found = candidates.find((p) => existsSync(p));
  if (!found) {
    console.error(
      "Could not find a Chrome/Chromium binary. Set CHROME_PATH to your browser executable."
    );
    process.exit(1);
  }
  return found;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const prettyUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function buildHtml(): string {
  const experience = cv.experience
    .map(
      (job) => `
      <div class="job">
        <div class="job-head">
          <div>
            <span class="job-title">${esc(job.title)}</span>
            <span class="job-company">· ${esc(job.company)}${job.location ? `, ${esc(job.location)}` : ""}</span>
          </div>
          <div class="job-period">${esc(job.period)}</div>
        </div>
        <p class="job-summary">${esc(job.summary)}</p>
        <ul class="highlights">
          ${job.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
        </ul>
        <div class="tech">${job.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>`
    )
    .join("");

  const projectsHtml = cv.resumeProjectIds
    .map((id) => {
      const p = getProjectById(id);
      if (!p) throw new Error(`Unknown resume project id: ${id}`);
      if (!p.resumeHighlights?.length) throw new Error(`Project "${id}" has no resumeHighlights`);
      const links = [
        p.url && `<a href="${esc(p.url)}">${esc(prettyUrl(p.url).split("/")[0])}</a>`,
        p.playStore && `<a href="${esc(p.playStore)}">Play Store</a>`,
        p.appStore && `<a href="${esc(p.appStore)}">App Store</a>`,
      ].filter(Boolean);
      return `
      <div class="job">
        <div class="job-head">
          <div>
            <span class="job-title">${esc(p.title)}</span>
            ${links.length ? `<span class="job-company">· ${links.join(" · ")}</span>` : ""}
          </div>
        </div>
        <ul class="highlights">
          ${p.resumeHighlights.map((h) => `<li>${esc(h)}</li>`).join("")}
        </ul>
      </div>`;
    })
    .join("");

  const skills = cv.skills
    .map(
      (cat) => `
      <div class="skill-row">
        <span class="skill-cat">${esc(cat.category)}</span>
        <span class="skill-items">${cat.skills.map(esc).join(" · ")}</span>
      </div>`
    )
    .join("");

  const education = cv.education
    .map(
      (ed) => `
      <div class="edu">
        <div>
          <span class="edu-degree">${esc(ed.degree)}</span>
          <span class="edu-school">· ${esc(ed.institution)}</span>
        </div>
        <div class="edu-period">${esc(ed.period)}</div>
      </div>`
    )
    .join("");

  const achievements = cv.achievements
    .map(
      (a) => `
      <div class="ach">
        <div class="ach-head">
          <span class="ach-title">${esc(a.title)}</span>
          <span class="ach-date">${esc(a.date)}</span>
        </div>
        <p class="ach-desc">${esc(a.description)}${
          a.link ? ` <a href="${esc(a.link)}">${esc(new URL(a.link).hostname.replace(/^www\./, ""))} ↗</a>` : ""
        }</p>
      </div>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(cv.name)} — Resume</title>
<style>
  @page { size: A4; margin: 13mm 14mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root { --accent: #0f4c81; --ink: #1a1a1a; --muted: #555; --line: #d9d9d9; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: var(--ink);
    font-size: 9.6pt;
    line-height: 1.45;
  }
  a { color: var(--accent); text-decoration: none; }

  header { border-bottom: 2px solid var(--accent); padding-bottom: 10px; margin-bottom: 14px; }
  h1 { font-size: 21pt; font-weight: 700; letter-spacing: 0.3px; color: var(--accent); }
  .role { font-size: 11.5pt; color: var(--ink); margin-top: 2px; font-weight: 500; }
  .contact { margin-top: 6px; color: var(--muted); font-size: 8.8pt; }
  .contact span:not(:last-child)::after { content: "  |  "; white-space: pre; color: var(--line); }

  h2 {
    font-size: 10.5pt; text-transform: uppercase; letter-spacing: 1.2px;
    color: var(--accent); border-bottom: 1px solid var(--line);
    padding-bottom: 3px; margin: 14px 0 8px;
  }
  section:first-of-type h2 { margin-top: 0; }

  .job { margin-bottom: 11px; break-inside: avoid; }
  .job-head, .edu, .ach-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .job-title, .edu-degree, .ach-title { font-weight: 700; font-size: 10.3pt; }
  .job-company, .edu-school { color: var(--muted); }
  .job-period, .edu-period, .ach-date { color: var(--muted); font-size: 8.8pt; white-space: nowrap; }
  .job-summary { margin: 3px 0 4px; color: var(--ink); }
  .highlights { padding-left: 16px; }
  .highlights li { margin-bottom: 1.5px; }
  .tech { margin-top: 5px; display: flex; flex-wrap: wrap; gap: 4px; }
  .tech span {
    border: 1px solid var(--line); border-radius: 8px;
    padding: 0.5px 7px; font-size: 8pt; color: var(--muted);
  }

  .skill-row { display: flex; gap: 8px; margin-bottom: 3px; }
  .skill-cat { font-weight: 700; min-width: 150px; }
  .skill-items { color: var(--muted); }

  .edu { margin-bottom: 5px; }
  .ach { margin-bottom: 7px; break-inside: avoid; }
  .ach-desc { color: var(--muted); }
</style>
</head>
<body>
  <header>
    <h1>${esc(cv.name)}</h1>
    <div class="role">${esc(cv.role)}</div>
    <div class="contact">
      <span>${esc(cv.location)}</span>
      <span><a href="mailto:${esc(cv.email)}">${esc(cv.email)}</a></span>
      <span><a href="${esc(cv.website)}">${esc(prettyUrl(cv.website))}</a></span>
      <span><a href="${esc(cv.linkedin)}">${esc(prettyUrl(cv.linkedin))}</a></span>
    </div>
  </header>

  <section>
    <h2>Summary</h2>
    <p>${esc(cv.summary)}</p>
  </section>

  <section>
    <h2>Experience</h2>
    ${experience}
  </section>

  <section>
    <h2>Selected Projects</h2>
    ${projectsHtml}
  </section>

  <section>
    <h2>Skills</h2>
    ${skills}
  </section>

  <section>
    <h2>Education</h2>
    ${education}
  </section>

  <section>
    <h2>Talks &amp; Recognition</h2>
    ${achievements}
  </section>
</body>
</html>`;
}

const chrome = findChrome();
const workDir = mkdtempSync(join(tmpdir(), "resume-"));
const htmlPath = join(workDir, "resume.html");
writeFileSync(htmlPath, buildHtml());

const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${outputPath}`,
    `file://${htmlPath}`,
  ],
  { stdio: "pipe", encoding: "utf8" }
);

rmSync(workDir, { recursive: true, force: true });

if (result.status !== 0 || !existsSync(outputPath)) {
  console.error("Chrome failed to generate the PDF:");
  console.error(result.stderr || result.stdout);
  process.exit(1);
}

console.log(`Resume written to ${outputPath}`);
