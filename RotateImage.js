//issueLink:https://leetcode.com/problems/rotate-image/?envType=problem-list-v2&envId=matrix
//both of the below solution works 
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    //my solution 
    var _a, _b;
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
    var k = matrix.length - 1;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i < k) {
                _a = [matrix[k][j], matrix[i][j]], matrix[i][j] = _a[0], matrix[k][j] = _a[1];
            }
        }
        k--;
    }
    console.log(matrix, "after vertical respose");
    for (var i = 0; i < matrix.length - 1; i++) {
        for (var j = i + 1; j < matrix[i].length; j++) {
            _b = [matrix[j][i], matrix[i][j]], matrix[i][j] = _b[0], matrix[j][i] = _b[1];
        }
    }
}
;
var matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix);
console.log(matrix);
