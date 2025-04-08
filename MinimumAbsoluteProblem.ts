//issue link: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

function minimumAbsDifference(arr: number[]): number[][] {
    let working=[...arr]
    working.sort((a,b)=>a-b)

    //finding minimum absolute difference
    let minAbsDiff = Infinity
    const ans:number[][]=[]

    for(let i=0;i<=working.length-1;i++){
      if((working[i+1]-working[i])<minAbsDiff){
        minAbsDiff=working[i+1]-working[i]
      }
    }
    console.log(minAbsDiff)
    for(let i=0;i<=working.length-1;i++){
        if((working[i+1]-working[i])===minAbsDiff){
            ans.push([working[i],working[i+1]])
        }
    }
    console.log(ans)

    return ans
    
};
const ans:number[][]=minimumAbsDifference([4,2,1,3])

