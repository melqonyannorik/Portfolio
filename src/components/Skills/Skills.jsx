import React from "react";
import htmlImg from "../../assets/html.svg";
import cssImg from "../../assets/css.svg";
import sassImg from "../../assets/sass.svg";
import gitImg from "../../assets/git.svg";
import githubImg from "../../assets/github.svg";
import jsImg from "../../assets/js.svg";
import reactImg from "../../assets/react.svg";
import reduxImg from "../../assets/redux.svg";
import "../Skills/style.skills.scss";
import { motion } from "framer-motion";

const abilities = [
  { id: 1, img: htmlImg, name: "HTML" },
  { id: 2, img: cssImg, name: "CSS" },
  { id: 3, img: sassImg, name: "SASS" },
  { id: 4, img: gitImg, name: "GIT" },
  { id: 5, img: githubImg, name: "GITHUB" },
  { id: 6, img: jsImg, name: "JAVASCRIPT" },
  { id: 7, img: reactImg, name: "REACT" },
  { id: 8, img: reduxImg, name: "REDUX", subName: "REDUX-TOOLKIT" },
];

const skillsAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="skills-title">My Skills</h1>
      <motion.div
        className="container-skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {abilities.map((skill, index) => {
          return (
            <motion.div
              key={skill.id}
              className="container-skills-svg"
              variants={skillsAnimation}
              custom={index + 1}
            >
              <img src={skill.img} alt={skill.name} />
              {skill.subName ? (
                <h3>
                  {skill.name} <br />
                  {skill.subName}
                </h3>
              ) : (
                <h2>{skill.name}</h2>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
