function getUser() {
    return new Promise((resolve, reject) => {
        reject(new Error("User not found"));
    });
}

// async function main() {
//     try {
//         const user = await getUser();
//         console.log(user);
//     } catch (error) {
//         console.log("Error:", error.message);
//     }

//     console.log("Program continues");
// }

// main();


//Important point -- for normal try and catch  --- error will be catched only for await failed promises... not normal promise as the code is not waiting



async function main() {
    try {
        getUser(); // Promise is not awaited
    } catch (error) {
        console.log("Caught:", error.message);
    }
}
main()