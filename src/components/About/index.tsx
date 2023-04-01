import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Heading from "@/shared/Heading";
import Whoami from "@/assets/whomai.jpg";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="about"
      className="mx-auto min-h-full w-5/6 items-center justify-center md:flex md:h-5/6"
    >
      <motion.div
        className="flex-col items-center gap-8 pt-10 md:flex md:h-5/6"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.About);
        }}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>About Me</Heading>
        </motion.div>

        <motion.div
          className="mx-auto items-center justify-center md:flex md:h-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex basis-4/5 xs:justify-center md:z-10 md:mr-5 md:justify-items-start ">
            <img src={Whoami} className="pt-5 xs:h-80 md:h-[30rem]" />
          </div>
          <div className="my-5 flex basis-4/5 flex-col items-center justify-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reprehenderit et sequi ex magnam officia quis,
              voluptate neque aut enim? Tempora ad fuga ducimus fugit quibusdam
              perspiciatis magnam itaque dolorem.
            </p>
            <ActionButton setSelectedPage={setSelectedPage}>
              More About Me
            </ActionButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
