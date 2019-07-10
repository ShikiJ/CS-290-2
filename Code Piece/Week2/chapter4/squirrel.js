  let journal = []; 
  function addEntry(events, squirrel)
  {
	journal.push(events, squirrel);
  }

addEntry(["work", "touched tree", "pizza", "running",
	          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
	          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
	          "beer"], true);
//----------------------------------------------------------
//this is a direct translation of calculation correlation from 
//2 element table 

function phi(table) {
	  return (table[3] * table[0] - table[2] * table[1]) /
		    Math.sqrt((table[2] + table[3]) *
			                  (table[0] + table[1]) *
			                  (table[1] + table[3]) *
			                  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));


//---------------------------------------------------------------
//this is transformation from journal  text msg to 2-element table
//

function tableFor(event, journal) {	// take in event of insterest and 
					//whole journal 
	  let table = [0, 0, 0, 0]; 	//init table 
	// 0- no event/no trans, 1- event/no trans, 2- no event/trans, 3-event/tra  
	  for (let i = 0; i < journal.length; i++) {  // loop through all entry 
		      let entry = journal[i], index = 0;  //refreshing entry&indx
		      if (entry.events.includes(event)) index += 1; 
		      if (entry.squirrel) index += 2; // decide which index to land
		      table[index] += 1; // count table
		    }
	  return table;
}

//-------------------------------------------------------------------
//combining 2 factors and push into journal to analysis combined effects 
//
for (let entry of JOURNAL) {
	  if (entry.events.includes("peanuts") &&
		       !entry.events.includes("brushed teeth")) {
		      entry.events.push("peanut teeth");
		    }
}
//console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1
