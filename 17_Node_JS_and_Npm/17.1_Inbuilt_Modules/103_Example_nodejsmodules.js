import fs from "node:fs";
import path from "node:path";
import os, { totalmem } from "node:os";

const projectPath = process.cwd();

const report ={
    project: path.basename(projectPath),
    operatingSystem: os.platform(),
    architecture: os.arch(),
    totalMemory: os.totalmem(),
    currentEnvironment: process.env.TEST_ENV || "qa"
};

fs.writeFileSync("./17_Node_JS_Modules/system-report.json",JSON.stringify(report,null,2),"utf-8");

console.log("System Report Generated Successfully");