/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const RED = 0,
          WHITE = 1,
          BLUE = 2;
    var r=0,w=0,b=0;
    while(b<nums.length){
        let tmp = nums[b];
        nums[b] = BLUE;
        if(tmp<BLUE){
            nums[w] = WHITE;
            w++;
        }
        if(tmp == RED){
            nums[r] = RED;
            r++;
        }
        b++;
    }
};