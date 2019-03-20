/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var left = 0,
      right = height.length-1,
      max = 0;
  while(left<right){
      let curHeight = Math.min(height[left],height[right]);
      let area = (right-left)*curHeight;
      max = Math.max(area,max);
      if(height[left]<height[right]){
          left++
      }else{
          right--;
      }
  }
  return max;
};