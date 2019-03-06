/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var cache={
      '1':'1','2':'11','3':'21','4':'1211','5':'111221'
  };
  if(cache[n]!==undefined) return cache[n];
  else{
      var start = Object.keys(cache).length;
      for(let i=start;i<=n;i++){
          cache[i] = say(cache[i-1]);
      }
  }
  return cache[n];

};
function say(preSay){
      var nums = preSay;
      var curNum=null;
      var curCount=0;
      var curSay='';
      var result=''
      for(let i=0;i<=nums.length;i++){
          if(curNum==null) curNum=nums[i];
          if(curNum !== nums[i]){
              curSay=curCount+curNum;
              result +=curSay;
              curNum=nums[i];
              curSay='';
              curCount=1;
          }else{
              curCount++;    
          }
          
      }
      return result;
  }

