
import cinemaify from '../images/Cinemaify.png'
import Ecommerce from '../images/Ecommerce.png'
import Mealdrop from '../images/Mealdrop.png'
export const Bio = {
  name: "Yash Trambadiya",
  roles: [
    "Front-End Developer",
    "UI/UX Designer",
    
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/yashtrambadiya",
  resume:
    "",
  linkedin: "https://www.linkedin.com/in/yash-trambadiya-926592184/",
  mail: "mailto:gartokn@eliotkids.com",
  facebook: "tel:+919998272625",
};

export const skills = [
  {
    title: "skills",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
      },
    
      {
        name: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
      },
      
      {
        name: "Tailwind CSS",
        image:
          "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
      },
      {
        name: "Material UI",
        image:"https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
      },
      {
        name: "Bootstrap",
        image:"http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
     
      {
        name: "Adobe XD",
        image:
          "https://seeklogo.com/images/A/adobe-xd-logo-64364E3A24-seeklogo.com.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://tse1.mm.bing.net/th?id=OIP.u5DTsyLbttLt7eZXpg6sEwAAAA&pid=Api&P=0&h=220",
    school: "L.J Institute of Engineering and Technology",
    date: "2015 - 2019",
    grade: "8.03 CGPA",
    desc: "I completed a Bachelor's degree in Instrumentation and Control Engineering at L.J Institute of Engineering and Technology-Ahmedabad.",
  }
];

export const projects = [
  {
    id: 0,
    title: "Cinemaify",
    description:
      "Cinemaify is a web application built with React and Redux, allowing users to search for movies and TV shows, view popular, trending, and upcoming releases, and explore detailed information about each title. The platform features personalized recommendations and fine-tuned filters to enhance the user experience.",
    image:
     cinemaify,
     tags: ["React Js",
      "Redux toolkit",
      "SCSS",
      "Axios",
      "React Router"],
    category: "web app",
    github: "https://github.com/yashtrambadiya/Cinemaify",
    webapp: "https://cinemaify-alpha.vercel.app/",
  },

  {
    id: 1,
    title: "E-commerce website",
    description:
      "Made the clone of E-commerce life style website myntra.User can add item into cart and delete the item.The final payment amount show according to the items in the carts. ",
    image:
      Ecommerce,
    tags: ["React Js", "react-router-dom" ,"bootstrap", "Redux toolkit"],
    category: "web app",
    github: "https://github.com/yashtrambadiya/E-commerce-app",
    webapp: "https://e-commerce-app-mauve-one.vercel.app/",
  },
  {
    id: 2,
    title: "Mealdrop",
    description:
      "Meal drop is an online food ordering website.User can filter and order their favorite food.",
    image:
      Mealdrop,
    tags: [
      "react",
      "react-router-dom",
      "vanilla css", 
    ],
    category: "web app",
    github: "https://github.com/yashtrambadiya/Meal-Drop",
    webapp: "https://online-food-ordering-application-5y769me32.vercel.app/",
  },
  
];

