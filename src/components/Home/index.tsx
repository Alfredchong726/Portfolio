import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import MultipleText from "@/shared/MultipleText";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Whoami from "@/assets/whomai.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-10">
      {/* Image and Main Header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <h3 className="text-5xl font-bold">Hello, I'm</h3>
              <h1 className="text-7xl font-extrabold">Alfred</h1>
              <h3 className="text-5xl font-bold">
                and I am <MultipleText></MultipleText>
              </h3>
            </div>
            <p className="mt-8 text-sm">
              I've done my Degree in Cyber Security in xx xx
            </p>
            <p>
              I have learned many thing from my University, for example Python
              Programming, Java Programming, PHP, JavaScript DBMS, Digital
              Security and Forensics, MSSQL, Full Stack Development
            </p>
            <p>
              I also self learned Flutter, Web Scraping, Web Automation, Data
              Analysis and Visualization, C Programming, React
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              More About Me
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          animate={{ y: [0, 20, 20, 0] }}
          transition={{ yoyo: 2, repeat: Infinity, duration: 2 }}
        >
          <img
            src={Whoami}
            alt="home-page-image"
            className="xs:h-80 md:h-[30rem]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
