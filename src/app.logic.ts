import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

let result = "";

result += "======================\n";
result += `=====Tabla del ${yarg.b}======\n`;
result += "======================\n\n";

for (let i = 1; i <= yarg.l; i++) {
  result += `${yarg.b} x ${i} = ${yarg.b * i}\n`;
}
const pathOutputs = "outputs";
if (!fs.existsSync(pathOutputs)) {
  fs.mkdirSync(pathOutputs, { recursive: true });
}
fs.writeFileSync(`outputs/tabla-${yarg.b}.txt`, result);
if (yarg.s) {
  console.log(result);
}
console.log("File created");
