function decrypt(code: number[], k: number): number[] {

    const ans:number[]=[];
    if(k===0){
        return new Array(code.length).fill(0)
    }else{
      for(let i=0;i<code.length;i++){
          let sum=0;
           let m;
       if(k>0){
         if(i===code.length-1){
            m=0;
        }
        else{
            m=i+1;
        }
         for(let j=0;j<k;j++){
            if(m===code.length-1){
              sum=sum+code[m]
              m=0;
            }else{
              sum=sum+code[m];
              m++;
            }
         }  
         ans.push(sum)
       }else{
          if(i===0){
               m=code.length-1
            }else{
                m=i-1;
            }

            for(let j=0;j<Math.abs(k);j++){
            if(m===0){
              sum=sum+code[m]
              m=code.length-1;
            }else{
              sum=sum+code[m];
              m--;
            }
           

           
         } 
         ans.push(sum)

       }
      }
      return ans;
    }
    
    
};

console.log(decrypt([5,7,1,4],3))