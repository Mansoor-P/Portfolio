import hotelBookingImage from "../../assets/hotel_booking.jpeg";
import ecommerceImage from "../../assets/ecommerce.jpeg";

const projects = [
  {
    id: 1,
    title: "Hotel Booking Web Application",
    description:
      "Developed a web-based Hotel Booking Application with React frontend and Spring Boot backend, utilizing MySQL for database management.",
    image: hotelBookingImage,
    techStack: {
      frontend: ["React", "HTML5", "CSS", "JavaScript", "Bootstrap5"],
      backend: ["Java", "Spring Boot","Spring Security"],
      database: ["MySQL"],
    },
    uiFeatures: ["Responsive design", "Room booking", "Booking management"],
    extraFields: {
      // deployment: "Deployed on Netlify",
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
      // backend: [],
      // database: [],
    },
    uiFeatures: [
      "Responsive design",
      "Product browsing",
      "Shopping cart",
      "User authentication",
      "Payment integration",
    ],
    extraFields: {
      // deployment: "Deployed on Netlify",
      versionControl: "GitHub",
      contributors: ["Mansoor Pathikonda"],
      links: {
        github: "https://github.com/Mansoor-P/E-Commerce-Website",
      },
    },
  },
];

export default projects;
