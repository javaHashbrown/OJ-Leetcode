/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length>nums2.length){
      return findMedianSortedArrays(nums2,nums1);
  }
  var lengX = nums1.length,
      lengY = nums2.length;
  
  var left = 0,
      right = lengX,
      total = lengX + lengY;

  while(left<=right){
      let partitionX = Math.floor((right-left)/2)+left,
          partitionY = Math.floor((total+1)/2) - partitionX;
      
      let maxLeftX = partitionX==0 ? Number.NEGATIVE_INFINITY : nums1[partitionX-1],
          minRightX = partitionX==lengX ? Number.POSITIVE_INFINITY : nums1[partitionX],
          maxLeftY = partitionY==0 ? Number.NEGATIVE_INFINITY : nums2[partitionY-1],
          minRightY = partitionY==lengY ? Number.POSITIVE_INFINITY: nums2[partitionY];
      if(maxLeftX<= minRightY && maxLeftY <= minRightX){
          return total%2>0 ? Math.max(maxLeftX,maxLeftY) : (Math.max(maxLeftX,maxLeftY) + Math.min(minRightX,minRightY))/2
          
      }else if(maxLeftX > minRightY){
          right = partitionX-1;
          
      }else{
          left = partitionX+1
      }
          
  }
  
  
};