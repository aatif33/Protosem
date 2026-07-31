(function(){
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", ()=>{
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click", ()=>{
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

(function(){
  const weeksData = [
    {
      title: "Week 0 — Orientation",
      summary: "Getting started, understanding objectives, planning the semester, and setting up the development environment.",
      details: "This week focused on environment setup. Installed Node.js, configured Git repositories, and set up our primary project management boards in Notion to track our 20-week sprint.",
      images: [
        { src: "week1-1.png", alt: "Desk Setup" },
        { src: "week1-2.png", alt: "Git Config" },
        { src: "week1-3.png", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 1 — Foundation",
      summary: "Research, ideation, requirement gathering, and project planning.",
      details: "Conducted market research and competitive analysis. We defined our target audience and started drafting initial user personas to guide our design decisions.",
      images: [
        { src: "Week2-1.webp", alt: "Desk Setup" },
        { src: "Week2-2.webp", alt: "Git Config" },
        { src: "Week2-3.webp", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 2 — Design Thinking",
      summary: "User research, wireframing, brainstorming, and UX analysis.",
      details: "Moved from theory into Figma. Created low-fidelity wireframes and mapped out the core user journey to ensure a frictionless navigation experience.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 3 — UI Design",
      summary: "High-fidelity interface design and component creation.",
      details: "Established our design system. Built out typography scales, color palettes, and a reusable component library in Figma to ensure consistency.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 4 — Frontend Development",
      summary: "Building responsive layouts and reusable UI components.",
      details: "Bootstrapped the React application. Translated Figma components into JSX and set up a mobile-first responsive grid using modern CSS.",
     images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 5 — Backend Integration",
      summary: "API integration, authentication, and server communication.",
      details: "Initialized the Node.js/Express server. Set up routing, middleware, and created our first RESTful API endpoints to serve mock data to the frontend.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 6 — Database",
      summary: "Data modelling, CRUD operations, and database optimization.",
      details: "Configured MongoDB and Mongoose. Designed the database schemas, established relationships, and wrote the logic for full CRUD operations.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 7 — Testing",
      summary: "Debugging, usability testing, and fixing issues.",
      details: "Implemented unit tests using Jest. Squashed early bugs, improved error handling on the server, and ran basic usability tests on the frontend.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 8 — Deployment",
      summary: "Hosting applications and deployment workflow.",
      details: "Set up CI/CD pipelines. Deployed the backend to Render/AWS and the frontend to Vercel, ensuring environment variables were securely configured.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 9 — Optimization",
      summary: "Performance optimization and accessibility improvements.",
      details: "Ran Lighthouse audits. Optimized image assets, implemented lazy loading, and ensured all semantic HTML met WCAG accessibility standards.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 10 — Refinement",
      summary: "UI refinement and animation enhancements.",
      details: "Added polish to the user interface. Implemented smooth CSS transitions, hover states, and micro-interactions to make the app feel alive.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 11 — Architecture",
      summary: "Advanced JavaScript concepts and reusable architecture.",
      details: "Refactored codebase for scalability. Implemented global state management using React Context API to avoid prop drilling in deeply nested components.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 12 — Documentation",
      summary: "Project documentation and presentation preparation.",
      details: "Wrote comprehensive READMEs, documented API endpoints with Swagger, and started outlining the slides for our mid-semester presentation.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 13 — Feedback",
      summary: "Client feedback implementation and improvements.",
      details: "Gathered feedback from peer reviews and stakeholders. Pivoted slightly on the dashboard layout based on direct user input.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 14 — Code Quality",
      summary: "Code optimization and responsive testing.",
      details: "Enforced strict ESLint rules and Prettier formatting. Conducted thorough cross-browser testing on Safari, Chrome, and Firefox.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 15 — Security",
      summary: "Security improvements and production readiness.",
      details: "Secured our routes. Implemented JWT authentication, bcrypt password hashing, and added Helmet.js to protect against common web vulnerabilities.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 16 — Enhancements",
      summary: "Feature enhancements and polishing.",
      details: "Developed stretch goals including a dark mode toggle and an integrated chatbot feature to assist users navigating the platform.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 17 — QA",
      summary: "Final UI improvements and quality assurance.",
      details: "End-to-End (E2E) testing utilizing Cypress. Simulated real user journeys to ensure the critical paths (signup, checkout) never break.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 18 — Portfolio",
      summary: "Portfolio updates and documentation.",
      details: "Began compiling the case study. Photographed the final application screens, wrote the narrative of our challenges, and updated personal portfolios.",
     images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 19 — Review",
      summary: "Final review and project showcase preparation.",
      details: "Dry runs for the final presentation. Practiced pacing, finalized the demo scripts, and double-checked the live production servers.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    },
    {
      title: "Week 20 — Completion",
      summary: "Professional presentation, deployment, and reflection on the overall journey.",
      details: "Showcase day! Presented the final build to the panel, reflected on the 20-week journey, and officially graduated the Professional Semester.",
      images: [
        { src: " ", alt: "Desk Setup" },
        { src: " ", alt: "Git Config" },
        { src: " ", alt: "Notion Board" }
      ]
    }
  ];

  const container = document.getElementById("timeline");
  const frag = document.createDocumentFragment();
  const accents = ["var(--yellow)","var(--blue)","var(--coral)"];

  weeksData.forEach((weekData, idx) => {
    const week = document.createElement("div");
    week.className = "week";
    week.style.borderTop = `6px solid ${accents[idx % accents.length]}`;

    const imagesHTML = weekData.images.map(img => 
      `<img src="${img.src}" alt="${img.alt}" loading="lazy" />`
    ).join('');

    week.innerHTML = `
      <div class="week-head">
        <h3>${weekData.title} <span class="expand-icon">↓</span></h3>
        <span class="n">${String(idx).padStart(2,"0")}</span>
      </div>
      <div class="week-content">${weekData.summary}</div>
      <div class="week-extra">
        <div class="week-extra-inner">
          <div class="week-extra-content">
            <h4>WEEK ${idx} INSIGHTS</h4>
            <p>${weekData.details}</p>
            <div class="card-images">
              ${imagesHTML}
            </div>
          </div>
        </div>
      </div>
    `;

    // Click event to expand/shrink the card
    week.addEventListener("click", () => {
      // Toggle the 'expanded' class on the clicked card
      week.classList.toggle("expanded");
      
      // Close other open cards automatically (optional - uncomment to enable)
     
      document.querySelectorAll(".week").forEach(w => {
        if (w !== week) w.classList.remove("expanded");
      });
    });

    frag.appendChild(week);
  });

  container.appendChild(frag);
})();

/* Skill bar reveal on scroll */
const skillBoxes = document.querySelectorAll(".skill-box");
const skillObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("in-view");
      skillObserver.unobserve(entry.target);
    }
  });
},{ threshold:.4 });
skillBoxes.forEach(box=>skillObserver.observe(box));

/* Active nav link on scroll */
const navA = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section, header.hero");
window.addEventListener("scroll", ()=>{
  let current = "";
  sections.forEach(sec=>{
    const offset = sec.offsetTop - 100;
    if(window.scrollY >= offset) current = sec.getAttribute("id");
  });
  navA.forEach(link=>{
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
