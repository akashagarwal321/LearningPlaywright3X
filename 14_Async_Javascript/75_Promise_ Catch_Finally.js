Promise.resolve("Success")
  .then(result => {
    console.log(result);
  })
  .finally(() => {
    console.log("Cleanup");
  });
   // will run success and then finally


  Promise.reject("Failure")
  .catch(result => {
    console.log(result);
  })
  .finally(() => {
    console.log("Cleanup");
  });


  //will run catch and then finally


  //practical example

  login()
  .then(() => runTest())
  .catch(error => logError(error))
  .finally(() => closeBrowser());