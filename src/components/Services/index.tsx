import { SelectedPage } from "@/shared/types";
import Heading from "@/shared/Heading";
import ServiceBox from "@/components/Services/ServiceBox";
import { motion } from "framer-motion";
import {
  faCode,
  faRobot,
  faScroll,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import React from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="services"
      className="min:h-full flex gap-16 bg-gray-20 py-10 md:h-full md:pb-10"
    >
      <motion.div
        className="mx-auto w-5/6 flex-col items-center gap-8 md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>Our Services</Heading>
        </motion.div>

        <motion.div
          className="mt-5 flex basis-4/5 flex-wrap items-center justify-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ServiceBox title="Full Stack Development" icon={faCode}>
            <br />
            <p>FrameWork: Django, Flask</p>
            <br />
            <p>Able to use HTML, CSS, JS and React to code Front-End</p>
            <p>Able to use PHP, Python and NodeJS to code Back-End</p>
          </ServiceBox>

          <ServiceBox title="Web Automation with Python" icon={faRobot}>
            <br />
            <p>FrameWork: Selenium</p>
            <br />
            <p>
              Can use Python Selenium to do Web Automation. Existing project has
              web automation to fill google form and AEON application form
            </p>
          </ServiceBox>

          <ServiceBox title="Web Scraping with Python" icon={faScroll}>
            <br />
            <p>FrameWork: Scrapy</p>
            <br />
            <p>
              Can use Python to do Web Scraping, can use request parcel, lxml
              package to do web scraping
            </p>
          </ServiceBox>

          <ServiceBox title="Python Programming" icon={faPython}>
            <br />
            <p>
              Packages that learned: PyeChart, Pandas, NumPy, matplotlib,
              Tkinter, socket, redis, PyGame
            </p>
            <br />
            <p>
              Intermediate Python Programmer, have good fundamental and
              implementation in, OOP
            </p>
          </ServiceBox>

          <ServiceBox title="Database Design" icon={faDatabase}>
            <br />
            <p>Can design or create database</p>
            <p>Database that familiar : MySQL, MSSQL, MangoDB</p>
          </ServiceBox>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
