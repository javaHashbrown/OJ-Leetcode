/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var idx1 = m-1;
  var idx2 = n-1;
  var end = m+n-1;
  //compare each element from the end of both arrays
  while(idx1>=0 && idx2>=0){
      if(nums1[idx1]>nums2[idx2]){
          nums1[end] = nums1[idx1];
          end--;
          idx1--;
      }else{
          nums1[end] = nums2[idx2];
          end--;
          idx2--;
      }
  }
  while(idx2>=0){
      nums1[end] = nums2[idx2];
      end--;
      idx2--;
  }  
};