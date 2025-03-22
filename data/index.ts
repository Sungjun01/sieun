export const navItems = [
  { name: "Home", link: "#about" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I blend electronic engineering and software development expertise",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Web3 Dev Asia & Cathay Hackathon",
    description: "First Runner-Up",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Python, C/C++, React.js, Node.js, MongoDB",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Research-driven innovator with IoT expertise",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently researching ESG solutions with IoT integration",
    description: "TrashTrack Project with Logitech",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating on innovative tech projects?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const projects = [
  {
    id: 1,
    title: "TrashTrack - ESG IoT Solution",
    des: "Led market analysis and research strategies to transition the TrashTrack concept into B2B and B2C environments, leveraging big data, IoT, and ESG principles. Collaborated with Logitech HK, the US team, and V-cycle to develop a comprehensive mobile application demo that earned First Runner-Up at Web3 Dev Asia. The solution integrates smart waste management with sustainable business practices, providing real-time tracking and analytics for waste reduction initiatives.",
    img: "/p1.jpeg",
    iconLists: ["/react.svg", "/node.svg", "/mongodb.svg", "/iot.svg"],
    link: "https://trashtrack.io",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "IoT Sensors",
      "Big Data Analytics",
    ],
    impact:
      "Created a scalable solution that helps businesses reduce waste management costs by up to 30% while promoting sustainable practices and ESG compliance.",
  },
  {
    id: 2,
    title: "Neopets Interactive Game",
    des: "Designed and developed an interactive, user-centric game using HTML, CSS, and React.js with a robust backend system leveraging REST APIs and MongoDB. Implemented a secure user authentication framework utilizing JWT to enhance access control and protect sensitive user information. The game features intuitive UI/UX design principles that significantly improve user engagement and retention metrics.",
    img: "/p2.png",
    iconLists: ["/react.svg", "/node.svg", "/mongodb.svg", "/jwt.svg"],
    link: "https://neopets.com",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
    ],
    impact:
      "Delivered a fully functional gaming platform during a summer internship that enhanced user engagement and contributed to the company's interactive gaming portfolio.",
  },
  {
    id: 3,
    title: "Cathay Travel Experience App",
    des: "A data-driven mobile application for HK Express focused on enhancing customer travel experience through personalized recommendations and cloud data integration. Utilized Flutter to create a cross-platform mobile application prototype within 24 hours, alongside implementing a ChatGPT-based recommendation system. Won First Runner-Up, Best Presenter Award, and Best Low-Cost Travel Solution at the Cathay Hackathon. Continued development with regular meetings with HK Express, Google Hong Kong, and Cathay Pacific for potential app launch.",
    img: "/p3.png",
    iconLists: ["/flutter.svg", "/firebase.svg", "/chatgpt.svg", "/cloud.svg"],
    link: "https://cathay-travel.com",
    technologies: [
      "Flutter",
      "Firebase",
      "ChatGPT API",
      "Cloud Services",
      "Data Analytics",
    ],
    impact:
      "Created a prototype that demonstrated potential for 15% improvement in customer travel experience and operational efficiency for HK Express.",
  },
  {
    id: 4,
    title: "USThings Website Platform",
    des: "Designed and developed the USThings website to facilitate convenient access to HKUST academic and campus systems, including features for technical testing and student resources. Implemented user-friendly interfaces and streamlined navigation to improve accessibility to various university services. Created an optimized technical testing platform for the USThing interview process, ensuring consistent evaluation of candidate skills.",
    img: "/p4.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/react.svg"],
    link: "https://usthings.com",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Responsive Design",
    ],
    impact:
      "Improved accessibility to university resources for HKUST students and created a standardized technical evaluation platform for new team members.",
  },
  {
    id: 5,
    title: "HKUST Robotics PCB Design",
    des: "Utilized KiCad's schematic and PCB editor to design an optimized printed circuit board for robot motors, focusing on economic factors, component spacing, and noise reduction. Applied advanced electrical engineering principles to create an efficient and reliable design that balances performance with cost-effectiveness. Recognized as a top electrical engineer for this achievement, demonstrating strong theoretical knowledge and practical welding skills.",
    img: "/robotics.png",
    iconLists: ["/kicad.svg", "/arduino.svg", "/electronics.svg"],
    link: "https://hkust-robotics.com",
    technologies: [
      "KiCad",
      "PCB Design",
      "Circuit Analysis",
      "Electronics Engineering",
    ],
    impact:
      "Created an optimized PCB design that reduced production costs by 20% while maintaining high performance standards for robotic applications.",
  },
  {
    id: 6,
    title: "LunaSat Integration - NASA GLEE Project",
    des: "Led the hardware integration of LunaSat (mini satellite) with Arduino through 10 hands-on activities as part of NASA's Great Lunar Expedition for Everyone (GLEE) project. Explored aerospace STEM applications and satellite technology, focusing on sensor integration and data collection methodologies. Produced and shared 10 engaging educational videos on Instagram (@gleehkust) using Adobe Premiere Pro, highlighting essential sensors for small satellites and promoting lunar expedition initiatives.",
    img: "/lunasat.jpeg",
    iconLists: ["/arduino.svg", "/nasa.svg", "/satellite.svg", "/premiere.svg"],
    link: "https://glee.colorado.edu",
    technologies: [
      "Arduino",
      "Satellite Hardware",
      "Sensor Integration",
      "Video Production",
    ],
    impact:
      "Contributed to aerospace education by creating accessible content about satellite technology and NASA's lunar expedition initiatives.",
  },
  {
    id: 7,
    title: "AI-Enhanced Piezometer Research",
    des: "Conducted experiments to evaluate the accuracy of piezometer pads by analyzing demographic factors, including pressure distribution among the elderly as part of the Undergraduate Research Opportunities Program (UROP). Utilized Python for real-time data extraction and analysis, applying machine learning techniques to enhance research outcomes. Focused on developing improved hardware designs for more accurate pressure sensing applications in healthcare and assistive technologies.",
    img: "/research.jpeg",
    iconLists: ["/python.svg", "/machine-learning.svg", "/data-analysis.svg"],
    link: "https://urop.hkust.edu.hk",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Hardware Testing",
      "Healthcare Technology",
    ],
    impact:
      "Developed improved methodologies for pressure sensing in healthcare applications, particularly benefiting elderly care and assistive technologies.",
  },
  {
    id: 8,
    title: "3D-Printed Prosthetic Arm Project",
    des: "Designed and built prosthetic arms for underprivileged individuals in collaboration with ENABLE, an international NGO that produces 3D-printed prosthetic medical devices. Applied engineering principles to create functional, cost-effective prosthetic solutions that improve quality of life. Donated the completed prosthetic arms to Hanoi French Hospital for distribution to patients in need, demonstrating a commitment to using technology for social impact.",
    img: "/prosthetic.jpg",
    iconLists: ["/3d-printing.svg", "/tinkercad.svg", "/medical.svg"],
    link: "https://enablingthefuture.org",
    technologies: [
      "3D Printing",
      "TinkerCAD",
      "Biomedical Engineering",
      "Prosthetic Design",
    ],
    impact:
      "Created affordable prosthetic solutions for underprivileged individuals, providing functional arm prosthetics at a fraction of traditional costs.",
  },
];

