/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var start =0, end = x, mid;
  while(start <=end){
      mid = Math.floor((end-start)/2)+start;
      if(mid*mid==x) return mid;
      else if(mid*mid < x){
          start=mid+1;
      }else{
          end = mid-1;
      }
  }
  return Math.floor((end-start)/2)+start;
};