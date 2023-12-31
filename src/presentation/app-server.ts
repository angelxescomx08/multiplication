import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

type Options = {
  base: number;
  limit: number;
  showTable: boolean;
  destination: string;
  name: string;
};

export class AppServer {
  static run({ base, limit, showTable, destination, name }: Options) {
    console.log("Server running...");
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileDestination: destination,
      fileName: name,
      fileContent: table,
    });
    if (showTable) console.log(table);
    if (wasCreated) {
      console.log("File created");
    } else {
      console.log("File was not created");
    }
  }
}
