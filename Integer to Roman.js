/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var romanMap = {
      1: ['I','X','C','M'],
      5: ['V','L','D']
  }
  
  var digitIndex = 0;
  var res = [];
  while(num>0){
      let curDigit = num%10;
      switch(curDigit){
          case 4:
              res.push(romanMap[1][digitIndex]+romanMap[5][digitIndex]);
              break;
          case 9:
              res.push(romanMap[1][digitIndex]+romanMap[1][digitIndex+1]);
              break;
          default:
              let quota = Math.floor(curDigit/5);
              let mod = curDigit % 5;
              let remain = '';
              for(let i=0;i<mod;i++){
                  remain +=romanMap[1][digitIndex];
              }
              let curRoman = quota>0?romanMap[5][digitIndex]+remain:remain;
              res.push(curRoman)
      }
      num = Math.floor(num/10);
      digitIndex++;
      
  }
  return res.reverse().join('');
};