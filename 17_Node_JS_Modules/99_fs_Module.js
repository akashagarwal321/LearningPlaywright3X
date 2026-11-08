// import fs from "node:fs"



// //Reading a file - Sync
// const data = fs.readFileSync("./17_Node_JS_Modules/NodeJS_Modules.txt","utf-8");
// console.log(data);

// //OR - reading file async

// fs.readFile("./17_Node_JS_Modules/NodeJS_Modules.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }

//     console.log(data);
// });

// console.log("File reading started");


// //Writing
// fs.writeFileSync("./17_Node_JS_Modules/writeSync.txt", "This is a new File and completely new content");


// //append to same file
// fs.appendFileSync("./17_Node_JS_Modules/writeSync.txt","\nThis is new line to exiting file as append")

// //Delete File
// //fs.unlinkSync("./17_Node_JS_Modules/writeSync.txt")


// //Async


// const content = 'Hello, this is async text!';

// fs.writeFile('./17_Node_JS_Modules/writeASync.txt', content, 'utf8', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });


//Modern way for async

import { readFile } from 'node:fs/promises';

async function getUserData() {
  try {
    // Specifying 'utf8' encoding returns a string instead of a raw Buffer
    const data = await readFile('./17_Node_JS_Modules/NodeJS_Modules.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
}

getUserData();




