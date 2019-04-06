/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var rows={};
  var cols={};
  //scan zeroes
  var colLen = matrix[0].length;
  
  for(let i=0;i<matrix.length;i++){
      for(let j=0;j<colLen;j++){
          if(matrix[i][j]==0) {
              if(rows[i]==undefined){
                  rows[i] = i;            
              }
              if(cols[j]==undefined){
                  cols[j] = j;
              }
          }
      }
  }
  
  for(let i=0;i<matrix.length;i++){
      for(let j=0;j<colLen;j++){
          if(i in rows || j in cols) matrix[i][j] = 0;
      }
  }
};