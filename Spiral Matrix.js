/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix || matrix.length==0) return [];
  const DIRECTIONS = [
      // LEFT = 0,
      // DOWN = 1,
      // RIGHT = 2,
      // UP = 3
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 0, y:-1},
      {x:-1, y: 0}
  ];
  
  var numRow = matrix.length,
      numCol = matrix[0].length,
      res = [],
      x = 0,
      y = 0,
      direction = 0,
      up = 0,
      down = numRow -1,
      left = 0,
      right = numCol -1;
      while (true) {
          for (let i = left; i <= right; ++i) res.push(matrix[up][i]);
          if (++up > down) break;
          for (let i = up; i <= down; ++i) res.push(matrix[i][right]);
          if (--right < left) break;
          for (let j = right; j >= left; --j) res.push(matrix[down][j]);
          if (--down < up) break;
          for (let j = down; j >= up; --j) res.push(matrix[j][left]);
          if (++left > right) break;
      }
  return res;
  
};