export const products = [
  {
    href: "https://lindseyk.dev",
    title: "lindseyk.dev",
    description:
      "A dynamic and responsive personal portfolio built using Next.js to elevate my online presence.",
    thumbnail: "/images/projects/vcard.png",
    images: ["/images/projects/vcard-2.png", "/images/projects/vcard-3.png"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    slug: "lindseyk-dev",
    content: (
      <div>
        <p>
          Elevate your online presence with my latest project, a dynamic and
          responsive personal portfolio built using Next.js. This cutting-edge
          web application serves as an interactive resume, showcasing my skills,
          experiences, and projects in a sleek and user-friendly manner.
        </p>
        <p>
          Built with performance and modern UX in mind, it utilizes server-side
          rendering, seamless Framer Motion animations, and MDX for rich,
          highly-styled blog content. It represents my core philosophy as a
          developer: creating digital experiences that are as structurally sound
          under the hood as they are visually engaging on the screen.
        </p>
      </div>
    ),
  },
  {
    href: "https://fl-re-drill.netlify.app",
    title: "Florida Real Estate Drill",
    description:
      "An interactive study platform designed to help students master Florida real estate laws, finance, and appraisal concepts.",
    thumbnail: "/images/projects/fl-re-drill.png",
    images: [
      "/images/projects/fl-re-drill-2.png",
      "/images/projects/fl-re-drill-3.png",
    ],
    stack: ["React", "JavaScript", "Netlify"],
    slug: "fl-re-drill",
    content: (
      <div>
        <p>
          Preparing for the Florida Real Estate exam requires mastering a
          massive amount of information. Instead of just reading textbooks, I
          decided to build a tool that forces active recall through targeted
          drilling and practice scenarios.
        </p>
        <p>
          The system is built upon a Component-based Architecture using React 19
          and Next.js 16. It utilizes a modular design pattern where UI logic is
          decoupled from data structures, ensuring scalability and
          maintainability. Styling is handled via Tailwind CSS 4.0, utilizing
          its latest beta features for ultra-efficient styling, while state
          management for quizzes and timers is encapsulated within custom React
          hooks.
        </p>
        <p>
          This application handles complex state management to track user
          progress, grade scorecards in real-time, and identify weak points in
          specific categories like property law or amortization. It is the
          ultimate &quot;two birds, one stone&quot; project—sharpening my
          frontend architecture skills while ensuring I am fully prepared for
          licensing.
        </p>
      </div>
    ),
  },
  {
    href: "https://ski-barn.com",
    title: "The Ski Barn",
    description:
      "A dedicated, performance-driven business website for a local Personal Watercraft (PWC) mechanic.",
    thumbnail: "/images/projects/ski-barn.png",
    images: [
      "/images/projects/ski-barn-1.png",
      "/images/projects/ski-barn-2.png",
    ],
    stack: ["Next.js", "Tailwind CSS", "Web Design"],
    slug: "ski-barn",
    content: (
      <div>
        <p>
          Coming from a background as an automotive technician, I know exactly
          what a mechanic&apos;s business needs to succeed: clear communication,
          established trust, and a frictionless way for clients to get in touch
          when their equipment breaks down.
        </p>
        <p>
          I designed and developed The Ski Barn to serve as a digital storefront
          for a local PWC repair shop. The focus was on local SEO optimization,
          rapid page load speeds, and a mobile-first design, ensuring that
          customers out on the water can easily find the site and request
          service directly from their phones.
        </p>
      </div>
    ),
  },
  {
    href: "/lighthouse", // Update this with your actual deployment link
    title: "Lighthouse",
    description:
      "A custom real estate analytics dashboard designed to visualize market velocity and structural data across the Florida Panhandle.",
    thumbnail: "/images/projects/lighthouse.jpg",
    images: [
      "/images/projects/lighthouse-1.png",
      "/images/projects/lighthouse-3.png",
    ],
    stack: ["Next.js", "TypeScript", "Recharts", "Framer Motion"],
    slug: "lighthouse",
    content: (
      <div>
        <p>
          Navigating the Panhandle real estate market requires more than
          standard broker tools. Lighthouse was built to cut through the noise
          by aggregating raw market data into actionable visual insights.
        </p>
        <p>
          The platform tracks neighborhood-specific velocity, historical flood
          zone shifts, and structural yield curves. By leveraging custom
          data-visualization components, it allows users to map market heat
          signatures in real-time, moving beyond static tables to a more
          mechanical, data-driven understanding of local property values.
        </p>
      </div>
    ),
  },
  {
    href: "https://neobrutalist.netlify.app/",
    title: "Neobrutalist Control Center",
    description:
      "An experimental developer dashboard featuring a bold, high-contrast neobrutalist design aesthetic.",
    thumbnail: "/images/projects/dev-dashboard.png",
    images: ["/images/neobrutal-1.png", "/images/neobrutal-2.png"],
    stack: ["HTML", "CSS", "JavaScript"],
    slug: "neobrutalist-control-center",
    content: (
      <div>
        <p>
          Sometimes as a developer, you have to break away from standard
          corporate templates and experiment with raw UI paradigms. This project
          is a deep dive into the &quot;Neobrutalism&quot; design trend.
        </p>
        <p>
          Characterized by harsh shadows, stark high-contrast colors, and thick
          borders, this control center rejects soft modernism in favor of
          structural visibility. Building this allowed me to push the boundaries
          of pure CSS styling and explore how unorthodox visual hierarchy can
          still result in a highly functional, accessible user interface.
        </p>
      </div>
    ),
  },
  {
    href: "https://lhreactportfolio.vercel.app/",
    title: "React Portfolio v1",
    description:
      "A cleanly designed, component-driven portfolio site showcasing my foundational React architecture.",
    thumbnail: "/images/projects/react-portfolio-v1.png",
    images: ["/images/projects/react-portfolio-v1-2.png"],
    stack: ["React", "CSS", "Vercel"],
    slug: "react-portfolio-v1",
    content: (
      <div>
        <p>
          Before moving to Next.js and server-side rendering, I built this
          iteration of my portfolio using standard React. It serves as a great
          milestone for my frontend journey.
        </p>
        <p>
          This project heavily utilizes React hooks for state management and
          functional components to maintain a clean, modular codebase. Deployed
          seamlessly on Vercel, it demonstrates my ability to take a design
          concept and translate it into a fully interactive, production-ready
          Single Page Application.
        </p>
      </div>
    ),
  },
];
