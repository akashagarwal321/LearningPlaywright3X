
async function main() {
    try {
        getUser(); // Promise is not awaited
    } catch (error) {
        console.log("Caught:", error.message);
    }
}
main()