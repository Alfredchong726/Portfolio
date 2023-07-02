import React from "react";

type Props = {
  title: string,
  proficiencyLevels: Record<string, number>,
};

const SkillBox = ({ title, proficiencyLevels }: Props) => {
  return (
    <div
      className="h-[30rem] w-[35rem] rounded-2xl border bg-primary-100 p-5 shadow transition 
      duration-300 ease-out hover:scale-110 hover:border-primary-500 hover:ease-in gap-10"
    >
      <div className="flex items-center justify-center text-xl text-primary-300"></div>
      <br />
      <h1 className="text-center text-2xl font-bold text-primary-500">{title}</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(proficiencyLevels).map(([proficiency, level]) => (
          <div key={proficiency} className="flex flex-col justify-center items-center w-full p-4">
            <h3 className="text-lg font-semibold mb-2">{proficiency}</h3>
            <div className="bg-gray-200 rounded-lg w-full h-4">
              <div className="bg-primary-300 rounded-lg h-full" style={{ width: `${level}%` }}></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{level}%</p>
          </div>
        ))}
      </div>
    </div >
  );
};

export default SkillBox;
