import fs from 'fs';
import path from 'path';

function readMdFiles(dir: string): string[] {
  const files = fs.readdirSync(dir); // 读取文件夹内所有文件
  const mdFiles: string[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 如果是文件夹，则递归读取文件夹内的md文件
      mdFiles.push(...readMdFiles(filePath));
    } else if (path.extname(file) === '.md') {
      // 如果是md文件，则加入mdFiles数组
      mdFiles.push(filePath);
    }
  }

  return mdFiles;
}

export default readMdFiles;