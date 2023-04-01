import Heading from "@/shared/Heading";
import { SelectedPage } from "@/shared/types";
import Project1 from "@/assets/2023-03-19_19-14.png";
import React from "react";
import PortfolioBox from "@/components/Portfolio/PortfolioBox";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Portfolio = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="portfolio"
      className="mx-auto min-h-full w-5/6 items-center justify-center md:flex md:h-5/6"
    >
      <div className="mx-auto w-5/6 flex-col items-center gap-8 md:flex md:h-5/6">
        <div>
          <Heading>Portfolio</Heading>
        </div>
        <div className="">
          <img src={Project1} alt="Project1" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
