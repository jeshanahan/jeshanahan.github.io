# Joseph Shanahan — Portfolio

Personal portfolio website for Joseph Shanahan, Computer Science Engineering student at The Ohio State University.

**Live site:** [jeshanahan.github.io](https://jeshanahan.github.io)

Built with React and deployed to GitHub Pages. The site includes a home page, about section, project portfolio, and contact form.

## Features

- Fully responsive layout
- Multi-page routing (Home, About, Portfolio, Contact)
- Centralized content in a single config file
- Contact form powered by [EmailJS](https://www.emailjs.com/)
- Page transitions, theme toggle, and animated cursor

## Tech Stack

- React 18 (Create React App)
- React Router
- React Bootstrap / Bootstrap 5
- EmailJS
- gh-pages

## Local Development

Clone the repository:

```bash
git clone https://github.com/jeshanahan/jeshanahan.github.io.git
cd jeshanahan.github.io
```

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Updating Content

Most site content lives in `src/content_option.js`, including:

- Name, intro text, and meta description
- About bio, work history, and skills
- Portfolio projects
- Contact details and social links

After editing, save the file and refresh the browser to preview changes.

## Deployment

Build and publish to GitHub Pages:

```bash
yarn deploy
```

The `predeploy` script builds the app and copies `index.html` to `404.html` so client-side routing works on GitHub Pages.

## Project Structure

```
src/
├── app/              # App shell and routing
├── pages/            # Home, About, Portfolio, Contact
├── header/           # Navigation
├── components/       # Theme toggle, social icons
├── hooks/            # Router and cursor helpers
└── content_option.js # Site content and configuration
```

## Credits

This project is based on the [react-portfolio](https://github.com/ubaimutl/react-portfolio) template by [ubaimutl](https://github.com/ubaimutl).
