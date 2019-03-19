/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var len1 = a.length-1;
  var len2 = b.length-1;
  a = a.split('');
  b = b.split('');
  return len1>len2?addStr(a,b):addStr(b,a);
  
};
function addStr(longStr, shortStr){
  var long = longStr.length-1;
  var short = shortStr.length-1;
  var carry = 0;
  while(long>=0 || short>=0){
      if(longStr[long]=='1' && shortStr[short]=='1'){
          longStr[long] = carry?'1':'0';
          carry = 1;
      }else if(longStr[long]=='1' || shortStr[short]=='1'){
          longStr[long] = carry? '0':'1';
          carry = carry? 1: 0;
      }else{
          longStr[long] = carry? '1':'0';
          carry = 0;
      }
      long--;
      short--;
  }
  if(carry){
      longStr.unshift('1');
  }
  return longStr.join('');
}