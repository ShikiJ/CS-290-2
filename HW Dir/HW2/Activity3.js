let obj1 = {a:2,b:2,c:3};
let obj2 ={d:2,b:2,c:3};
let obj3 = {a:"Iam a string",b:["lion", "monkey","me"],c:25,d:{test:"failed", prop:"near dead"}};
for(var prop in obj3){
	console.log(obj3[prop]);
}

let deepEqual = function(obj1,obj2)
{
	if(typeof(obj1) !=typeof(obj2))
		return false; 
	var final = true; 
	for(var prop in obj1)
	{
	//	for(var prop2 in obj2)
	//	console.log("obj.prop is " + obj1.prop);
	//	console.log("obj[prop] is " + obj1[prop]);
			if(obj1[prop] !== obj2[prop])
			{
				final =false; 
			}
	//	}

	}
	return final;
};
console.log(deepEqual(obj3,obj3));
