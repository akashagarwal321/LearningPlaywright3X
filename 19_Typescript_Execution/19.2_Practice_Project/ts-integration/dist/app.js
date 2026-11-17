import { TestRunner } from "./services/TestRunner.js";
const runner = new TestRunner();
runner.addTest({
    id: 1,
    name: "Login API",
    status: "passed",
    duration: 1200
});
runner.addTest({
    id: 2,
    status: "failed",
    name: "Create User API",
    duration: 3000
});
runner.addTest({
    duration: 3000,
    id: 3,
    status: "passed",
    name: "Delete User API"
});
async function main() {
    const response = await runner.getExecutionSummary();
    console.log("Execution Summary:", response);
    const passedTests = runner.getTestByStatus("passed");
    console.log("Passed Tests:", passedTests);
    const summary = runner.getSummaryByStatus();
    console.log(summary);
}
main();
