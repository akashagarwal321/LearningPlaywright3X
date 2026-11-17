export type TestStatus = "passed" | "failed" | "skipped";

export interface TestCase{
    id:number;
    name:string;
    status:TestStatus;
    duration:number;
}

export interface ApiResponse<T>{
    statusCode:number;
    data:T;
    message:string
}

export function isTestCase(value:unknown):value is TestCase{
    if(typeof value != "object" || value === null){
        return false;
    }

    return "id" in value && typeof value.id =="number"
    && "name" in value && typeof value.name =="string"
    && "status" in value && typeof value.status == "string" && (value.status=="passed" || value.status=="failed" || value.status=="skipped")
    && "duration" in value && typeof value.duration=="number"
}