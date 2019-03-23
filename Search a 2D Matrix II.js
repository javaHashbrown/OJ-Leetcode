/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix || matrix.length == 0) return false;
  var numRow = matrix.length, numCol = matrix[0].length;
  var isFound = false,
      x = numRow-1,
      y = 0;
  while(y<numCol && x>=0){
      if(matrix[x][y] == target){
          isFound = true;
          break;
      }else if(matrix[x][y] < target){
          y++;
      }else{
          x--;
      }
  }
  return isFound;
};