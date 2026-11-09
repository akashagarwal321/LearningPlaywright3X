import os from "node:os";

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.totalmem());
console.log(os.freemem());