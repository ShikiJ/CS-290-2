let obj1 = {value: 10}, obj2 ={value: 10}; 
let obj3 = obj1;

// compare 
// 
console.log(obj1 == obj3 );
console.log(obj2 == obj1);

console.log("obj1 == obj3 yet obj2 != obj1, and if I change the value of obj1");
obj1.value = 15; 
console.log("obj3's value will be changed  to",obj3);
// const obj's property can be updated but obj it self can not 
const score = {bal:1, dic:2}; 
score.bal = 2; 
console.log(score); 
// score = {bal:2, dic:2} will NOT BE ALLOWED

