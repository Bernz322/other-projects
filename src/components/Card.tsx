import { ITech } from "../config/types";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

const Card = ({ project }: any) => {
  return (
    <li
      key={project.name}
      className="w-auto bg-base-100 shadow-xl m-4 rounded-lg "
    >
      <figure>
        <a
          href={project.urls.demo}
          target="_blank"
          rel="noreferrer"
          aria-label="Demo link of the Project"
        >
          <img
            src={project.image}
            alt="Project"
            className="rounded-t-lg object-cover height:630px"
          />
        </a>
      </figure>

      <div className="flex justify-end items-center mr-4 mt-4">
        <a
          href={project.urls.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Repository of the Project"
          className="mr-4"
        >
          <FiGithub />
        </a>
        <a
          href={project.urls.demo}
          target="_blank"
          rel="noreferrer"
          aria-label="Demo link of the Project"
          className=""
        >
          <BiLinkExternal />
        </a>
      </div>
      <div className="pb-8 lg:px-8 md:px-4 sm:px-4 mx-4">
        <h2 className="text-center text-lg font-bold">{project.name}</h2>
        <p className="text-justify text-sm">{project.info}</p>
        <div className="grid gap-3 mt-4 grid-cols-4">
          {project.techs.map(({ name, Icon }: ITech) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <Icon className="lg:w-8 lg:h-8 md:w-4 md:h-4" />
                <p className="text-xs text-center w-full mt-2">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default Card;
