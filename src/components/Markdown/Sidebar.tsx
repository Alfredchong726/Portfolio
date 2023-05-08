import React from "react";
import path from "path";

type Props = {
  mdFiles: string[];
};

const Sidebar = ({ mdFiles }: Props) => {
  return (
    <ul>
      {mdFiles.map((filePath) => {
        const fileName = path.basename(filePath, ".md"); // 获取文件名
        return <li key={filePath}>{fileName}</li>;
      })}
    </ul>
  );
};

export default Sidebar;
