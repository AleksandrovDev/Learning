import { readFile, stat, readdir } from "fs/promises";
import { resolve, sep, basename } from "path";
import yargs from "yargs";

class RegexFinder {
  static baseDirectory = process.cwd();

  ignore = [".git", "node_modules"];

  constructor(regex, files, dir) {
    this.regex = new RegExp(regex);
    this.files = files;
    this.matchedFiles = [];
    this.baseDirectory = dir ? dir : RegexFinder.baseDirectory;
  }

  async isRegexIn(filePath) {
    let fileContent = await readFile(filePath, "utf-8");
    return this.regex.test(fileContent);
  }

  async getFilesWithMatchedContent() {
    await this.isPathHasFilesWithMatchedContent(this.baseDirectory);
    return this.matchedFiles;
  }

  async isPathHasFilesWithMatchedContent(path) {
    if (this.isIgnored(path)) {
      return;
    }

    const stats = await stat(resolve(path));

    if (stats.isDirectory()) {
      const folderContent = await readdir(path);
      for (let p of folderContent) {
        await this.isPathHasFilesWithMatchedContent(path + sep + p);
      }
    } else {
      if ((await this.isRegexIn(path)) && this.isAllowedFileToSearch(path)) {
        this.matchedFiles.push(path);
      }
    }
  }

  isIgnored(path) {
    return this.ignore.some((ignore) => new RegExp(ignore).test(path));
  }

  isAllowedFileToSearch(path) {
    if (this.files) {
      const fileName = basename(path);
      if (!this.files.includes(fileName)) {
        return false;
      }
    }
    return true;
  }
}

const yarg = yargs(process.argv.slice(2))
  .command("search", "Search for given regex", {
    search: {
      alias: "s",
      demandOption: false,
      describe: "Search for regex",
      type: "string",
    },
  })
  .option("regex", {
    alias: "r",
    description: "Regex to search",
    type: "string",
  })
  .options("dir", {
    alias: "d",
    demandOption: false,
    description: "Directory to search in",
    type: "string",
  })
  .options("files", {
    alias: "f",
    demandOption: false,
    description: "In which files to search",
    type: "array",
  })
  .help()
  .alias("help", "h").argv;

if (yarg._.includes("search")) {
  const finder = new RegexFinder(yarg.regex, yarg.files, yarg.dir);
  const filesWithMatchedContent = await finder.getFilesWithMatchedContent();
  console.log(filesWithMatchedContent);
}
