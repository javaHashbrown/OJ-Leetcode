/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows<=1) return s;
  var res = [],
      row = 0,
      col = 0,
      direction = 1;//DOWN 1, UP -1
  
  for(let i=0;i<s.length;i++){
      // console.log('round start',row, col)
      if(row>=0 && row<numRows && res[row]==undefined) res[row] = [];
      if(row>=numRows){
          //reach the bottom, change direction to UP
          direction = -1;
          row = numRows - 2;
          col++;
      }else if(row<0){
          //reach the top, change direction to DOWN
          direction = 1;
          row += 2 ;
          col++;
      }
      //full cols
      if(col%(numRows-1)==0){
          res[row][col] = s[i];
          row+=direction;
      }else{
      //other zig cols
          res[row][col] = s[i];
          row+=direction;
          col++;
      }
      // console.log('round end', row,col);
  }
  return res.map(row=>row.join('')).join('');
};