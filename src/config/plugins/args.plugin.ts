import yargs, { alias } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "Filename",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .check((argv, aliases) => {
    if (Number.isNaN(argv.b)) throw new Error("base must be a number");
    if (Number.isNaN(argv.l)) throw new Error("limit must be a number");

    if (argv.l < 1) throw new Error("limit must be bigger than 0");

    return true;
  })
  .parseSync();
