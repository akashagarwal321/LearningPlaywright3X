interface User {
    id: number;
    name: string;
}

function greetUser(user: User): string {
    return `Hello ${user.name}`;
}

const user: User = {
    id: 101,
    name: "Akash"
};

console.log(greetUser(user));

//npm install -D typescript
//npx tsc --init
//npx tsc
//node dist/app.js

//direct way without tranpilation

//install tsx

//npm install -D tsx
//npx tsx src/app.ts --- directly will run



// Command	Purpose
// npx tsc	Compile TypeScript into JavaScript
// npx tsc --noEmit	Type-check without generating JS
// node dist/app.js	Execute compiled JavaScript
// npx tsx src/app.ts	Execute TypeScript directly



//Handling by scripts
//add the following in package.json

// "scripts": {
//     "build": "tsc",
//     "typecheck": "tsc --noEmit",
//     "start": "node dist/app.js",
//     "dev": "tsx src/app.ts"
// }

//Run commands now
// npm run build
// npm run typecheck
// npm start
// // npm run dev



import { getUser } from "./user.js"; // Notice that we are importing .js not .ts

const user1 = getUser();

console.log(user1.name);