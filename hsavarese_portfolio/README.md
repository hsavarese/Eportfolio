# Hunter Savarese's Portfolio

This is my personal portfolio website showcasing my projects, skills, and experience.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
   This will:
   - Compile SCSS to CSS
   - Compile TypeScript to JavaScript
   - Start a live server with auto-reload

3. For development with watch mode:
   ```bash
   npm run watch
   ```
   This will watch for changes in SCSS and TypeScript files and recompile automatically.

## Build Process

The build process:
- Compiles SCSS files from `style/` to `dist/style/`
- Compiles TypeScript files from `scripts/` to `dist/scripts/`
- Copies HTML files and images to the `dist/` directory

## Project Structure

```
hsavarese_portfolio/
├── dist/               # Compiled files (generated)
├── images/            # Image assets
├── scripts/           # TypeScript source files
├── style/             # SCSS source files
├── index.html         # Main HTML file
├── package.json       # Project configuration
├── tsconfig.json      # TypeScript configuration
└── netlify.toml       # Netlify deployment configuration
```

## Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch. 