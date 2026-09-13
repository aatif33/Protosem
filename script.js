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
},{
  title: "Week 3 — 3D Modelling, Electronics & Hands-On Exploration",

  summary: "Explored 3D modelling with Fusion 360 while also gaining hands-on exposure to basic electronics, electronic components, and practical experimentation.",

  details: `Week 3 was a hands-on exploration of both digital design and basic electronics. I began my first serious experience with 3D modelling using Fusion 360, where I learned how physical ideas and objects can be converted into structured digital models.

One of the major activities was part modelling based on a reference image. I studied the object's shape and features before building it step by step using sketches and 3D modelling tools. I also recreated the form of a physical clay model digitally, which helped me understand proportions, curves, surfaces, and the importance of observation when creating a 3D model.

Another interesting activity was rocket modelling in Fusion 360. Working on the rocket helped me explore how a simple concept can gradually be developed into a structured 3D design. Throughout the modelling activities, I experimented with different tools, corrected mistakes, modified features, and learned through iteration.

Alongside CAD modelling, I was introduced to the basics of electronics and got the opportunity to explore different electronic components through hands-on experimentation. Understanding components beyond just their names gave me a better appreciation of how individual parts contribute to an electronic system.

One of the memorable practical experiences was experimenting with a capacitor. During the activity, I ended up damaging/bursting a capacitor, which became an unexpected but valuable learning experience. It reinforced the importance of understanding component characteristics, handling electronic components carefully, and following proper safety practices while experimenting with hardware.

This week taught me that engineering is a combination of designing, experimenting, observing, and learning from mistakes. Fusion 360 introduced me to the digital side of product and component design, while the electronics activities gave me practical exposure to physical hardware.

Overall, Week 3 gave me a broader perspective on engineering by connecting CAD modelling with hands-on electronics. It was a small but important step toward understanding how digital designs and physical components can come together in real-world engineering projects.`,

  images: [
    { src: "week4-1.png", alt: "Fusion 360 3D Modelling" },
    { src: "week4-2.png", alt: "Electronics Components and Practical Experimentation" },
    { src: "week4-3.png", alt: "Rocket Modelling in Fusion 360" },
    { src: "week4-4.png", alt: "" },
    { src: "week4-5.png", alt: "" }
  ]
},{
  title: "Week 4 — Animation, Laser Cutting & 3D Printing",

  summary: "Explored animation in Fusion 360, prepared a fidget spinner design for laser cutting using RDWorks, and learned the fundamentals of 3D printing with Bambu Lab.",

  details: `Week 4 focused on exploring animation, digital fabrication, and 3D printing. I continued developing my skills in Fusion 360 and explored how digital designs can be transformed into physical prototypes.

I created a water bottle animation in Fusion 360 to understand how animation can demonstrate the movement, functionality, and working of a product. I also created an assembly animation to show how different components come together and interact as part of a complete mechanical assembly. These activities helped me understand how motion can be used to communicate a design more effectively.

I was also introduced to RDWorks, a software used for preparing designs for laser cutting. As a practical activity, I worked on a fidget spinner design and prepared it for laser cutting. Seeing the digital design converted into a physical object gave me practical exposure to digital fabrication and helped me understand the workflow from a digital file to a real-world prototype.

Alongside laser cutting, I learned the basics of 3D printing using Bambu Lab. I was introduced to the process of preparing a 3D model for printing, including slicing and understanding basic print settings before starting the print.

Overall, Week 4 helped me connect CAD modelling with animation, laser cutting, and additive manufacturing, giving me a better understanding of how digital designs can be communicated, fabricated, and transformed into physical products.`,

  images: [
    { src: "week04-1.png", alt: "Water Bottle Animation in Fusion 360" },
    { src: "week04-2.png", alt: "Fidget Spinner Laser Cutting using RDWorks" },
    { src: "week04-3.png", alt: "3D Printing using Bambu Lab" },
    { src: "week04-4.png", alt: "3D Printing using Bambu Lab" }
  ],
  moreLink: "week4.html"
},

