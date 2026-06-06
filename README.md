# Developer Portfolio

A modern, sleek, and highly customizable developer portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It features a unique sidebar navigation layout, an MDX-powered blog, a project showcase, and a professional resume/timeline section.

## 🚀 Features

- **Next.js App Router**: Utilizes the latest Next.js 14 features for optimal performance and routing.
- **Sidebar Navigation**: A clean, persistent left-side navigation menu for desktop, adapting to a mobile-friendly layout on smaller screens.
- **MDX Blog Support**: Write and publish blog posts easily using Markdown and JSX.
- **Project Showcase**: Beautifully display your projects with images, descriptions, and tech stacks.
- **Work History & Timeline**: Highlight your career journey and professional experience.
- **Fully Responsive**: Optimized for all devices—from large desktop monitors to mobile phones.
- **Easy Customization**: Data is decoupled from UI components. Update your details instantly by modifying the files in the `src/constants` directory.

## 💻 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** [MDX](https://mdxjs.com/)
- **Deployment:** Vercel (Recommended)

## 📁 Project Structure

`````

````text
File generated successfully.

```text
├── public/                 # Static assets (images, logos, SVGs)
├── src/
│   ├── app/                # Next.js App Router pages (/, /about, /blog, /projects, /contact)
│   ├── components/         # Reusable React components (Sidebar, Products, WorkHistory, etc.)
│   ├── constants/          # Data files for easy portfolio customization (timeline, products, navlinks)
│   ├── lib/                # Utility functions (MDX parsing, date formatting)
│   └── types/              # TypeScript interface definitions
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.mjs         # Next.js configuration (includes MDX setup)

`````

## 🛠️ Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone [https://github.com/codelikeagirl29/portfolio-sidebar.git](https://github.com/codelikeagirl29/portfolio-sidebar.git)
cd portfolio-sidebar

```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install

```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## ✏️ Customization Guide

This portfolio is designed to be easily customized without digging deep into the React components. You can update most of the content by editing the files located in the `src/constants/` directory:

- `src/constants/navlinks.tsx`: Update sidebar navigation links and icons.
- `src/constants/products.tsx`: Add or remove projects displayed on the Projects page.
- `src/constants/socials.tsx`: Update your social media links (GitHub, LinkedIn, Twitter, etc.).
- `src/constants/timeline.tsx`: Update your work experience and education timeline.

### Adding Blog Posts

To add a new blog post:

1. Create a new folder inside `src/app/blog/` (e.g., `src/app/blog/my-new-post/`).
2. Add a `content.mdx` file inside that folder.
3. Add a `page.tsx` file inside that folder to render the post using the `BlogLayout` component.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
"""

with open("README.md", "w", encoding="utf-8") as f:
f.write(content)

print("File generated successfully.")

```

```
