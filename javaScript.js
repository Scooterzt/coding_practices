
// let testarr = [[11,2,4],
// [4,5,6],
// [10,8,-12]];

// let testarr2 = [[6,6,7,-10,9,-3,8,9,-1], 
//  [9,7,-10,6,4,1,6,1,1],
//  [-1,-2,4,-6,1,-4,-6,3,9],
//  [-8,7,6,-1,-6,-6,6,-7,2],
//  [-10,-4,9,1,-7,8,-5,3,-5],
//  [-8,-3,-4,2,-3,7,-5,1,-5],
//  [-2,-7,-4,8,3,-1,8,2,3],
//  [-3,4,6,-7,-7,-8,-3,9,-6],
//  [-2,0,5,4,4,4,-3,3,0]];


// function diagonalDifference(arr) {
// let firstLineSum = 0;
// let secondLineSum = 0;
// for(let i=0; i<arr.length; i++){
// firstLineSum = firstLineSum + arr[i][i];
// }
// for(let j=0; j<arr.length; j++){
// secondLineSum = secondLineSum + arr[j][arr.length-1-j];
// }
// return Math.abs(secondLineSum - firstLineSum);
// }
// console.log(diagonalDifference(testarr));
// console.log(diagonalDifference(testarr2));
// function minimumBribes(lineArr) {
//     let bribes = 0;
    
//     const currentIndexes = lineArr.map((num, ind) => ind);

//     const initialIndexes = lineArr.map((num) => num - 1);

//     const combined = currentIndexes.map((num, ind) => [num, initialIndexes[ind]]);

//     for (const e of combined) {
//         const initInd = e[0];
//         const currentInd = e[1];

//         if (initInd > currentInd) {
//             continue;
//         }

//         const diff = currentInd - initInd;
//         if (diff > 2) {
//             return "Too chaotic";
//         }

//         bribes += diff;
//     }

//     return bribes;
// }

// function minimumBribes2(lineArr) {
//     let bribes = 0;

//     let isSorted = false;

//     const maybeSorted = lineArr;
//     const no = "Too chaotic";

//     while (!isSorted) {
//         isSorted = true;

//         console.log("================");
//         for (let i = 0; i < maybeSorted.length; i++) {
//             console.log(maybeSorted);
//             console.log(i);
//             console.log(maybeSorted[i]);
//             console.log(maybeSorted[i] - 3);
//             if (i < maybeSorted[i] - 3) {
//                 return no;
//             }

//             if (i < maybeSorted.length - 1 && maybeSorted[i] > maybeSorted[i + 1]) {
//                 console.log("here");
//                 bribes += 1;
//                 temp = maybeSorted[i];
//                 maybeSorted[i] = maybeSorted[i + 1];
//                 maybeSorted[i + 1] = temp;

//                 continue;
//             }

//             if (i + 1 != maybeSorted[i]) {
//                 isSorted = false;
//             }
//         }
//         console.log("================");
//     }

//     return bribes;
// }

// const arri = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr = [1, 2, 5, 3, 7, 8, 6, 4];
// const arr1 = [2, 5, 1, 3, 4];
// const arr11 = [2, 1, 5, 3, 4];
// const arr2 = [2, 1];
// const arr3 = [1, 2];
// const arr4 = [];

// const a = minimumBribes2(arr2);

// console.log(a);
// let arr1 = [1,2,3,0,0,0];
// let arr2 = [2,5,6];
// var merge = function(nums1, m, nums2, n) {
//     let newArr = [];
//     let idx1 = 0;
//     let idx2 = 0;
//     for(i=0;i<(m+n);i++){
//         if(nums1[idx1] < nums2[idx2] && nums1[idx1]>0){
//             newArr[i] = nums1[idx1];
//             idx1++;
//         }else{
//             newArr[i] = nums2[idx2];
//             idx2++;
//         }
//     }
//     return newArr;
// };
// console.log(merge(arr1,3,arr2,3));

// function repeatedString(s, n) {
//     var result = 0;
//     let newStr = "";
//     let leftover = "";
//     let finalStr = "";
//     if(!s.includes("a")){
//         return 0;
//     }
//     if(s.length<n){
//         newStr = s.repeat(Math.floor(n/s.length));
//         leftover = s.slice(0,(n%s.length));
//         finalStr = newStr.concat(leftover);
//     }
//     else{
//         finalStr = s.repeat(n);
//     }
//     for(let i=0; i<finalStr.length; i++){
//         if(finalStr[i] == "a"){
//             result++;
//         }
//     }
//     return result;
// }
// console.log(repeatedString("xxx", 97));

