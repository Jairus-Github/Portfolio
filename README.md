# JAIRUS.DEV — Portfolio of Jairus Ulrich B. Cusi

React + Vite + Tailwind CSS + Framer Motion + Lucide + Three.js.
A monochrome gray, editorial-style developer portfolio.

## Run it

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # development server
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Edit your content (one file)

Everything personal lives in **`src/data/portfolio.js`**:

| What | Where |
| --- | --- |
| Name, age, location, availability | `site` |
| Hero text, rotating roles, floating labels | `hero` |
| About text, philosophy, portrait | `about` |
| Skills and **skill levels** | `skills` (`level: 0-100`, or `null` to hide the bar) |
| Projects, links, screenshots | `projects` |
| Education timeline | `timeline` (`placeholder: true` = dashed "add yours" entry) |
| Strengths | `strengths` |
| Contact links and form endpoint | `contact` |

### Things you still need to fill in

These are intentionally left blank so nothing on the site is invented:

1. **Project screenshots / videos** — drop files in `public/projects/` and set `image: '/projects/name.png'` (or `video`).
2. **Live demo and GitHub links** for each project. Empty links show a "coming soon" state.
3. **"My contribution"** text for each project.
4. **Skill levels** — all set to `null` (no bars shown) until you decide on honest values.
5. **Email, GitHub, LinkedIn** in `contact.links` — set `placeholder: false` and replace the URL.
6. **Timeline** — the training, certification, milestone, and achievement entries are placeholders. Edit or delete them.
7. **Portrait** — put a photo in `public/` and set `about.photo`.
8. **Social preview image** — add an `og:image` and `og:url` meta tag in `index.html` after deploying.

### Make the contact form work

The form validates input but does not pretend to send anything. To make it deliver messages:

1. Create a free form endpoint (for example at [Formspree](https://formspree.io)).
2. Paste its URL into `contact.formEndpoint` in `src/data/portfolio.js`.

Until then, visitors who submit see a clear "not connected yet" message.

## Project structure

```
src/
  App.jsx                 page assembly, intro, scroll progress
  index.css               gray design tokens, grain, grid, metallic borders
  data/portfolio.js       ALL editable content
  hooks/useActiveSection  active nav tracking
  components/
    Navbar, Hero, HeroOrb (Three.js), About, Skills, Projects,
    Timeline, Strengths, Contact, Footer
    ui/  Reveal, RevealText, RotatingText, TiltCard, MagneticButton,
         CustomCursor, SectionHeading, icons
```

## Notes

- Animations respect `prefers-reduced-motion`; the custom cursor only appears on mouse/trackpad devices.
- Three.js loads in a separate chunk after first paint and pauses when off screen.
- No secondary theme is included, so there are no theme controls.
