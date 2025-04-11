

//issue link:https://leetcode.com/problems/count-symmetric-integers/description/?envType=daily-question&envId=2025-04-11
function countSymmetricIntegers(low: number, high: number): number {

    let ans=0;
    for(let i=low;i<=high;i++){
        const num=i.toString();
        if(num.length%2===0){
            const half=(num.length/2)-1;
            const num1=num.slice(0,half+1).split("")
            const num2=num.slice(half+1).split("")
           const sum1= num1.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue),0)
            const sum2=num2.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue),0)
            if(sum1===sum2){
               ans++;
            }

        }
      }
    return ans;

};

console.log(countSymmetricIntegers(1,100))
