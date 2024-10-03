import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  // BiLogoTypescript,
} from "react-icons/bi";
// import { TbApi, TbDatabase } from "react-icons/tb";
// import { SiElasticsearch } from "react-icons/si";
// // import { TiHtml5 } from "react-icons/ti";

const ProjectsData = [
  {
    id: "1",
    name: "GuestHub",
    image: "./ecom.png",
    icons: [BiLogoReact,BiLogoRedux,BiLogoTailwindCss, BiLogoCss3,BiLogoJavascript,BiLogoNodejs,],
    description: "A hotel management Project with full functionality",
    github: "https://github.com/ayushtank2003/Guest-Huub",
    demo: "",
  },
  {
    id: "2",
    name: "coffee-Muug",
    image: "./musicPlayer.png",
    icons: [BiLogoHtml5,BiLogoCss3,BiLogoJavascript,],
    description:  "a website that can compute the cost and will provide ordering functionality",
    github: "https://github.com/ayushtank2003/coffee-mug",
    demo: "https://coffee-muug.netlify.app/",
  },
  {
    id: "3",
    name: "Study Sage",
    image: "./blogApp.png",
    icons: [BiLogoHtml5, BiLogoCss3,BiLogoJavascript],
    description: "A college /university Suggestion platform",
    github: "https://github.com/ayushtank2003/Study-Sage---a-career-Guidance-app",
    demo: "https://studysage2023.netlify.app/",
  },
];

export default ProjectsData;
