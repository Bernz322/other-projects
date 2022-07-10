import {
  Counter,
  CurrencyConverter,
  Dandylat,
  ExpandingCards,
  FormValidator,
  GateSystem,
  QuoteGenerator,
  ScoreBoard,
  SurveyForm,
  Tribute,
  WeatherApp,
} from "../assets";
import { IProject } from "./types";
import {
  SiHtml5,
  SiSass,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiArduino,
  SiCplusplus,
  SiC,
  SiRider,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { TbInfinity } from "react-icons/tb";
import { FaMicrochip, FaProductHunt } from "react-icons/fa";
import { VscCircuitBoard } from "react-icons/vsc";

export const Project: IProject[] = [
  {
    name: "Currency Converter",
    info: "A currency converter web app that uses the exchangerate.host API.",
    image: CurrencyConverter,
    techs: [
      {
        name: "HTML5",
        Icon: SiHtml5,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "Javascript",
        Icon: SiJavascript,
      },
      {
        name: "API",
        Icon: AiOutlineApi,
      },
      {
        name: "Github",
        Icon: FiGithub,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/Javascript-Projects/tree/main/With%20API/Currency%20Converter",
      demo: "https://bernz322.github.io/jsproject-currency-converter/",
    },
  },
  {
    name: "Random Quote Generator",
    info: "A random quote generator web app that uses the API of lukePeavey. It also lets you tweet the current quote to your twitter account.",
    image: QuoteGenerator,
    techs: [
      {
        name: "HTML5",
        Icon: SiHtml5,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "Javascript",
        Icon: SiJavascript,
      },
      {
        name: "API",
        Icon: AiOutlineApi,
      },
      {
        name: "Twitter",
        Icon: FiTwitter,
      },
      {
        name: "Github",
        Icon: FiGithub,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/Javascript-Projects/tree/main/With%20API/Random%20Quote%20Generator",
      demo: "https://bernz322.github.io/jsproject-random-quote-generator/",
    },
  },
  {
    name: "Weather App",
    info: "A weather web app that uses the openweather API and will show you several weather informations of a searched city.",
    image: WeatherApp,
    techs: [
      {
        name: "HTML5",
        Icon: SiHtml5,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "Javascript",
        Icon: SiJavascript,
      },
      {
        name: "API",
        Icon: AiOutlineApi,
      },
      {
        name: "Github",
        Icon: FiGithub,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/Javascript-Projects/tree/main/With%20API/Weather%20App",
      demo: "https://bernz322.github.io/jsproject-weather-app/",
    },
  },
  {
    name: "Expanding Cards",
    info: "A simple project that contains images where when you click on one of them, the image will expand and will occupy 50% of the screen's width.",
    image: ExpandingCards,
    techs: [
      {
        name: "HTML5",
        Icon: SiHtml5,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "Javascript",
        Icon: SiJavascript,
      },
      {
        name: "Github",
        Icon: FiGithub,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/Javascript-Projects/tree/main/Frontend%20Layouting/Expanding%20Cards",
      demo: "https://bernz322.github.io/jsproject-expanding-cards/",
    },
  },
  {
    name: "Form Validator",
    info: "A simple client-side form validator with email checker, username length checker, password length and match checker.",
    image: FormValidator,
    techs: [
      {
        name: "HTML5",
        Icon: SiHtml5,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "Javascript",
        Icon: SiJavascript,
      },
      {
        name: "Github",
        Icon: FiGithub,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/Javascript-Projects/tree/main/Frontend%20Layouting/Form%20Validator",
      demo: "https://bernz322.github.io/jsprojects-form-validation/",
    },
  },
  {
    name: "Dandylat Meetup",
    info: "A meet and greet full-stack app. Register and a given date will be given to your account to meet the dandiest of all, Dandylat.",
    image: Dandylat,
    techs: [
      {
        name: "PHP",
        Icon: SiPhp,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "MySQL",
        Icon: SiMysql,
      },
      {
        name: "Infinity Free",
        Icon: TbInfinity,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/dandylat-meetup",
      demo: "http://dandylat-meetup.freecluster.eu/index.php",
    },
  },
  {
    name: "Tribute Page",
    info: "A project from Freecodecamp under the Responsive Web Design Curriculum where I featured the Boxing's 8 Time World Division Champion, Manny Pacquiao.",
    image: Tribute,
    techs: [
      {
        name: "HTML5",
        Icon: SiHtml5,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "Github",
        Icon: FiGithub,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/Build-a-Tribute-Page",
      demo: "https://bernz322.github.io/Build-a-Tribute-Page/",
    },
  },
  {
    name: "Survey Form",
    info: "A project from Freecodecamp under the Responsive Web Design Curriculum where I used one of the most trending UI design right now, Glassmorphism.",
    image: SurveyForm,
    techs: [
      {
        name: "HTML5",
        Icon: SiHtml5,
      },
      {
        name: "Sass",
        Icon: SiSass,
      },
      {
        name: "Github",
        Icon: FiGithub,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/Build-a-Survery-Form",
      demo: "https://bernz322.github.io/Build-a-Survery-Form/",
    },
  },
  {
    name: "Automated Customer Counter",
    info: "An arduino project which uses an Ultrasonic Sensor to determine if a customer enters an establishment. Developed to combat overcrowding during the height of Covid-19.",
    image: Counter,
    techs: [
      {
        name: "Arduino",
        Icon: SiArduino,
      },
      {
        name: "C++",
        Icon: SiCplusplus,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/electronics-projects/tree/main/Arduino/Automated_Customer_Counter",
      demo: "https://github.com/Bernz322/electronics-projects",
    },
  },
  {
    name: "Button and Vibration Sensor Operated Gate System",
    info: "A gate system that can be opened, lock, close, and or stop whatever process it is currently undergoing using four (4) push buttons, a vibration sensor and an AT89C2051.",
    image: GateSystem,
    techs: [
      {
        name: "AT89C2051",
        Icon: FaMicrochip,
      },
      {
        name: "C",
        Icon: SiC,
      },
      {
        name: "RIDE",
        Icon: SiRider,
      },
      {
        name: "Proteus",
        Icon: FaProductHunt,
      },
      {
        name: "Circuit Wizard",
        Icon: VscCircuitBoard,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/electronics-projects/tree/main/AT89C2051-OJT/Button-and-Vibration-Sensor-Operated-Gate-System",
      demo: "https://github.com/Bernz322/electronics-projects",
    },
  },
  {
    name: "Basketball Scoreboard",
    info: "A basketball scoreboard that uses two (2) AT89C2051, two (2) 74LS148 Encoder for input buttons, and two (2) 74LS154 Decoder connected to the multiple Anode 7-Segment Display (Multiplexed).",
    image: ScoreBoard,
    techs: [
      {
        name: "AT89C2051",
        Icon: FaMicrochip,
      },
      {
        name: "C",
        Icon: SiC,
      },
      {
        name: "RIDE",
        Icon: SiRider,
      },
      {
        name: "Proteus",
        Icon: FaProductHunt,
      },
      {
        name: "Circuit Wizard",
        Icon: VscCircuitBoard,
      },
    ],
    urls: {
      github:
        "https://github.com/Bernz322/electronics-projects/tree/main/AT89C2051-OJT/Basketball-Scoreboard",
      demo: "https://github.com/Bernz322/electronics-projects",
    },
  },
];
