// // // object practice

// // // let obj ={
// // //     a : 3,
// // //     b : 4,
// // //     c : 5,
// // //     $ : 5,
// // //     25 : 44,
// // //     "25" : 55,
// // //     true : 555
// // // }

// // // console.log(obj['true'])

// // // let obj = {
// // //     [2+5] : "a",
// // //     8 : "b"
// // // }

// // // console.log(Object.keys(obj)[0]);

// // // console.log(typeof(null));

// // // for(let radhey in obj ){
// // //     console.log(` this is the key ${radhey} and this is the value ${obj[radhey]}`)
// // // // }
// // // let obj = {}

// // // Object.defineProperties(obj,{
// // //    name : {
// // //     value : 'radhey',
// // //     writable : false,
// // //     enumerable : true,
// // //     configurable : false
// // //    }
// // // })
// // // // delete obj.name
// // // obj.name = 'payaa'
// // // console.log(obj);

// // // let obj = {
// // //     name : 'radhey',
// // //     age : 27,
// // //     email : 'sradhy'
// // // }

// // // obj['full-name'] = obj.name
// // // delete obj.name
// // // console.log(obj);

// // // let emp = {}

// // // let obj = {
// // //     name : 'radhey',
// // //     age : 27,
// // //     email : 'sradhy'
// // // }
// // // // console.log(obj['name'])

// // // let obj2 = {
// // //      name2 : 'radhey shyam',
// // //     age2 : 275,
// // //     emai2l : 'sradfgfdjfhy'
// // // }

// // // for(let key in obj){
// // //     emp[key] = obj[key]
// // // }

// // // for(let key in obj2){
// // //     emp[key] = obj2[key]
// // // }
// // // console.log(emp);
// // //good morning this is 31 dec

// // let obj1 = {
// //   a: 10,
// //   b: 20,
// //   c: 30,
// //   d: 20
// // };

// // let obj2 = {
// //   a: 11,
// //   d: 20,
// //   c: 34,
// //   a: 33,
// //   a:555
// // };

// // let obj3 = {}
// // for(let key in obj1){
// //   obj3[key] = obj1[key]
// // }

// // for(let key in obj2){
// //   if(key in obj3){
// //     if(Array.isArray(obj3[key])){
// //       obj3[key].push(obj2[key])
// //     }else{
// //       obj3[key] = [ obj3[key],obj2[key]]
// //     }
// //   }
// //   else{
// //     obj3[key] = obj2[key]
// //   }
// // }
// // console.log(obj3);

// // // let result = {};

// // // for (let key in obj1) {
// // //   result[key] = obj1[key];
// // // }

// // // console.log(result)

// // // for (let key in obj2) {
// // //   if (key in result) {
// // //     // agar pehle se key exist karti hai
// // //     if (Array.isArray(result[key])) {
// // //       result[key].push(obj2[key]);
// // //     } else {
// // //       result[key] = [result[key], obj2[key]];
// // //     }
// // //   } else {
// // //     result[key] = obj2[key];
// // //   }
// // // }

// // // console.log(result);

// // // code 2

// // // let result = {};

// // // for (let ram in obj1){
// // //     result[ram] = obj1[ram]
// // // }
// // // // console.log(result);

// // // for(let key in obj2){

// // // if(key in result){

// // //     if(Array.isArray(result[key])){
// // //     result[key].push(obj2[key])
// // //     }else{
// // //         result[key] = [result[key] , obj2[key] ]
// // //     }
// // // }
// // // else{result[key] = obj2[key]}

// // // }

// // // console.log(result);

// // let obj = {
// //   a : 10,
// //   b : 20,
// //   c : 30
// // }

// // let search = 20
// // let flag = false
// // for(let key in obj){
// //   if(search == obj[key]){
// //     console.log("found",obj[key],"in obj")
// //     flag = true
// //     break;
// //   }
// //   else{
// //     flag = false
// //   }
// // }
// // if(flag == false){
// //   console.log("not")
// // }

