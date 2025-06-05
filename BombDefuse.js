function decrypt(code, k) {
    var ans = [];
    if (k === 0) {
        return new Array(code.length).fill(0);
    }
    else {
        for (var i = 0; i < code.length; i++) {
            var sum = 0;
            var m = void 0;
            if (k > 0) {
                if (i === code.length - 1) {
                    m = 0;
                }
                else {
                    m = i + 1;
                }
                for (var j = 0; j < k; j++) {
                    if (m === code.length - 1) {
                        sum = sum + code[m];
                        m = 0;
                    }
                    else {
                        sum = sum + code[m];
                        m++;
                    }
                }
                ans.push(sum);
            }
            else {
                if (i === 0) {
                    m = code.length - 1;
                }
                else {
                    m = i - 1;
                }
                for (var j = 0; j < Math.abs(k); j++) {
                    if (m === 0) {
                        sum = sum + code[m];
                        m = code.length - 1;
                    }
                    else {
                        sum = sum + code[m];
                        m--;
                    }
                }
                ans.push(sum);
            }
        }
        return ans;
    }
}
;
console.log(decrypt([5, 7, 1, 4], 3));
