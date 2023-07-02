import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { SelectedPage } from "@/shared/types";
import { DotLoader } from "react-spinners";

const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [loading, setLoading] = useState<boolean>(true);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      {loading ? (
        <div className="flex items-center justify-center">
          <DotLoader
            loading={loading}
            size={50}
            className="mt-[6.5rem]"
            color="#FF6B66"
          />
        </div>
      ) : (
        <>
          {" "}
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Home setSelectedPage={setSelectedPage} />
          <About setSelectedPage={setSelectedPage} />
          <Services setSelectedPage={setSelectedPage} />
          <Skills setSelectedPage={setSelectedPage} />
        </>
      )}
    </div>
  );
};

export default HomePage;