// // // if(search in obj){
// // //   console.log(obj[search], search);
// // // }

// // let user = {
// //   id: 101,
// //   name: "Radhey",
// //   age: 27,
// //   isActive: true,

// //   address: {
// //     city: "Noida",
// //     state: "UP",
// //     pincode: 201301,
// //     geo: {
// //       lat: 28.5355,
// //       lng: 77.3910
// //     }
// //   },

// //   skills: ["HTML", "CSS", "JavaScript", "React"],

// //   education: [
// //     {
// //       degree: "BCA",
// //       year: 2019,
// //       subjects: {
// //         core: ["C", "C++", "DBMS"],
// //         elective: ["Maths"]
// //       }
// //     },
// //     {
// //       degree: "MCA",
// //       year: 2024,
// //       subjects: {
// //         core: ["DSA", "OS", "CN"],
// //         elective: ["AI"]
// //       }
// //     }
// //   ],

// //   projects: {
// //     frontend: {
// //       count: 4,
// //       list: [
// //         { name: "Todo App", tech: ["React", "LocalStorage"] },
// //         { name: "Weather App", tech: ["JS", "API"] }
// //       ]
// //     },
// //     backend: {
// //       count: 2,
// //       list: [
// //         { name: "Auth API", tech: ["Node", "JWT"] }
// //       ]
// //     }
// //   },

// //   contact: {
// //     email: "radhey@example.com",
// //     phone: {
// //       primary: "9999999999",
// //       alternate: null
// //     }
// //   },

// //   greet: function () {
// //     return `Hello, my name is ${this.name}`;
// //   }
// // };

// // let obj2 = {}

// let obj = {
//   a : 10,
//   b : 20,
//   c : {
//     d : 30,
//     e : 40
//   },
//   f : [
//     50,60,70, { y:45, h:55 , g : {f:55, gh : 667}}
//   ],
//   g : function(a,b){ console.log(a+b) }
// }
// let xc = {}
// for (let key in obj){
//   if(typeof(obj[key])  !='object'){
//     xc[key] = obj[key]
//   }else{
//     for(let gt in obj[key]){
//       xc[gt] = obj[key][gt]
//     }
//   }
// }
// console.log(xc)
// // // console.log(obj.a, obj.b, obj.c.d, obj.c.e, )
// // // console.log( obj,obj.g(2,3));
// // // for(let k in obj){
// // //   if(typeof(obj[k]) != "object"){
// // //     console.log(obj[k])
// // //   }
// // // }

// // function printAll(obj){
// //   for(let k in obj){
// //     // Check if it's a function first
// //     if(typeof obj[k] === "function"){
// //       obj[k](10,20)
// //     }
// //     // Check if it's NOT an object (primitive values)
// //     else if(typeof obj[k] !== "object" || obj[k] === null){
// //       console.log(k, ":", obj[k]);
// //     }
// //     // If it's an object, recurse
// //     else{
// //       printAll(obj[k]);
// //     }
// //   }
// // }

// // printAll(obj);

// let obj = {
//   a: 1,
//   b: 2,
//   c: 6
// };

// console.log(Object.keys(obj).length);

// let count = 0

// for(let key in obj){
//   if(obj.hasOwnProperty(key)){
//     count++
//   }
// }
// console.log(count)

// let obj = {
//   a: 1,
//   b: 2,
//   c: 6
// };

// let count = 0;

// for (let key in obj) {
//   if (Obj.hasOwnProperty(key)) {
//     count++;
//   }
// }

// console.log(count);

// let original = {
//   name: "Radhey",
//   age: 26
// };

// let clone = {}
// for(let keys in original){
//   clone[keys] = original[keys]
// }
// console.log(clone)
// console.log(original)

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5
// };

// for(let key in obj){
//   if(obj[key] % 2 == 0){
//     delete obj[key]
//   }
// }
// console.log(obj)

