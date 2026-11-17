export function isTestCase(value) {
    if (typeof value != "object" || value === null) {
        return false;
    }
    return "id" in value && typeof value.id == "number"
        && "name" in value && typeof value.name == "string"
        // && "status" in value && typeof value.status == "TestStatus"
        && "duration" in value && typeof value.duration == "number";
}
