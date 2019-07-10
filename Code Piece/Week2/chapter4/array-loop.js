  let array = [1,3,4,5,6,7,8];
  for(let num of array)
  {
	console.log(num);	
  }

  let arrayObj = [{name:"Jones",age:28, job:"homeless", iq:70},
	  	  {name:"luke",age:18, job:"SkyWalker", iq:180},
	  	  {name:"Hitler", age:34, job:"Fur", iq:130},
	  	  {name: "Stalin", age:43, job:"Killer", iq:90}];
  for(let entry of arrayObj)
  {
  	console.log(`${entry.name} is a ${entry.age} years old ${entry.job}`);
  }

//------------------------------------------------------------
// this is a loop strcuture to collet event in a deep obj-array 
//
  function journalEvents(journal) {
	    let events = [];
	  //create a new array to collect all events
	    for (let entry of journal) {
	// loop through journal object 
		        for (let event of entry.events) {
				// loop array within obj's entry
				      if (!events.includes(event)) {
					              events.push(event);
					      // push every newly appreared event 
					      // into event collection 
					            }
				    }
		      }
	    return events;
  }

//console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]
