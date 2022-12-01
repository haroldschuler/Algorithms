// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    // This method might work but the runtime was exceeded on a huge array
    // for(let i = 0; i < height.length - 1; i++){
    //     for(let j = i + 1; j < height.length; j++) {
    //         let tempArea = 0;
    //         tempArea = Math.min(height[i],height[j]) * (j - i);
    //         if(tempArea > maxArea){
    //             maxArea = tempArea;
    //         }
    //     }
    // }
    let left = 0;
    let right = height.length - 1;
    let tempArea = 0;
    while(left < right) {
        tempArea = Math.min(height[left],height[right])*(right-left);
        if(tempArea > maxArea){
            maxArea = tempArea;
        }
        if(height[left] > height[right]){
            right -= 1;
        }
        else if(height[left] < height[right]){
            left += 1;
        }
        else {
            right -= 1;
            left += 1;
        }
    }
    
    
    return maxArea;
};