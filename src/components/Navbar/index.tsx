import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import Links from "@/components/Navbar/Links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Left Side */}
          <div
            className={`${flexBetween} w-full gap-16 font-montserrat font-extrabold`}
          >
            <h2 className="text-2xl font-extrabold">
              <span className="font-clickerscript">A</span>lfred
            </h2>
          </div>

          {/* Right Side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Links
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></Links>
              <Links
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></Links>
              <Links
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></Links>
              <Links
                page="Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></Links>
              <Links
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></Links>
              <Links
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              ></Links>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FontAwesomeIcon
                icon={faXmark}
                className="h-6 w-6 text-gray-400"
              />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-center text-2xl">
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Links>
            <Links
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Links>
            <Links
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Links>
            <Links
              page="Portfolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Links>
            <Links
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Links>
            <Links
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Links>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
