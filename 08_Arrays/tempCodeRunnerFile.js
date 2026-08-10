//
const original = [[1, 2], [3, 4]];

const shallow = [...original];
const deep = structuredClone(original);

shallow[0].push(99);
deep[1].push(88);

console.log(original);
console.log(shallow);
console.log(deep);