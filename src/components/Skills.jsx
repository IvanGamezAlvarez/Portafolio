import React from "react";
import skills from "../data/skills";
import SkillElement from "./SkillElement";
function Skills() {
  return (
    <div className=" bg-gray-950">
      <h2 className=" text-4xl font-bold text-left p-10 pb-5 text-white">
        Skills:
      </h2>
      <p className=" px-10 white font-medium text-white">
        {" "}
        Tap the circles to reveal the skill{" "}
      </p>

      <div className=" h-auto grid grid-cols-2 gap-10 mx-10 py-10 md:grid-cols-3  md:mx-20 lg:grid-cols-6 lg:mx-30">
        {skills.map((skill) => {
          console.log(skill);
          return <SkillElement key={skill.id} data={skill} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
