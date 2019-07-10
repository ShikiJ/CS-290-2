function findSolution(target)
{
	console.log("enter findSolution() and the target is " + target);
	function find(current, history){
	console.log("enter find() and the current and history is " + current + " " + history);
		if(current == target)
		{
			return history; 
		}
		else if (current > target)
		{
			return null; 
		}
		else
		{
			return find(current +5, `(${history}+5)`)||find(current*3,
			`(${history}*3)`);
		}
	}	
		return find(1,"1"); 
	
}
console.log(findSolution(24));
