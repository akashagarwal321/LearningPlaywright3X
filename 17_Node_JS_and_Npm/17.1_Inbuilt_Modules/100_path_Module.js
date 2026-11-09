import path from "node:path";

// const file_path = "./17_Node_JS_Modules/NodeJS_Modules.txt"

//or

const file_path = path.join("./17_Node_JS_Modules","NodeJS_Modules.txt")

console.log(file_path)

console.log(path.basename(file_path));
console.log(path.dirname(file_path))
console.log(path.extname(file_path))
console.log(path.resolve()) //gives full path