// let a = "abcd";
// let b = "cdabcdab";

// function repeatStr(strA, strB){
//     let tempStr = "";
//     let times = Math.ceil(strB.length/strA.length);
//     tempStr = strA.repeat(times);
//     if(tempStr.includes(strB)){
//         return times;
//     }
//     tempStr += strA;
//     if(tempStr.includes(strB)){
//         return times+=1;
//     }
//     return -1;
//}
//console.log(repeatStr(a,b));

// function bonAppetit(bill, itemNotEat, totalCharge) {
//     let expectedCharge = 0;
//     for(let i=0; i<bill.length; i++){
//         if(i != itemNotEat){
//             expectedCharge += bill[i];
//         }
//     }
//     expectedCharge = expectedCharge/2;
//     if((expectedCharge) == totalCharge){
//         return "Bon Appetit";
//     }
//     else{
//         return totalCharge-expectedCharge;
//     }
// }
// console.log(bonAppetit([3,10,2,9],1,7));
// function pageCount(n, p) {
//     let result = 0;
//     if(n%2==0 && (n-p) == 1){
//         return 1;
//     }
//     if(p > Math.floor(n/2)){
//         for(let i=n-1; i>p;i-=2){
//             result++;
//         }
//     }
//     else{
//         for(let j=1; j<p; j+=2){
//             result++;
//         }
//     }
//     return result;
// }
// console.log(pageCount(17,5));
// function pageCount2(n,p){
//     const pageTurns = Math.floor(p/2);
//     const totalTurns = Math.floor(n/2);
//     return Math.min(pageTurns, totalTurns-pageTurns);
// }
// console.log(pageCount2(2,1));

// function minTimeToVisitAllPoints(points){
//     let count = 0;
//     for(let i=0; i<points.length; i++){
//         count += steps(points[i], points[i+1]);
//     }
//     return count;
// }
// function steps(x,y){
//     let temp = Math.max( Math.abs(x[0] - y[0]), Math.abs(x[1] - y[1]) );
//     console.log("steps: " + temp); 
//     return temp;
// }
// console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));

// console.log("a".charCodeAt(0));

// var singleNumber = function(nums) {
//     let result = Array.from(new Set(nums));
//     return result;
// };
// console.log(singleNumber([2,2,1]));

// var singleNumber = function(nums) {
//     for(let i=0; i<nums.length; i++){
//         let temp = nums.pop();
//         if(nums.includes(temp)){
//             nums.unshift(temp);
//             continue;
//         }
//         return temp;
//     }
// };


// var singleNumber = function(nums) {
//     let sortArr = nums.sort();
//     let setArr = [... new Set(sortArr)];
//     console.log(setArr);
//     for(let i=0; i<sortArr.length; i++){
//         if(sortArr[i] != setArr[i]){
//             return sortArr[i];
//         }
//     }
// };
// console.log(singleNumber([4,1,2,1,2]));
// let zeroArr = [0,1,0,3,12];
// var moveZeroes = function(nums) {
//     let tempArr = [];
//     for(let i=0; i< nums.length; i++){
//         if(nums[i] != 0){
//             tempArr.push(nums[i]);
//         }
//     }
//     for(let j=tempArr.length; j<nums.length; j++){
//         tempArr[j] = 0;
//     }
//     return tempArr;
// };
// console.log(moveZeroes(zeroArr));
// var moveZeroes2 = function(nums) {
//     let nonZeroIndex = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] != 0){
//             nums[nonZeroIndex++] = nums[i];
//         }
//     }
//     for(let j=nonZeroIndex; j<nums.length; j++){
//         nums[j] = 0;
//     }
//     return nums;
// };
// console.log(moveZeroes2(zeroArr));

