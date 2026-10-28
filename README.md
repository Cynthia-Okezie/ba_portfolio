# Business Analyst Portfolio (Static Website)

## What this project is

A fast, professional, **static** portfolio website for Cynthia Justice Okezie, Business Analyst.

- Plain HTML, CSS and JavaScript. **No** React, Next.js, npm, Node.js or build step.
- Works on GitHub Pages, Netlify, Vercel (static) and most other static hosts.
- Light and dark mode (remembers the visitor's choice).
- Contact form powered by Formspree (no backend needed).
- Each project has its own case-study page that is created automatically from `assets/js/data.js`.

> Because the page loads its content with JavaScript, if you open `index.html` by double-clicking it, everything still works. A local server is not required.

---

## How to upload it to GitHub

1. Sign in at <https://github.com> and click **New repository**.
2. Give it a name (for example `portfolio`). Keep it **Public**. Click **Create repository**.
3. Click **uploading an existing file**.
4. Unzip this project on your computer, open the folder, and drag **everything inside it** (`index.html`, `assets`, `projects`, `favicon.ico`, `README.md`, and so on) into the GitHub upload box.
   Do **not** upload the outer folder itself. `index.html` must sit at the top level (the "root") of the repository.
5. Scroll down and click **Commit changes**.

## GitHub Pages (making it a live website)

1. In your repository, open **Settings**.
2. Click **Pages** in the left menu.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/ (root)**, then click **Save**.
5. Wait a minute or two. The address appears at the top of the Pages screen, usually `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

GitHub Pages automatically uses `index.html` as the entry page.

Optional: once the site is live, open `index.html` and replace the `og:image` value (and un-comment `og:url`) with your full website address so link previews on LinkedIn and other sites show your photo.

---

## How to update your information

Almost everything is in one file: **`assets/js/data.js`**. Open it, change the text between the quotation marks, and save. Keep the commas and quotes.

| What | Where in `assets/js/data.js` |
|---|---|
| Name | `name` |
| Title / title tags | `title`, `titleTags` |
| Location | `location` |
| Tagline | `tagline` |
| Short bio (hero) | `shortBio` |
| About section paragraphs | `about` |
| Education / certifications | `education`, `certifications` |
| Years of experience | `yearsExperience` (set to `""` to hide) |
| Skills (all categories) | `competencies` |
| Experience | `experience` (copy one `{ ... }` block to add a role) |
| Projects / case studies | `projects` (copy one `{ ... }` block to add a project) |
| Resume file and button text | `resume`, `resumeButtonText` |
| Email, phone | `email`, `phone`, `phoneLink` |
| LinkedIn, GitHub | `linkedin`, `github` |
| Formspree endpoint | `formspreeEndpoint` |

Things that live in **`index.html`** instead:

- Page title, description and social-sharing text: the "SEO / SOCIAL" block at the top.
- The "What I bring" box in the About section.
- The `action="https://formspree.io/f/..."` on the contact form. (`data.js` overrides it, but keep both the same so the form still works if JavaScript is blocked.)
- Section headings.

## How to add images

Put images in `assets/images/`, then point to them from `data.js`.

- Profile photo: replace `assets/images/profile.jpg` (portrait, about 800 x 1200 px works well).
- Project thumbnails: `project-01.jpg`, `project-02.jpg`, `project-03.jpg` are **summary illustrations** built from your case-study details (AS-IS/TO-BE, the provided cost figures, user story and backlog). You can replace them with your own actual process maps, workbook screenshots or backlog screenshots (about 1200 x 750 px, under 300 KB), keeping the same file names, or change the `image` value of the project in `data.js`.
- Favicon: replace `favicon.ico` in the main folder (and `assets/images/favicon.ico` if you want a copy). A free generator such as realfavicongenerator.net can make one from a logo.

## How to add your resume

Save the PDF in `assets/documents/` as **`resume.pdf`** (replacing the existing file). If you use a different file name, update `resume` in `data.js`. Avoid spaces in file names.

## How to add projects

1. Open `assets/js/data.js` and find the `projects` list.
2. Copy an entire project block (from `{` to `},`) and paste it after the last one.
3. Give it a new, unique `id` (lowercase words with hyphens, e.g. `"sales-analysis"`).
4. Fill in every field. Leave a field as `""` or `[]` if you have nothing to put there.
5. Add its thumbnail to `assets/images/` and set `image`.
6. Save. The card and the case-study page (`projects/case-study.html?id=your-id`) appear automatically.

To link to a supporting document, upload it to `assets/documents/` and set the document's `url` (for example `"assets/documents/gap-analysis.pdf"`). Documents without a `url` are shown as plain text deliverables.

Please only add information that is true. Case studies that are exercises should say so (see the `outcomeNote` and `impact` fields).

## How to change colours

Open `assets/css/style.css`. The first block, `:root { ... }`, holds the **light** theme colours; `:root[data-theme="dark"]` holds the **dark** theme colours. The main brand colour is `--accent`.

## How to change fonts

In `assets/css/style.css`, change `--font-heading` and `--font-body` at the top. Then update the Google Fonts `<link>` near the top of `index.html` **and** `projects/case-study.html` to load the new fonts. If you remove that link, the site falls back to Georgia and your system font.

---

## Folder guide

```
index.html                  main page
projects/case-study.html    template used by every case study
assets/css/style.css        design
assets/js/data.js           YOUR CONTENT
assets/js/script.js         behaviour (rarely needs editing)
assets/images/              photos, thumbnails, favicon
assets/documents/           resume and supporting documents
PORTFOLIO-INPUT.md          questionnaire for collecting future updates
```

## Contact form notes

The form posts to your Formspree endpoint. The first time someone submits it, Formspree may ask you to confirm your email address. Check your inbox (and spam folder) and follow the link. Only the public form URL is used; there are no passwords or keys in this project.

## Troubleshooting

- **Page looks empty:** `assets/js/data.js` probably has a typo (a missing quote or comma). Open the browser console (F12) to see the line number.
- **Images missing on GitHub Pages:** file names are case-sensitive. `Profile.jpg` is not `profile.jpg`.
- **Changes not showing:** hard-refresh the page (Ctrl+Shift+R or Cmd+Shift+R). GitHub Pages can take a minute to update.
