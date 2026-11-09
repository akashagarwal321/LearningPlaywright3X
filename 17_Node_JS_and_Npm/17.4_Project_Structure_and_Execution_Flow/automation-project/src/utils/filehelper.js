import fs from "node:fs";
import path from "node:path";

export function readUsers() {
    const filePath = path.resolve("testdata/users.json");

    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);
}