/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var curStr=[],
      res=[];
  generator(n,0,0,curStr,res);
  return res;
};

function generator(numPar, left, right, curStr, res){
  // console.log(curStr,'###',res)
  if(left<numPar){
      curStr.push('(');
      generator(numPar,left+1,right,curStr,res);
      curStr.pop();
      
  }
  if(right<left){
      curStr.push(')');
      generator(numPar,left, right+1,curStr,res);
      curStr.pop();
  }
  if(curStr.length == 2*numPar){
      res.push(curStr.join(''));
      return;
  }
}