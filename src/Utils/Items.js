const importAll = (r) => r.keys().map(r);
const SkylabDiamondsImages = importAll(require.context("../images/SkylabDiamonds", false, /\.(png|jpe?g|svg)$/));
const ResumeWebsiteImages = importAll(require.context("../images/ResumeWebsite", false, /\.(png|jpe?g|svg)$/));
const DashFoodImages = importAll(require.context("../images/DashFood", false, /\.(png|jpe?g|svg)$/));
const ArinLuxuryImages = importAll(require.context("../images/ArinLuxuryCo", false, /\.(png|jpe?g|svg)$/));
const CarbonSquareImages = importAll(require.context("../images/CarbonSquare", false, /\.(png|jpe?g|svg)$/));
const ReactJsResume = importAll(require.context("../images/ResumeReactJs", false, /\.(png|jpe?g|svg)$/));


const Items = [
  {
    id: 1,
    mainImage: ArinLuxuryImages[0],
    img: [
      ArinLuxuryImages
    ],
    features: [
      "Home",
      "Jewellery(shop)",
      "Contact",
      "About us",
      "Why lab diamond?",
      "Responsive Design",
      "404 Page and many more.",
    ],
    technologies: [
      "Wordpress",
      "Elementor",
      "Woocommerce",
      "Rankmath Seo",
      "WP-Members(To manage all the users)",
    ],
    title: "Arin Luxury co",
    description:
      "Arin Luxury Co. was founded with a vision to redefine luxury in a conscientious and forward-thinking manner. Recognizing the growing demand for ethical and environmentally friendly alternatives, we embraced the advancements in technology to offer lab-grown diamonds that are as stunning and enduring as their natural counterparts. Our journey began in India, where rich traditions and modern innovation converge, and has since expanded to captivate markets across the globe, including Australia, Canada, and beyond.",
    category: "wordpress",
    liveLink: "https://arinluxury.com/",
    codeLink: "#",
  },
  {
    id: 2,
    mainImage: CarbonSquareImages[0],
    img: [
      CarbonSquareImages
    ],
    features: [
      "Home",
      "Diamonds(Diamond Filter)",
      "Contact",
      "Faq",
      "Blog",
      "Education",
      "About Us",
      "Privacy Policy",
      "404 Page and many more.",

    ],
    technologies: [
      "Wordpress",
      "Elementor",
      "All in one SEO",
      "Woocommerce",
      "HUSKY - Products Filter(Diamond filter with diamond color and quality features)",
      "WP-Members(To manage all the users)",
    ],
    title: "Carbon Square",
    description:
      "I specialize in WordPress design with Elementor, creating seamless and user-friendly diamond filter websites for a flawless shopping experience.",
    category: "wordpress",
    liveLink: "https://carbonsquare.co/",
    codeLink: "#",
  },

  {
    id: 3,
    mainImage: DashFoodImages[0],
    img: [DashFoodImages],
    features: [
      "One-page responsive design",
      "Highlights restaurant details and special offers",
      "Showcases a variety of Gujarati dishes",
      "User-friendly UI with smooth navigation",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Bootstrap",
    ],
    title: "Dash Food",
    description:
      "DashFood is a one-page website designed to showcase restaurant details, special offers, and delicious Gujarati food. This project provides an engaging and visually appealing experience for users looking for authentic Gujarati cuisine",
    category: "javascript",
    liveLink: "https://raw.githack.com/Jenilpaladiya/DashFood/refs/heads/main/index.html",
    codeLink: "https://github.com/Jenilpaladiya/DashFood",
  },


  {
    id: 5,
    mainImage: ResumeWebsiteImages[0],
    img: [
      ResumeWebsiteImages
     ],
    features: [
      "Fully responsive portfolio design",
      "Showcases resume details",
      "Includes live projects and JavaScript tasks",
      "Built using Bootstrap for improved UI/UX",
      "Responsive Design",
      "Well-structured HTML, CSS, and JavaScript code",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Bootstrap",
    ],
    title: "My Resume Website",
    description:
      "MyResumeWebsite is a personal portfolio website showcasing my resume, live projects, and JavaScript tasks completed during my learning path. This project is built using HTML, CSS, JavaScript, and Bootstrap for a responsive and interactive design.",
    category: "javascript",
    liveLink: "https://raw.githack.com/Jenilpaladiya/MyResumeWebsite/refs/heads/main/index.html",
    codeLink: "https://github.com/Jenilpaladiya/MyResumeWebsite",
  },
  
  {
    id: 6,
    mainImage: SkylabDiamondsImages[0],
    img: [
      SkylabDiamondsImages
     ],
    features: [
      "Fully responsive portfolio design",
      "Showcases resume details",
      "Includes live projects and JavaScript tasks",
      "Built using Bootstrap for improved UI/UX",
      "Responsive Design",
      "Well-structured HTML, CSS, and JavaScript code",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "jQuery",
      "Bootstrap",
    ],
    title: "Skylab Diamonds",
    description:
      "SkyLabDiamonds is a fully responsive diamond website developed using HTML, CSS, JavaScript, and jQuery. This project showcases various diamond products with a modern and user-friendly design.",
    category: "javascript",
    liveLink: "https://raw.githack.com/Jenilpaladiya/SkyLabDiamonds/refs/heads/main/Home.html",
    codeLink: "https://github.com/Jenilpaladiya/SkyLabDiamonds",
  },
  {
    id: 7,
    mainImage: ReactJsResume[0],
    img: [
      ReactJsResume
     ],
    features: [
      "Fully responsive portfolio design",
      "Showcases resume details",
      "Includes live projects and JavaScript tasks",
      "Built using Bootstrap for improved UI/UX",
      "Responsive Design",
    ],
    technologies: [
      "React Js",
      "Tailwind",
      "JavaScript (ES6)",
     
    ],
    title: "React Js",
    description:
      "A modern, responsive website built with React.js and Tailwind CSS, designed for speed, efficiency, and a seamless user experience.",
    category: "reactjs",
    liveLink: "https://jenil.de/",
    codeLink: "https://jenil.de/",
  }

];

export default Items;
