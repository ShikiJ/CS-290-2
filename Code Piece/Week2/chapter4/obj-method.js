let obj = {left:1, right: 2};
console.log(obj.left);
delete obj.left; 
console.log(obj);
console.log("using 'in' testing if property is in object", "left" in obj);

// Object.keys method 
//
console.log(Object.keys(obj));

// Object.assign method 
//
let object = {a:1,b:2};
let newobject ={b:3,c:4};
console.log(" object is ", object);
Object.assign(object,newobject);
console.log("object after Object.assign() is ",object);

// array and object is conceptally the same 
// 
let journal = [ {evnets:["work","pizza","running"],change: false},
		{events:["ice cream","work","touching"],change:true},
		{eventsp["touching","pizza","working"],change: false}
	      ];

