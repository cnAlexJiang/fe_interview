/**
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

// 解法一：暴力解法
function twoSum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
let demo = [2, 7, 11, 15];
// console.log('res=',  twoSum1(demo, 9))

// 解法二：哈希表
function twoSum2(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const diff= target - nums[i];
        if(map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
}

console.log('res=',  twoSum2(demo, 9))
