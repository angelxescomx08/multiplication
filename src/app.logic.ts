import fs from "fs";

let result = "";

result += "======================\n";
result += "=====Tabla del 5======\n";
result += "======================\n\n";

for (let i = 1; i <= 10; i++) {
  result += `5 x ${i} = ${5 * i}\n`;
}
const pathOutputs = "outputs";
if (!fs.existsSync(pathOutputs)) {
  fs.mkdirSync(pathOutputs, { recursive: true });
}
fs.writeFileSync("outputs/tabla-5.txt", result);
console.log(result);