{
  title: "Week 5 — UI/UX, Problem Statements & Market Exploration",

  summary: "Explored the fundamentals of UI/UX design, participated in a marketplace session with clients and startups, and studied real-world problems to identify potential product opportunities.",

  details: `Week 5 introduced me to the fundamentals of UI/UX design and helped me understand how user needs, usability, and problem discovery influence product development.

As part of the learning process, we explored the basic principles of UI/UX and the importance of understanding users before developing a solution. This helped me look beyond just the visual appearance of a product and consider how users interact with a system and what problems they actually need solved.

We also participated in a marketplace session where clients and startup companies presented real-world problem statements. This provided an opportunity to interact with industry-oriented challenges, understand different problem areas, and explore problems that could potentially be developed into practical solutions.

Alongside this, we worked on user discovery and requirement understanding to identify the needs of target users. This experience helped me understand the importance of research, observation, requirement gathering, and problem definition before moving into the solution and design stages.

Overall, Week 5 strengthened my understanding of UI/UX thinking and introduced me to the process of connecting real-world problems with potential product solutions.`,

  images: [
    { src: "week5-1.png", alt: "UI/UX Design Learning" },
    { src: "week5-2.png", alt: "Marketplace Session with Clients and Startups" },
    { src: "week5-3.png", alt: "User Discovery and Problem Identification" }
  ]
},

{
  title: "Week 6 — Microcontrollers, Embedded Systems & Soldering",

  summary: "Learned the fundamentals of microcontrollers, microprocessors, and embedded systems while gaining hands-on experience with sensors, actuators, soldering, and electronic circuit assembly.",

  details: `Week 6 focused on understanding microcontrollers, microprocessors, and the fundamentals of embedded systems. I explored the basic architecture and working principles of embedded systems and learned how electronic systems interact with the physical environment.

As part of the learning process, I was introduced to sensors and actuators and their role in embedded applications. This helped me understand how systems can receive information from the environment and respond through physical actions.

I also gained practical experience in soldering and desoldering electronic components. These activities improved my understanding of electronic hardware handling and helped me become more comfortable working with circuit boards and individual components.

For the practical activity, I successfully soldered a 555 timer circuit using LEDs, resistors, and a capacitor. Building the circuit provided hands-on experience in understanding basic electronic connections and assembling components into a functional circuit.

Overall, Week 6 connected the theoretical concepts of embedded systems with practical electronics work and strengthened my confidence in handling and assembling basic electronic circuits.`,

  images: [
    { src: "week6-1.jpeg", alt: "Microcontroller and Embedded Systems Learning" },
    { src: "week6-2.jpeg", alt: "Soldering and Desoldering Practice" },
    { src: "week6-3.jpeg", alt: "555 Timer Circuit with LEDs, Resistors and Capacitor" },
    { src: "week6-4.jpeg", alt: "Microcontroller and Embedded Systems Learning" },
    { src: "week6-5.jpeg", alt: "Soldering and Desoldering Practice" },
    { src: "week6-6.jpeg", alt: "555 Timer Circuit with LEDs, Resistors and Capacitor" },
  ]
},

{
  title: "Week 7 — IoT, Connectivity & RTOS",

  summary: "Developed connected applications using Arduino IDE and ESP32, explored web and cloud communication through four IoT tasks, and learned the fundamentals of Real-Time Operating Systems.",

  details: `Week 7 focused on Internet of Things (IoT), connectivity, and Real-Time Operating Systems (RTOS). I worked with Arduino IDE and ESP32 to understand how hardware devices can communicate with web and cloud-based platforms.

During the week, I completed four practical IoT tasks. These included web-based LED control, MQTT cloud communication, voice-based control, and a Firebase-powered smart home system. Each activity provided hands-on experience in connecting hardware with different software and cloud platforms.

The web-based LED control task helped me understand how an ESP32 can be controlled through a web interface. MQTT introduced me to cloud-based messaging and device communication, while the voice-control activity demonstrated how voice commands can be integrated with an IoT device. The Firebase smart home activity further explored how connected devices can interact with a cloud-based platform.

I was also introduced to the fundamentals of Real-Time Operating Systems (RTOS). I learned the basic concepts of tasks, scheduling, and real-time execution and applied these concepts by developing a small project.

Overall, Week 7 strengthened my understanding of IoT communication, ESP32 development, cloud connectivity, voice-based control, and RTOS concepts. It also gave me practical experience in building connected systems where hardware, software, and cloud services work together.`,

  images: [
    { src: "week7-1.png", alt: "ESP32 and Arduino IDE IoT Development" },
    { src: "week7-2.png", alt: "IoT Connectivity and Smart Home Tasks" },
    { src: "week7-3.jpeg", alt: "RTOS Practical Project" }
  ],

  moreLink: "week7.html"
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

${weekData.moreLink ? `
  <a href="${weekData.moreLink}" class="week-more-btn"  rel="noopener noreferrer">
    MORE →
  </a>
` : ""}
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
