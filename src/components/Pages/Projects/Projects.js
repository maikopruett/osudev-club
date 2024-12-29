// projectsData.js
export const projects = [
    {
      id: 1,
      title: "OSU Dev Club",
      shortDescription: "OSU Dev Club built with React",
      fullDescription: "OSU Dev Club is a dynamic community for developers at Oregon State University, where innovation meets rapid execution. Our goal is to fund the club by swiftly developing app ideas shared within our Discord, building them rapidly, and generating profits to reinvest in future projects. We're a new kind of startup, where every member is encouraged to contribute ideas, collaborate on fast-paced development cycles, and create real-world products that make an impact. Join us to be part of something exciting, fast, and profitable.",
      technologies: ["React", "JavaScript", "CSS", "EmailJs"],
      imageUrl: "/portfolio.webp",
      links: {
        github: "https://github.com/username/portfolio",
        live: "https://portfolio.example.com"
      },
      features: [
        "Responsive design for all devices",
        "Smooth animations and transitions",
        "Member authentication with email-based passcode login",
        "Rapid development of app ideas shared within the club"
      ],
      challenge: "The main challenge was attracting users from other clubs while creating a culture that motivates members to turn ideas into profitable apps quickly.",
      solution: "Built a collaborative, high-energy environment where ideas are discussed in the Discord, and small teams form to rapidly prototype and deploy apps. Implemented clear, fast-paced workflows to keep the development cycle moving efficiently and profitably."
    },
    {
      id: 2,
      title: "E-commerce Platform",
      shortDescription: "Full-stack e-commerce solution",
      fullDescription: "A complete e-commerce platform with user authentication, product management, and shopping cart functionality.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/ecommerce.jpeg",
      links: {
        github: "https://github.com/username/ecommerce",
        live: "https://ecommerce.example.com"
      },
      features: [
        "User authentication",
        "Shopping cart",
        "Payment integration"
      ],
      challenge: "Handling complex state management across the application.",
      solution: "Utilized Redux for state management and implemented custom hooks for shared functionality."
    }
  ];