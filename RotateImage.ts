
//issueLink:https://leetcode.com/problems/rotate-image/?envType=problem-list-v2&envId=matrix

//both of the below solution works 

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {

    //my solution 
     
    //  const upper=[];
    //  for(let i=0;i<matrix.length;i++){
    //     let temp=[];
    //     for(let j=matrix.length-1;j>=0;j--){
    //        temp.push(matrix[j][i])  
    //     }
    //     upper.push(temp)

    //  }
    //  for(let i=0;i<matrix.length;i++){
    //     matrix[i]=upper[i]
    //  }


    //refered solution 
    //finding vertical rversal
    let k=matrix.length-1
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(i<k){
              [matrix[i][j],matrix[k][j]]=[matrix[k][j],matrix[i][j]]
            }
        }
        k--;
    }
     console.log(matrix,"after vertical respose")

    for(let i=0;i<matrix.length-1;i++){
        for(let j=i+1;j<matrix[i].length;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
           
        }
      
    }
    
};

const matrix=[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

rotate(matrix)
console.log(matrix)