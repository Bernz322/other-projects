import { IconType } from "react-icons/lib";

export interface IProject {
  name: string;
  info: string;
  image: string;
  techs: {
    name: string;
    Icon: IconType;
  }[];
  urls: {
    github: string;
    demo: string;
  };
}

export interface ITech {
  name: string;
  Icon: IconType;
}