export const testimonials = [
  {
    quote:
      "Sieun demonstrated exceptional technical prowess and creativity during our collaboration on the TrashTrack project. Their ability to analyze market trends and translate complex concepts into viable business solutions was impressive. A truly innovative thinker!",
    name: "Logitech Research Team",
    title: "Hong Kong Office",
  },
  {
    quote:
      "During the Cathay Hackathon, Sieun showed remarkable leadership as Product Owner and delivered an outstanding pitch that earned us the Best Presenter Award. Their technical skills combined with business acumen made our project stand out from the competition.",
    name: "HK Express Innovation Team",
    title: "Cathay Hackathon Partner",
  },
  {
    quote:
      "Sieun's contributions to the USThings platform significantly improved the user experience for our student community. Their attention to detail and understanding of user needs resulted in a more intuitive and functional platform.",
    name: "HKUST USThings Team Lead",
    title: "Hong Kong University of Science and Technology",
  },
];

export const companies = [
  {
    id: 1,
    name: "Logitech",
    img: "/logitech.svg",
    nameImg: "/logitechName.svg",
  },
  {
    id: 2,
    name: "Neopets",
    img: "/neopets.svg",
    nameImg: "/neopetsName.svg",
  },
  {
    id: 3,
    name: "Cathay Pacific",
    img: "/cathay.svg",
    nameImg: "/cathayName.svg",
  },
  {
    id: 4,
    name: "HKUST",
    img: "/hkust.svg",
    nameImg: "/hkustName.svg",
  },
  {
    id: 5,
    name: "NASA",
    img: "/nasa.svg",
    nameImg: "/nasaName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Research Project Leader - Logitech",
    desc: "Conducted market analysis and research for TrashTrack, transitioning the concept into B2B and B2C environments to maximize market impact.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    date: "Feb 2024 - Oct 2024",
  },
  {
    id: 2,
    title: "Full Stack Developer - Neopets",
    desc: "Designed and developed interactive games with React.js, implemented REST APIs for user data management, and created secure authentication frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    date: "Jun 2024 - Aug 2024",
  },
  {
    id: 3,
    title: "Web Developer - HKUST USThings",
    desc: "Designed the USThings website to provide convenient access to HKUST academic and campus systems, enhancing the student experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    date: "Sep 2023 - Dec 2023",
  },
  {
    id: 4,
    title: "Electrical Engineer - HKUST Robotics",
    desc: "Utilized KiCad to design optimized PCBs for robot motors, recognized as a top electrical engineer for achievements in design and welding.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    date: "Sep 2023 - Dec 2023",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sieukim",
  },
  {
    id: 2,
    img: "/linkedin.png",
    link: "https://www.linkedin.com/in/sieun-kim-b5406127b/",
  },
  {
    id: 3,
    img: "/email.png",
    link: "mailto:skimrobin0@gmail.com",
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C/C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Flutter", "Arduino"],
  },
  {
    category: "Databases",
    items: ["MongoDB"],
  },
  {
    category: "Tools",
    items: [
      "KiCad",
      "MATLAB",
      "Figma",
      "Canva",
      "Adobe Premiere Pro",
      "TinkerCAD",
    ],
  },
  {
    category: "Languages",
    items: ["Korean (Native)", "English (Proficient)"],
  },
];

export const education = [
  {
    institution: "Hong Kong University of Science and Technology (HKUST)",
    degree: "Bachelor of Engineering in Electronic Engineering",
    period: "Aug 2021 - May 2025 (anticipated)",
    achievements: ["Admission Scholarship"],
  },
  {
    institution: "Hanoi International School (HIS)",
    degree: "International Baccalaureate Diploma Programme",
    period: "Aug 2018 - May 2021",
    achievements: ["Academic Honor Award (Aug 2018 - May 2020)"],
  },
];

export const awards = [
  {
    title: "Web3 Dev Asia - First Runner-Up",
    description:
      "For the innovative TrashTrack business concept leveraging big data, IoT, and ESG principles",
    date: "Feb 2024",
  },
  {
    title:
      "Cathay Hackathon - First Runner-Up, Best Presenter, Best Low-Cost Travel Solution",
    description:
      "Created a Flutter-based mobile app prototype with ChatGPT recommendation system for personalized travel",
    date: "Jan 2024",
  },
];
