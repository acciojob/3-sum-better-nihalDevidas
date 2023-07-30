function threeSum(arr, target) {
// write your code here

    arr.sort((x,y)=>{
		if(x > y){
			return 1;
		}
		if(x < y){
			return -1;
		}
		return 0;
	});

	
	let reqSum = 0;

	for(let i=0; i<arr.length; i++)
	{
		 let start=i+1;  let end= arr.length-1;
		
		while(start < end){
			let sum2 = arr[start] +arr[end]+arr[i];
			
             if((sum2 - target) < (reqSum - target))
			 {
				 reqSum = sum2;
			 }		
		}
	}
  
}

module.exports = threeSum;
