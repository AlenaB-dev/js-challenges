/* CHALLENGE 7 - Default parameters

Answer following question:
1. Why on the line 14 we can't simply use following statement:
mult = mult || 2; - Answer: “If mult is falsy (i.e. 0, false, null, undefined, NaN, or ''), use 2.”

“If mult is not undefined, use it. Otherwise, use 2.”
So only when the argument mult is missing or explicitly undefined, we substitute the default value 2. That gives us full control over valid values, including falsy ones like 0.

Set default value of the mult parameter
in the multiplyBy() function.
*/

"use strict";

// function multiplyBy(a, mult) {
//   mult = mult !== undefined ? mult : 2;
//   console.log(a * mult);
// }

function multiplyBy(a, mult = 2) {
  console.log(a * mult);
}

multiplyBy(2);
// 4

multiplyBy(2, undefined);
// 4

multiplyBy(2, 0);
// 0

multiplyBy(5, 10);
// 50
