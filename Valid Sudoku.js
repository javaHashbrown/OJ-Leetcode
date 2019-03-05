/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var rows={};
  var columns={};
  var grids={};
  var element;
  var gridIdx=0;
  for(let i=0;i<9;i++){
      rows[i]={};
      for(let j=0;j<9;j++){
          if(!columns[j]) columns[j] = {};
          gridIdx = Math.floor(i/3)*3 + Math.floor(j/3);
          if(!grids[gridIdx]) grids[gridIdx]={};
          
          if(board[i][j] == '.') continue;
          element = board[i][j];
          if(rows[i][element] || columns[j][element] || grids[gridIdx][element]) return false;
          rows[i][element] = true;
          columns[j][element] = true;
          grids[gridIdx][element] = true
      }
  }
  return true;
};