// function migratoryBirds(arr) {
//     let result = {};
//     for(let i=0; i<arr.length; i++){
//         if(!result[arr[i]]){
//             result[arr[i]] = 1;
//         }
//         else{
//             result[arr[i]]++;
//         }
//     }
//     let max = 0;
//     console.log(result);
//     for(let j in result){
//         if(result[j] > max){
//             max = j;
//         }
//         console.log(result[j]);
//     }
//     return max;
// }
// let bird = [1,4,4,4,5,3];
// console.log(migratoryBirds(bird));
// var maximum69Number  = function(num) {
//     let tempNum = num.toString().split("");
//     console.log(tempNum);
//     for(let i=0; i<tempNum.length; i++){
//         console.log(tempNum[i]);
//         if(tempNum[i] == 6){
//             tempNum[i] = "9";
//             break;
//         }
//     }
//     let newNum = parseInt(tempNum.join(''));
//     return newNum;
// };
// console.log(maximum69Number(9669));

// var majorityElement = function(nums) {
//     let tempObj = {};
//     for(let i=0; i< nums.length; i++){
//         if(!tempObj[nums[i]]){
//             tempObj[nums[i]] = 1;
//         }
//         else{
//             tempObj[nums[i]]++;
//         }
//     }
//     console.log(tempObj);
//     let majority = Math.max(...Object.values(tempObj));
//     for(var key in tempObj){
//         if(tempObj[key] === majority){
//             return key;
//         }
//     }
//     return false;
// };
// console.log(majorityElement([2,2,1,1,1,2,2]));
// var majorityElement = function(nums) {
//     let tempObj = {};
//     let maxAppear = Math.floor(nums.length/3);
//     let resultArr = [];
//     for(let i=0; i< nums.length; i++){
//         if(!tempObj[nums[i]]){
//             tempObj[nums[i]] = 1;
//         }
//         else{
//             tempObj[nums[i]]++;
//         }
//     }
//     for(var key in tempObj){
//         if(tempObj[key] > maxAppear){
//             resultArr.push(key);
//         }
//     }
//     return resultArr;
// };
// var mergeTwoLists = function(l1, l2) {
//     let newList = [];
//     for(let i=0; i<l1.length; i++){
//         if(l1[i] > l2[i]){
//             newList.push(l2[i]);
//             newList.push(l1[i]);
//         }
//         else{
//             newList.push(l1[i]);
//             newList.push(l2[i]);
//         }
//     }
//     return newList;
// };
// console.log(mergeTwoLists([1,2,4], [1,3,4]));

// var findDisappearedNumbers = function(nums) {
//     let result = [];
//     for(let i=0; i<nums.length; i++){
//         if(!nums.includes(i+1)){
//             result.push(i+1);
//         }
//     }
//     return result;
// };
// var sortPeople = function(a, b) {
//     //Sort people by height as the first priority decreasingly, and by order as the second priority non-decreasingly
//          if(a[0] != b[0]) {
//             return b[0] - a[0];
//          } else {
//             return a[1] - b[1];
//          }
// };
// let arr = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
// var reconstructQueue = function(people) {
//     people.sort(sortPeople);
//     console.log(people[5][1]);
//     var i;
//     var res = [];
//  //Reconstruct queue by inserting people by its k value
//     for(i = 0; i < people.length; i++) {
//         res.splice(people[i][1], 0, people[i]);
//         console.log("res: " + JSON.stringify(res));
//     }
//     return res;
//  };
//  console.log(reconstructQueue(arr));
// console.log(arr.sort((a, b) => a[1] - b[1]));

// var maxProfit = function(prices) {
//     let maxprofit = 0;
//     for(let i=0; i<prices.length-1; i++){
//         for(let j=i+1; j<prices.length; j++){
//             let profit = prices[j] - prices[i];
//             if(profit > maxprofit){
//                 maxprofit = profit;
//             }
//         }
//     }
//     return maxprofit;
// };
// console.log(maxProfit([2,4,1]));

// var maxProfit2 = function(prices) {
//     let minprice = prices[0];
//     let maxprofit = 0;
//     for(let i=0; i<prices.length; i++){
//         if(prices[i] < minprice){
//             minprice = prices[i];
//         }
//         else if( (prices[i] - minprice) > maxprofit ){
//             maxprofit = prices[i] - minprice;
//         }
//     }
//     return maxprofit;
// };
// let arr1 = [1,2,3,4];
// function multiplyArr1 (arr){
//     let tempNum = 1;
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         tempNum *= arr[i];
//     }
//     for(let j=0; j<arr.length; j++){
//         result.push(tempNum/arr[j]);
//     }
//     return result;
// }
// console.log("2n solution:  " + multiplyArr1(arr1));

