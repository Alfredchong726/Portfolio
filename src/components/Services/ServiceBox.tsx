import ActionButton from "@/shared/ActionButton";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  children: React.ReactNode;
  icon: IconDefinition;
  title: string;
};

const ServiceBox = ({ children, icon, title }: Props) => {
  return (
    <div
      className="h-[18rem] w-[30rem] rounded-2xl border bg-primary-100 p-5 shadow transition duration-300 
    ease-out hover:scale-110 hover:border-primary-500 hover:ease-in"
    >
      <div className="flex items-center justify-center text-5xl text-primary-300">
        <FontAwesomeIcon icon={icon} />
      </div>
      <br />
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default ServiceBox;
