// object practice

// let obj ={
//     a : 3,
//     b : 4, 
//     c : 5,
//     $ : 5,
//     25 : 44,
//     "25" : 55,
//     true : 555
// }

// console.log(obj['true'])


// let obj = {
//     [2+5] : "a",
//     8 : "b"
// }

// console.log(Object.keys(obj)[0]);


// console.log(typeof(null));


// for(let radhey in obj ){
//     console.log(` this is the key ${radhey} and this is the value ${obj[radhey]}`)
// // }
// let obj = {}

// Object.defineProperties(obj,{
//    name : {
//     value : 'radhey',
//     writable : false,
//     enumerable : true,
//     configurable : false
//    }
// })
// // delete obj.name
// obj.name = 'payaa'
// console.log(obj);


// let obj = { 
//     name : 'radhey',
//     age : 27,
//     email : 'sradhy'
// }

// obj['full-name'] = obj.name
// delete obj.name
// console.log(obj);

// let emp = {}

// let obj = {
//     name : 'radhey',
//     age : 27,
//     email : 'sradhy'
// }
// // console.log(obj['name'])

// let obj2 = {
//      name2 : 'radhey shyam',
//     age2 : 275,
//     emai2l : 'sradfgfdjfhy'
// }

// for(let key in obj){
//     emp[key] = obj[key]
// }

// for(let key in obj2){
//     emp[key] = obj2[key]
// }
// console.log(emp);


let obj1 = {
  a: 10,
  b: 20,
  c: 30,
  d: 20
};

let obj2 = {
  a: 11,
  d: 20,
  c: 34,
  a: 33,
  a:555
};


// let result = {};

// for (let key in obj1) {
//   result[key] = obj1[key];
// }

// console.log(result)

// for (let key in obj2) {
//   if (key in result) {
//     // agar pehle se key exist karti hai
//     if (Array.isArray(result[key])) {
//       result[key].push(obj2[key]);
//     } else {
//       result[key] = [result[key], obj2[key]];
//     }
//   } else {
//     result[key] = obj2[key];
//   }
// }

// console.log(result);

// code 2

let result = {};

for (let ram in obj1){
    result[ram] = obj1[ram]
}
// console.log(result);

for(let key in obj2){

if(key in result){

    if(Array.isArray(result[key])){
    result[key].push(obj2[key])
    }else{
        result[key] = [result[key] , obj2[key] ]
    }
}
else{result[key] = obj2[key]}

}

console.log(result);

