//Callback hell happens when dependent asynchronous operations are nested inside 
// one another through callbacks, making the control flow increasingly difficult 
// to read, maintain, and handle errors in.


getTestData((testData) => {

    createTest(testData, (test) => {

        executeTest(test, (result) => {

            generateReport(result, () => {

                console.log("Done");

            });

        });

    });

});