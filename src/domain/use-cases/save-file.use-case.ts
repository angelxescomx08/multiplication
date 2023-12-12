import fs from "fs";

export type SaveFileUseCase = {
  execute: (saveFileOptions: SaveFileOptions) => boolean;
};

export type SaveFileOptions = {
  fileContent: string;
  fileName?: string;
  fileDestination?: string;
};

export class SaveFile implements SaveFileUseCase {
  constructor() {}
  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: SaveFileOptions) {
    try {
      if (!fs.existsSync(fileDestination)) {
        fs.mkdirSync(fileDestination, { recursive: true });
      }
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
