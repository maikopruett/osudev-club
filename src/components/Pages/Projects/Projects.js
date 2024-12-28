// projectsData.js
export const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      shortDescription: "Personal portfolio built with React",
      fullDescription: "A modern portfolio website showcasing my projects and skills, built with React and modern web technologies.",
      technologies: ["React", "JavaScript", "CSS"],
      imageUrl: "/api/placeholder/600/400",
      links: {
        github: "https://github.com/username/portfolio",
        live: "https://portfolio.example.com"
      },
      features: [
        "Responsive design",
        "Smooth animations",
        "Dynamic project showcase"
      ],
      challenge: "The main challenge was creating smooth animations while maintaining performance.",
      solution: "Implemented optimized CSS transitions and React hooks for efficient state management."
    },
    {
      id: 2,
      title: "E-commerce Platform",
      shortDescription: "Full-stack e-commerce solution",
      fullDescription: "A complete e-commerce platform with user authentication, product management, and shopping cart functionality.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/api/placeholder/600/400",
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