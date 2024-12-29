// projectsData.js
export const projects = [
    {
      id: 1,
      title: "OSU Dev Club",
      shortDescription: "OSU Dev Club built with React",
      fullDescription: "OSU Dev Club is a dynamic community for developers at Oregon State University, where innovation meets rapid execution. Our goal is to fund the club by swiftly developing app ideas shared within our Discord, building them rapidly, and generating profits to reinvest in future projects. We're a new kind of startup, where every member is encouraged to contribute ideas, collaborate on fast-paced development cycles, and create real-world products that make an impact. Join us to be part of something exciting, fast, and profitable.",
      technologies: ["React", "JavaScript", "CSS", "EmailJs"],
      imageUrl: "/project-images/osudevclub.png",
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
      title: "OSU Encore",
      shortDescription: "Event-hosting app for OSU students",
      fullDescription: "OSU Encore is a dedicated event-hosting platform for Oregon State University students, built with React and Supabase. It enables students to create, host, and discover a variety of events exclusive to OSU, such as parties, raves, and concerts. The app is designed to connect the OSU community, making it easier for students to find and join events, while also providing tools for event organizers to manage attendance and promote their gatherings.",
      technologies: ["React", "Supabase", "JavaScript", "CSS"],
      imageUrl: "/project-images/osudevclub.png",
      links: {
        github: "https://github.com/username/osu-encore",
        live: "https://osuencore.example.com"
      },
      features: [
        "Event creation and management",
        "RSVP and ticketing system",
        "Real-time event updates",
        "User authentication with email-based passcode login"
      ],
      challenge: "Building a seamless and intuitive event-management system while ensuring secure and smooth user authentication.",
      solution: "Implemented Supabase for backend services, including user authentication and real-time event management. Focused on creating a simple, user-friendly interface that allows students to quickly create, discover, and engage with events."
    }
  ];