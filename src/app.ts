import { yarg } from "./config/plugins/args.plugin";
import { AppServer } from "./presentation/app-server";

(async () => {
  main();
})();

async function main() {
  const { b: base, l: limit, s: showTable, d: destination, n: name } = yarg;
  AppServer.run({ base, limit, showTable, destination, name });
}
