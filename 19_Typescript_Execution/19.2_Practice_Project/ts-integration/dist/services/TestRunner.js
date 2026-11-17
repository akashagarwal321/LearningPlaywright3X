export class TestRunner {
    testCases = [];
    addTest(testCase) {
        this.testCases.push(testCase);
    }
    getTestByStatus(testStatus) {
        return this.testCases.filter((tc) => tc.status === testStatus);
    }
    async getExecutionSummary() {
        return {
            statusCode: 200,
            data: this.testCases,
            message: "Execution Completed"
        };
    }
    getTestById(id) {
        return this.testCases.find((tc) => tc.id === id);
    }
    getTotalDuration() {
        return this.testCases.reduce((sum, tc) => sum + tc.duration, 0);
    }
    getSummaryByStatus() {
        return {
            passed: this.getTestByStatus("passed").length,
            failed: this.getTestByStatus("failed").length,
            skipped: this.getTestByStatus("skipped").length
        };
    }
}
