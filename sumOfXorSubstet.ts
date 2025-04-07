function subsetXORSum(nums: number[]): number {
    
    const subsets = ([x, ...xs]:any, ys:any = []) =>
  x == undefined
    ? [ys]
  : [...subsets (xs, ys), ...subsets (xs, [...ys, x])]
  
   const sub=subsets(nums)
   let ans=0
   for(let i=0;i<sub.length;i++){
    if(sub[i].length===0){
        ans=ans+0
    }else if(sub[i].length===1){
        ans=ans+sub[i][0]
    }else{
        let ans1=sub[i][0];
        for(let j=1;j<sub[i].length;j++){
            ans1=ans1^sub[i][j]
        }
        ans=ans+ans1
    }
   }
   return ans
};

console.log(subsetXORSum([1,3]))    