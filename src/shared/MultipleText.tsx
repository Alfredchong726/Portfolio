import { useEffect, useRef } from "react";
import Typed from "typed.js";

const MultipleText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Python Programmer",
        "Software Developer",
        "Database Designer",
        "Linux User",
        "Java Programmer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
};

export default MultipleText;
