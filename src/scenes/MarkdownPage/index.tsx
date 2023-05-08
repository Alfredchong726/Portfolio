import Sidebar from "@/components/Markdown/Sidebar";
import readMdFiles from "./readMarkdownFile";

const path = require("path") as typeof import("path");
const mdDir = path.join(__dirname, "@/Markdown");
const mdFiles = readMdFiles(mdDir);

type Props = {};

const MarkdownPage = (props: Props) => {
  return (
    <div>
      <Sidebar mdFiles={mdFiles} />
      {/* 其它组件 */}
    </div>
  );
};

export default MarkdownPage;
