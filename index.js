const os = require("os");
const process = require("process");
const fs = require("fs");
const path = require("path");

const sistemaOperativo = process.platform;
const carpetaUsuario = os.userInfo().homedir;
console.log("");
console.log("Hackeando tu pc...");
if (sistemaOperativo === "win32") {
  console.log("Tú no molas mucho");
} else if (sistemaOperativo === "linux") {
  console.log("Tú molas");
} else if (sistemaOperativo === "darwin") {
  console.log(
    "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
  );
}

console.log(`Cuidado, te quedan ${os.freemem() / 1024 / 1024} Mb de RAM libre`);
console.log(`La versión de tu sistema operativo es ${os.version}`);
console.log(
  `Tu usuario del sistema operativo es ${
    os.userInfo().username
  } y tu carpeta es ${carpetaUsuario}`
);

fs.readdir(carpetaUsuario, (err, archivos) => {
  for (const archivo of archivos) {
    const archivoInfo = fs.statSync(path.join(carpetaUsuario, archivo));
    console.log(
      archivo,
      archivoInfo.size,
      `¿Es una carpeta? ${archivoInfo.isDirectory()}`
    );
  }
});
