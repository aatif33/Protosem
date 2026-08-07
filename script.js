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
  title: " Week 0 — ProtoSem Orientation & Team Building",

  summary: "Participated in the Professional Semester orientation program, team-building activities, and the 16 Personalities Assessment, building a strong foundation for collaboration and professional growth.",

  details: `Week 0 marked the beginning of my Professional Semester journey. During the orientation, I gained a clear understanding of the objectives, structure, and expectations of the program. I actively participated in interactive team-building activities that strengthened my communication and collaboration skills while helping me connect with my peers. One of the highlights of the week was completing the 16 Personalities Assessment, where I discovered my personality type as Advocate (INFJ), providing valuable insights into my strengths, work style, and approach to teamwork. This week emphasized the importance of professional development, self-awareness, leadership, and effective communication, laying a strong foundation for the learning experiences that would follow throughout the semester.`,

  images: [
    { src: "week1-1.png", alt: "ProtoSem Orientation" },
    { src: "week1-2.png", alt: "Team Building Activity" },
    { src: "week1-3.png", alt: "16 Personalities Assessment" }
  ]
},
    {
  title: "Week 1 — 5S Workplace Methodology",

  summary: "Learned and implemented the 5S Workplace Methodology through Cable Management and Desoldering activities, gaining practical engineering experience in workplace organization and electronics handling.",

  details: `Week 1 introduced me to the practical implementation of the 5S Workplace Methodology, highlighting the importance of workplace organization, efficiency, and safety. I initially worked as a member of the Cable Management Team, where I organized and managed cables systematically to maintain a clean and efficient workspace. Later, I participated in Desoldering Works, carefully removing electronic components from circuit boards while following proper handling procedures. These hands-on activities enhanced my teamwork, communication, attention to detail, and responsibility. The experience also strengthened my understanding of organized engineering workflows and demonstrated how systematic work practices improve productivity and reduce errors in practical environments.`,

  images: [
    { src: "week2-1.png", alt: "Cable Management" },
    { src: "week2-2.png", alt: "Desoldering Work" },
    { src: "week2-3.png", alt: "5S Workplace Implementation" }
  ]
},
   {
  title: "Week 2 — Smart Attendance, Python & Creative Problem Solving",

  summary: "Researched and planned a Smart Attendance System using MIT App Inventor, developed an interactive story in Scratch, strengthened Python and OOP fundamentals, and solved five Vibe Coding episodes to enhance logical thinking.",

  details: `Week 2 focused on strengthening both technical and creative problem-solving skills through multiple learning activities. I researched and planned the architecture of a Smart Attendance System using MIT App Inventor, exploring how mobile applications can integrate attendance tracking with a simple and user-friendly interface. Alongside this, I designed and developed an interactive story using Scratch, which improved my understanding of logical flow, event-driven programming, and visual storytelling.

I also completed the fundamentals of Python programming, covering variables, data types, loops, functions, and problem-solving techniques before moving into the basics of Object-Oriented Programming (OOP), including classes, objects, inheritance, encapsulation, and code reusability. To further improve my analytical thinking and debugging skills, I successfully solved five Vibe Coding episodes that challenged me to approach programming problems with structured logic and creative solutions. Overall, this week enhanced my programming fundamentals, application design skills, computational thinking, and confidence in solving real-world technical challenges.`,

  images: [
    { src: "week3-1.png", alt: "Smart Attendance using MIT App Inventor" },
    { src: "week3-2.png", alt: "Interactive Story Developed in Scratch" },
    { src: "week3-3.png", alt: "Python Learning and Vibe Coding Practice" }
  ]
},
    {
      title: "Week 3 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    },
     {
      title: "week 4 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 5 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 6 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 7 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 8 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 9 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 10 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 11 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 12 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 13 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 14 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 15 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 16 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 17 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 18 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 19 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    }, {
      title: "week 20 — In Progress",
      summary: "",
      details: "",
      images: [
        { src: " ", alt: "" },
        { src: " ", alt: "" },
        { src: " ", alt: "" }
      ]
    },
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
