
//issue link:https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/?envType=daily-question&envId=2025-04-08

function minimumOperations(nums: number[]): number {  
    function distinct():boolean{
      if(nums.length===0){
          return true;
      }
      let maxsize=Math.max(...nums)+1
    
      const arr:number[] = Array(maxsize).fill(0);
      
      for(let i=0;i<nums.length;i++){
         if(arr[nums[i]]===0){
           arr[nums[i]]=arr[nums[i]]+1
         }else{
          return false
         }
      }
      return true;
    }
  
    let numberOfOperations=0;
    while(!distinct()){
       if(nums.length>=3){
          nums=nums.slice(3) //remove 3 elemts 
          numberOfOperations++;//increment operation
         
          
       }else{
          //remove all the remaing elemt 
          numberOfOperations++;//operation increment 
          return numberOfOperations//return operation
       }
    }
    return numberOfOperations
  };

  console.log(minimumOperations([1,2,3,4,5]))

  //run this typescript file with command as: tsc --target es2016 filename.ts
  //than run node filename.js to see the output
