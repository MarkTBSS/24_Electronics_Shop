function getMoneySpent(keyboards, drives, b) {
    var keyboards = keyboards.sort((x, y) => y - x).filter((x) => x < b);
    var drives = drives.sort((x, y) => y - x).filter((x) => x < b);
    console.log(keyboards)
    console.log(drives)
    var maxSum = -1
    for (var i = 0; i < keyboards.length; i++) {
        for (var j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > maxSum) {
                maxSum = keyboards[i] + drives[j];
            }
        }
    }

    return maxSum;
}

var b = 10
var keyboards = [ 8, 7, 3 ]
var drives = [ 8, 7, 1 ]
  
console.log(getMoneySpent(keyboards, drives, b))