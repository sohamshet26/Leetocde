//issue Link:https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/
function canChoose(groups, nums) {
    var pointer = 0;
    var grp_pointer = groups[pointer][0];
    var bound = -1;
    for (var i = 0; i < nums.length; i++) {
        if (pointer <= groups.length - 1) {
            if (grp_pointer === nums[i]) {
                if (groups[pointer].join("") === (nums.slice(i, groups[pointer].length + i)).join("")) {
                    if (bound < i) {
                        bound = i + groups[pointer].length - 1;
                        pointer++;
                        if (pointer <= groups.length - 1) {
                            grp_pointer = groups[pointer][0];
                        }
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    }
    if (pointer > groups.length - 1) {
        return true;
    }
    return false;
}
;
console.log(canChoose([[10, -2], [1, 2, 3, 4]], [1, 2, 3, 4, 10, -2]));
