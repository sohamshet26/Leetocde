
//issue link:https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/?envType=daily-question&envId=2025-04-09

function minOperations(nums: number[], k: number): number {
    
    let operations:number=0;
    
       const allSame=()=>nums.every((element)=>element===k)
       let identical;
      let m:number=0;
      while(m<nums.length){
        for(let i=0;i<nums.length;i++){
          if(nums[i]===k){
            continue;
          }else{
             for(let h=nums[i]-1;h>=k;h--){
                identical=nums[i]
                let identical_indexes:number[]=[]
                identical_indexes.push(i)
    
              for(let j=0;j<nums.length;j++){
                if(nums[j]===k){
                    continue
                }else{
                      if(nums[j]>h){
                    if(identical===nums[j]){
                        identical=nums[j]
                        identical_indexes.push(j)
                    }else{
                        identical=nums[j]
                        j=nums.length
                    }
                }
                }
              
              }
    
              if(identical===nums[i]){
                for(let j=0;j<identical_indexes.length;j++){
                    nums[identical_indexes[j]]=k
                }
                h=k;
                operations++;
                
              }  
    
             }
          }
       }
      m++
      }
       
       
       if(allSame()){
        return operations;
       }else{
        return -1
       }
        

    };

    console.log(minOperations([5,2,5,4,5],2))