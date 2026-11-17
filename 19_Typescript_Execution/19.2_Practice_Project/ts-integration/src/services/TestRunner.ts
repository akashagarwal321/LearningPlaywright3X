import type { TestCase,TestStatus,ApiResponse } from "../models/TestCase.js";
export class TestRunner{
    private testCases: TestCase[] =[];
    
    addTest(testCase:TestCase):void{
        this.testCases.push(testCase);
    }


    getTestByStatus(testStatus:TestStatus):TestCase[]{
        return this.testCases.filter((tc)=>tc.status === testStatus)
    }

    async getExecutionSummary():Promise<ApiResponse<TestCase[]>>{
        return {
            statusCode:200,
            data:this.testCases,
            message:"Execution Completed"
        }
    }

    getTestById(id:number):TestCase|undefined{
        return this.testCases.find((tc)=>tc.id === id)
    }

    getTotalDuration():number{
        return this.testCases.reduce((sum,tc)=>sum+tc.duration,0)
    }

    getSummaryByStatus():Record<TestStatus,number>{
        return {
            passed:this.getTestByStatus("passed").length,
            failed:this.getTestByStatus("failed").length,
            skipped:this.getTestByStatus("skipped").length
        }
    }
}