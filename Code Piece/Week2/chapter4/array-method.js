let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

// adding entry to the start of an array! 
// shift() and unshift(); 

  let todoList = []; 
  function add(task)
  {
  	todoList.push(task);
  }
  
  function finish()
  {
  	// shift is removing the top of the stack/ front of the array 
	  todoList.shift();
  }

  function urgent(task)
  {
	todoList.unshift(task);  	
  }
  let job = 0; 
  while(job < 10)
  {
  	add(`job #${job}`);
	job++;  
  }

 urgent("urgent task");

  console.log(todoList);
