function threeSum(arr, target) {
let opArr = [];

function findCombi(sum,index,arr){
  
  if(sum.length > 3){
    return;
  }
  if(index === arr.length){
    opArr.push(sum);
    return;
  }
  
  let arr1 = [... sum];
  arr1.push(arr[index]);
  let arr2 = [...sum];
  
  findCombi(arr1,index+1,arr);
  findCombi(arr2,index+1,arr)
  
}
findCombi([], 0, arr);


	
let reqSu = Number.MAX_SAFE_INTEGER;
for(let i = 0; i< opArr.length; i++)
{
  if(opArr[i].length === 3)
  {
    let sum = 0;
    for(let j = 0; j< opArr[i].length; j++){
      sum += opArr[i][j];
    }
    if(Math.abs(sum - target) < (reqSu - target)){
      reqSu = sum;
      
    }
  }
}
return reqSu;
}

module.exports = threeSum;
