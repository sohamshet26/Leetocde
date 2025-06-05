function largestOddNumber(num) {
    for (var i = num.length - 1; i >= 0; i--) {
        var tempnum = num.slice(0, i + 1);
        if (Number(num[i]) % 2 !== 0) {
            return tempnum;
        }
    }
    return "";
}
;
console.log(largestOddNumber("52"));
