/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var visited = [];
  if(!board || board.length==0)  return false;
  var rows = board.length, cols = board[0].length;
  for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
          if(search(board,word,0,visited,i,j)) return true;
      }
  }
  visited = null;
  return false;  
};

function search(board,word,matchLength,visited,x,y){
  if(matchLength == word.length) return true;
  var rows = board.length, cols = board[0].length;
  if(visited[x]==undefined) visited[x] = [];
  if(x<0 || x>=rows || y<0 || y>=cols || visited[x][y] || board[x][y]!==word[matchLength]) 
      return false;
  visited[x][y] = true;
  var res = search(board, word, matchLength+1,visited, x-1,y) ||
      search(board,word,matchLength+1,visited,x+1,y) ||
      search(board,word,matchLength+1,visited,x,y-1) ||
      search(board,word,matchLength+1,visited,x,y+1);
  visited[x][y] = false;
  return res;
}