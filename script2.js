let obj = {
    a: 3,
    b: 4,
    c: 3
}

let c = "c";
// console.log("object wala b: ",obj.b);
// console.log("variable wala b: ",obj[b]);

console.log("object wala b: ",obj.b);
// console.log("variable wala b: ",Array.isArray(obj[c]));

let result = {

}

result[c] = [obj[c], 3];

console.log(result);
