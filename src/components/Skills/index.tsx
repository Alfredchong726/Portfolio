import { SelectedPage, SkillProficiencies } from "@/shared/types";
import { motion } from "framer-motion";
import Heading from "@/shared/Heading";
import SkillBox from "./SkillBox";
import React from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="skills"
      className="mx-auto min-h-full w-5/6 items-center justify-center md:flex md:h-5/6"
    >
      <motion.div
        className="mx-auto w-5/6 flex-col items-center gap-8 md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Heading>My Skills</Heading>
        </motion.div>

        <motion.div
          className="mt-5 flex basis-4/5 flex-wrap items-center justify-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {Object.entries(SkillProficiencies).map(([skill, proficiencyLevels]) => {
            return (
              <SkillBox title={skill} proficiencyLevels={proficiencyLevels}></SkillBox>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