// function multiplyArr2 (arr){
//     let result = [];
//     let tempMultiSum = 1;
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(i != j){
//                 tempMultiSum *= arr[j];
//             }
//         }
//         result.push(tempMultiSum);
//         tempMultiSum = 1;
//     }
//     return result;
// }
// console.log("nSquared solution: " + multiplyArr2(arr1));

// var replaceElements = function(arr) {
//     let result = [];
//     for(let i=0; i<arr.length-1; i++){
//         console.log(arr.slice(i+1));
//         result.push(Math.max(...arr.slice(i+1)));
//     }
//     result.push(-1);
//     return result;
// };
// console.log(replaceElements([17,18,5,4,6,1]));

// var maxProduct = function(nums) {
//     let max = 0;
//     if(nums.length === 1){
//         return nums[0];
//     }
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length;j++){
//             if((nums[i]*nums[j]) > max){
//                 max = nums[i]*nums[j];
//                 console.log("max: " + max);
//             }
//         }
//     }
//     return max;
// };
// var maxProduct = function(nums) {
//     let max = 0;
//     let tempSum = 1;
//     if(nums.length === 1){
//         return nums[0];
//     }
//     for(let i=0; i<nums.length; i++){
//         tempSum = nums[i] * nums[i+1];
//         console.log("temp: " + tempSum);
//         if(tempSum > max){
//             max = tempSum;
//         }
//         if(isNaN(tempSum)){
//             return nums[i];
//         }
//     }
//     return max;
// };
// console.log(maxProduct([0,2]));
// var climbStairs = function(n) {
//     let arr=[1,2,3];
//     for(let i = 3;i<n;i++){
//         arr[i]=arr[i-1] + arr[i-2];
//     }
//     return arr[n-1];
// };
// console.log(climbStairs(8));
// function birthday(sArr, day, month) {
//     let result = 0;
//     for(let i=0; i<sArr.length; i++){
//         if( (sArr.slice(i,i+month).reduce((a,b) => a+b, 0)) === day){
//             result++;
//         }
//     }
//     return result;
// }
// function divisibleSumPairs(n, k, ar) {
//     let result = 0;
//     for(let i=0; i<ar.length-1; i++){
//         for(let j=i+1; j<ar.length; j++){
//             if( (ar[i]+ar[j]) % k === 0){
//                 result++;
//             }
//         }
//     }
//     return result;
// }
// function migratoryBirds(arr) {
//     let result = {};
//     for(let i=0; i<arr.length; i++){
//         if(!result[arr[i]]){
//             result[arr[i]] = 1;
//         }
//         else{
//             result[arr[i]]++;
//         }
//     }
//     let max = 0;
//     for(let j in result){
//         if(result[j] > max){
//             max = j;
//         }
//     }
//     return max;
// }
// function migratoryBirds(arr) {
//     let typeArr = [0,0,0,0,0];
//     for(let i=0; i<arr.length;i++){
//         if(arr[i] === 1){
//             typeArr[0]++;
//         }
//         else if(arr[i] === 2){
//             typeArr[1]++;
//         }
//         else if(arr[i] === 3){
//             typeArr[2]++;
//         }
//         else if(arr[i] === 4){
//             typeArr[3]++;
//         }
//         else{
//             typeArr[4]++;
//         }
//     }
//     console.log("Type1: " + typeArr);

//     return typeArr.indexOf(Math.max(...typeArr))+1;
// }
// console.log(migratoryBirds([1,4,4,4,5,3]));

// var numberOfSteps  = function(num) {
//     let result = 0;
//     while(num > 0){
//         if(num%2 === 0){
//             num = num/2;
//             result++;
//             console.log("num/2: " + num);
//         }
//         else{
//             num--;
//             result++;
//             console.log("num--: " + num);
//         }
//     }
//     return result;
// };
// console.log(numberOfSteps(14));
// var findAllConcatenatedWordsInADict = function(words) {
//     const set = new Set(words);
    
//     // with curWord, we have split `num` words before it
//     function helper(word, num = 0) {
//       if ("" === word) return num > 1;
      
//       let tmp = "";
//       for (let i = 0; i < word.length; i++) {
//         // build tmp word by appending characters
//         tmp += word[i];
//         if (set.has(tmp)) {
//           const sub = word.substr(i+1);
//           if (helper(sub, num + 1)) {
//             return true;
//           }
//         }
//       }
        
//       return false;
//     }
    
//     return words.filter(w => helper(w));
//   };