// let user = {
//   name: "Radhey"
// };
// Object.freeze(user);
// user.name = "Aman";

// console.log(user)

// let parent = { x: 10 };
// let child = Object.create(parent);
// child.y = 20;

// console.log(child.x)

// let obj1 = { b: 1, obj2: { a: 2, obj3: { c: 3, obj4: { r: 4 } } } };
// console.log(obj1);

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// let count = 0;
// for (let key in obj) {
//   count++;
// }

// console.log(count); // 3

// let original = {
//   name: "Radhey",
//   address: {
//     city: "Delhi"
//   }
// };

// let shallowCopy = { ...original };

// // change nested property
// shallowCopy.address.city = "Noida";

// console.log(original.address.city); // ❗ Noida
// console.log(shallowCopy.address.city); // Noida

// // console.log(object)

// let base = { a: 10 };
// let obj = Object.create(base);

// obj.a = 20;

// console.log(obj.a);
// console.log(base.a);
// console.log(obj.hasOwnProperty("a"));
// console.log("a" in obj);

// let user1 = { name: "Radhey" };
// let user2 = user1;

// user2.name = "Bairagi";

// console.log(user1.name);
// console.log(user2.name);

// let parent = { x: 5 };
// let child = Object.create(parent);

// child.x = 10;
// delete child.x;

// console.log(child.x);

// let obj = Object.freeze({
//   a: 1,
//   b: { c: 2 }
// });

// obj.a = 100;
// obj.b.c = 200;

// console.log(obj);

// let obj = {
//   2: "two",
//   1: "one",
//   b: "bee",
//   a: "aye"
// };

// for (let key in obj) {
//   console.log(key);
// }

// let a = { value: 10 };
// let b = { value: 10 };

// console.log(a == b);
// console.log(a === b);

// let obj = Object.create(null);
// obj.x = 10;

// console.log(obj.hasOwnProperty("x"));

// let obj = Object.create({ a: 1 });
// obj.b = 2;

// console.log("a" in obj);

// console.log(obj.hasOwnProperty("a"));

// let arr = [8,5,1,4,5,3,2]
// let lastOcc = []
// let extra = []
// for(let i=0; i<arr.length; i++){
// if(!(lastOcc.includes(arr[i]))){
//     lastOcc.push(arr[i])
// }else{
//     extra.push(i)
// }
// }
// console.log(extra);

// let arr = [8, 5, 1, 4, 5, 3, 2];
// let dup = [];
// let rep = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!dup.includes(arr[i])) {
//     dup.push(arr[i]);
//   } else {
//     rep.push(i);
//   }
// }

// console.log(rep[rep.length-1]);


// let given = 5
// let arr = [8, 5, 1, 4, 5, 3, 2];
// let store = 0
// for(let i=0; i<arr.length; i++){
// if(arr[i] == given){
//     store = i
// }
// }
// // console.log(store);

// let arr = [
//   { name: "A", marks: 95 },
//   { name: "B", marks: 88 },
//   { name: "C", marks: 97 }
// ];

// let total = 0
// for(let i=0; i<arr.length; i++){
//    total += arr[i].marks
// }
// console.log(total/arr.length)


// let arr = [
//   { name: "A", marks: 95 },
//   { name: "B", marks: 88 },
//   { name: "C", marks: 57 },
//   { name: "d", marks: 27 },
//   { name: "e", marks: 60 }
// ];

// let store = []
// for(let i=0; i<arr.length; i++){
//     if(arr[i].marks >= 80){
//         arr[i].grade = 'A'
//     }
//     else if(
//         arr[i].marks >= 50){
//         arr[i].grade = 'B'
//     }
//     else if(
//         arr[i].marks <= 50){
//         arr[i].grade = 'Fail students'
//     }
// }
// console.log(arr)



// https://radhy-shyam-29.github.io/Daily-Scoop-Webpage-Clone/



