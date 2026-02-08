function isTrionic(nums: number[]): boolean {
    function upwardTrend(arr: number[], start: number, end: number): boolean {
        for (let i = start; i < end; i++) {
            if (arr[i] >= nums[i+1]) return false;
        };
        return true;
    };

    function downwardTrend(arr: number[], start: number, end: number): boolean {
        for (let j = start; j < end; j++) {
            if (arr[j] <= arr[j+1]) return false;
        };
        return true;
    };
    
    const n: number = nums.length;
    for (let p = 1; p < n-2; p++) {
        for (let q = p +1; q < n-1; q++){
            if (upwardTrend(nums, 0, p) && downwardTrend(nums, p, q) && upwardTrend(nums, q, n-1)) return true;
        }
    }
    return false;
};