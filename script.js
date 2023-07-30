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

	
	let reqSum = Number.MAX_SAFE_INTEGER;let sum2;

	for(let i=0; i<arr.length; i++)
	{
		let sum1 = target-arr[i];
		 let start=i+1;  let end= arr.length-1;
		
		while(start < end){
		    sum2 = arr[start] +arr[end];
			if(sum2 ===  sum1){
				break;
			}
			if(sum2 < sum1){
				start++;
			}
			if(sum2 > sum1){
				end--;
			}
		}

		if((arr[i]+sum2-target) < (reqSum-target)){
			reqSum = sum2+arr[i];
		}
	}
  return sum2;
}

module.exports = threeSum;
