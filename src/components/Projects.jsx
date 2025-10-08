import React from "react";
import projects from "../data/projects";
import CardProject from "./CardProject";

export default function Projects() {
  return (
    <>
      <h2 id="projects" className=" text-4xl font-bold text-left m-10">
        Projects:
      </h2>
      <div className=" h-auto grid grid-cols1 gap-5 mx-10 my-10 md:grid-cols-2  md:mx-20 lg:grid-cols-3 lg:mx-30">
        {projects.map((project) => {
          return <CardProject key={project.id} data={project} />;
        })}
      </div>
    </>
  );
}
