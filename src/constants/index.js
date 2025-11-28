import food2 from "../assets/projects/food2.jpg";
import meetup from "../assets/projects/meetup.jpg";
import piggame from "../assets/projects/piggame.jpg";
import Market22 from "../assets/projects/Market22.jpg";
import project3 from "../assets/projects/Drums22.jpg";
import project4 from "../assets/projects/QuizApp1.jpg";
import project5 from "../assets/projects/site1.jpg";

export const HERO_CONTENT = `As a self-learner and fast learner, I have ability to acquire new knowledge and skills
quickly, which can be a valuable asset in any field. My willingness to work in a team also
shows that i am a collaborative individual who values the input and ideas of others`;

export const ABOUT_TEXT = `I am a dedicated and versatile junior frontend developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, JavaScript, Node.js, MySQL, and Java. My journey in web development began with a deep curiosity about how things work, and it has developed into a career where I constantly strive for learning and adapting to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of programming, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Food Order App",
    image: food2,
    description:
      "React FoodOrder is a web application developed using the React framework and Vite build tool.The main functionality of the application is to allow users to browse and order food online. The application utilizes modern web technologies to provide a fast and interactive user experience",
    technologies: ["HTML", "CSS", "React"],
    url: "https://food-app-sigma-blush.vercel.app/",
  },
  {
    title: "News App",
    image: meetup,
    description:
      "This application is a simple and functional platform similar to an online news site, built with the Next.js framework. It allows users to read or publish news in real time through an intuitive form. All news entries are stored in a MongoDB database, while Node.js API routes handle data submission and retrieval. Each news post includes a title, description, and images, and users can access full details by clicking a view button. The application is fully responsive and deployed on Vercel, ensuring fast load times and accessibility across all devices.",
    technologies: ["HTML", "CSS", "NextJs", "MongoDB"],
    url: "https://nextjs-app-livid-chi.vercel.app/",
  },
  {
    title: "React Quiz",
    image: project4,
    description:
      "Our React Quiz App is an engaging and designed to test your knowledge across various topics.The app features a sleek and user‑friendly interface, allowing users to easily navigate through a series of multiple‑choice questions. Users receive instant feedback on whether their selection is correct or incorrect. To add an element of challenge, the app includes a timer that tracks the time taken to answer each question, encouraging quick thinking and adding excitement to the quiz experience.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Pig Game",
    image: piggame,
    description:
      "This is a web-based version of the classic dice game “Pig,” built using HTML, CSS, and JavaScript. The game allows two players to take turns rolling a dice, accumulating points, and strategically holding their score to avoid losing it on a roll of one. It features smooth game logic, interactive visuals, and clear feedback for each move, providing a simple yet engaging gaming experience directly in the browser. The project is fully responsive and deployed on Vercel for instant access across all devices.",
    technologies: ["HTML", "CSS", "React"],
    url: "https://pig-game-woad-three.vercel.app/",
  },
  {
    title: "Playing drums Online",
    image: project3,
    description:
      "In this project, I have developed an engaging online application that allows you to play the drums using just your keyboard. Through the harmonious integration of HTML, CSS, and JavaScript, I've crafted an intuitive and dynamic virtual drumming experience. Immerse yourself in the world of rhythm and creativity as you tap into the power of technology to create beats and melodies effortlessly.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://drumsonline.vercel.app/",
  },
  {
    title: "Market",
    image: Market22,
    description:
      "In this project I have created a checkout demo for an online marketplace. There are multiple options that include selecting the amount and counting the total bill. I have used HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://shopping-cart-black-five.vercel.app/",
  },
  {
    title: "WebFlow site",
    image: project5,
    description:
      "In this project, I created a Webflow website with multiple pages, using Figma.",
    technologies: ["WebFlow", "Figma"],
  },
];

export const CONTACT = {
  address: "Tadije Pejovica 2B, Kragujevac Serbia",
  phoneNo: "0642257298",
  email: "bogdanobradovic02@gmail.com",
};
