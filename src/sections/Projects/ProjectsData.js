import hotelBookingImage from "../../assets/hotel_booking.jpeg";
import ecommerceImage from "../../assets/ecommerce.jpeg";
import foodDeliveryImage from "../../assets/food.svg";
import portfolioImage from "../../assets/portfolio.svg";
import jobPortalImage from "../../assets/job.svg";

const projects = [
  {
    id: 1,
    title: "Hotel Booking Web Application",
    description:
      "Developed a web-based Hotel Booking Application with React frontend and Spring Boot backend, utilizing MySQL for database management.",
    image: hotelBookingImage,
    techStack: {
      frontend: ["React", "HTML5", "CSS", "JavaScript"],
      backend: ["Java", "Spring Boot"],
      database: ["MySQL"],
    },
    uiFeatures: ["Responsive design", "Room booking", "Booking management"],
    extraFields: {
      deployment: "Deployed on Heroku",
      versionControl: "GitHub",
      contributors: ["Mansoor Pathikonda"],
      links: {
        github: "https://github.com/Mansoor-P/hotel_booking",
      },
    },
  },
  {
    id: 2,
    title: "E-commerce Shopping Website",
    description:
      "Developed an E-commerce Shopping Website with React.js frontend, using Tailwind CSS and Bootstrap for a responsive design.",
    image: ecommerceImage,
    techStack: {
      frontend: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
      backend: [],
      database: [],
    },
    uiFeatures: [
      "Responsive design",
      "Product browsing",
      "Shopping cart",
      "User authentication",
      "Payment integration",
    ],
    extraFields: {
      deployment: "Deployed on AWS",
      versionControl: "GitHub",
      contributors: ["Mansoor Pathikonda"],
      links: {
        github: "https://github.com/Mansoor-P/Ecommerce-website",
      },
    },
  },
  {
    id: 3,
    title: "Food Delivery App Website UI",
    description:
      "Designed the user interface for a food delivery app website with a focus on user experience and responsive design.",
    image: foodDeliveryImage,
    techStack: {
      frontend: ["React", "HTML5", "CSS", "JavaScript", "Tailwind CSS"],
      backend: [],
      database: [],
    },
    uiFeatures: [
      "Responsive design",
      "User-friendly interface",
      "Food menu browsing",
      "Order tracking",
    ],
    extraFields: {
      deployment: "Deployed on Netlify",
      versionControl: "GitHub",
      contributors: ["Mansoor Pathikonda"],
      links: {
        github: "https://github.com/Mansoor-P/food-delivery-app",
      },
    },
  },
  {
    id: 4,
    title: "Responsive Portfolio",
    description:
      "Created a personal portfolio website showcasing projects, skills, and contact information, with a responsive and modern design.",
    image: portfolioImage,
    techStack: {
      frontend: ["React", "HTML5", "CSS", "JavaScript", "Bootstrap"],
      backend: [],
      database: [],
    },
    uiFeatures: [
      "Responsive design",
      "Project showcase",
      "Skill display",
      "Contact form",
    ],
    extraFields: {
      deployment: "Deployed on GitHub Pages",
      versionControl: "GitHub",
      contributors: ["Mansoor Pathikonda"],
      links: {
        github: "https://github.com/Mansoor-P/Portfolio",
      },
    },
  },
  {
    id: 5,
    title: "Job Searching Portal",
    description:
      "Developed a job searching portal with React.js frontend and Node.js backend, facilitating job search, application, and management.",
    image: jobPortalImage,
    techStack: {
      frontend: ["React.js", "HTML5", "CSS3", "JavaScript"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
    },
    uiFeatures: [
      "Responsive design",
      "Job search",
      "Job application",
      "User profile management",
    ],
    extraFields: {
      deployment: "Deployed on Heroku",
      versionControl: "GitHub",
      contributors: ["Mansoor Pathikonda"],
      links: {
        github: "#",
      },
    },
  },
];

export default projects;
