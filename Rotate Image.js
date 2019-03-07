/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var size = matrix.length;
  var tmp;
  for(let i=0;i<size/2;i++){
      for(let j=i;j<size-i-1;j++){
          tmp = matrix[i][j];
          matrix[i][j] = matrix[size-j-1][i];
          matrix[size-j-1][i] = matrix[size-1-i][size-1-j];
          matrix[size-1-i][size-1-j] = matrix[j][size-1-i];
          matrix[j][size-1-i] = tmp;
          
      }
  }
};