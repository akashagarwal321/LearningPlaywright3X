// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log(" — Confusing Comparisons in JS - empty strings vs 0");

console.log("" == 0);        // true   → "" coerced to Number → 0
console.log("0" == 0);       // true   → "0" coerced to Number → 0
console.log("" == "0");      // false  → both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false

console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(5 !== "5");  // true

console.log(" — Confusing Comparisons in JS with null");

// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true   → special euqlity comparison rule in == --- null only is equal to undefined.. not 0 or anything else
console.log(null === undefined);  // false  → different types -- strict failes of course
console.log(null == 0);           // false  → null only == undefined/null

// now with >,<,>=,<= --- coercion happens with another alogrithm and js tries to convert null to 0... remember only with these operators... not with equals (loose or strict)

console.log(null >= 0);           // true   → >= coerces null to 0 ---> and 0 >= 0 is true
console.log(null > 0);            // false  -> > coerces null to 0 ---> 0 > 0 is false
console.log(null == 0 || null > 0); // false … but null >= 0 is true 