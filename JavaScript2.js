// function maxChar(str) {
//     let chars = {};
//     let max = 0;
//     let maxChar = '';
//     for(let i=0;i<str.length;i++){
//         if(!chars[str[i]]){
//             chars[str[i]] = 1;}
//         else{
//             chars[str[i]]++;}}
//     for(let val in chars){
//         if(chars[val] > max){
//             max = chars[val];
//             maxChar = val;}}
//     return maxChar;
// }
// function palindrome(str) {
//     let len = Math.floor(str.length/2);
//     for(let i=0; i<len;i++){
//         if(str[i] !== str[str.length-1-i]){
//             return false;}}
//     return true;}
// function reverseInt(n) {
//     let num = n.toString();
//     let newN=''; 
//     for (let i=num.length-1; i>=0;i--){
//         newN += num[i];}
//     if(n<0){
//         return parseInt(newN) * -1;}
//     return parseInt(newN);}
// function anagrams(stringA, stringB) {
//     return string_to_object(stringA) === string_to_object (stringB);
// }
// //helper function so we don't have to write 2 times the same for loop.
// function string_to_object(str){
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }
// function anagrams(stringA, stringB) {
//     let strA = string_to_object(stringA);
//     let strB = string_to_object(stringB);
//     if(Object.keys(strA).length !== Object.keys(strB).length){
//         return false;}
//     for(let char in strA){
//         if(strA[char] !== strB[char]){
//             return false;}}
//     return true;}
// //helper function so we don't have to write 2 times the same for loop.
// function string_to_object(str){
//     let tempStr = str.replace(/[^\w]/g, "").toLowerCase();
//     let tempObject = {};
//     for(let i=0; i<tempStr.length; i++){
//         if(!tempObject[tempStr[i]]){
//             tempObject[tempStr[i]] = 1;}
//         else{
//             tempObject[tempStr[i]]++;}}
//     return tempObject;}

//     var numJewelsInStones = function(J, S) {
//         let counter = 0;
//         for(let x=0; x<J.length; x++){
//             for(let i=0; i<S.length; i++){
//                 if(J[x] == S[i]){
//                     counter++;
//                     }
//             }
//         }
//         return counter;
//     };
// //find duplictate without creating another datasctructure
//     var findDuplicates = function(nums) {
//         let result = [];
//         for(var value of nums){
//             let lookUpIndex = Math.abs(value)-1;  
//             if(nums[lookUpIndex] < 0){
//                 result.push(Math.abs(value));
//             }
//             else {
//                 nums[lookUpIndex] *= -1;
//             }
//         }
//         return result; 
//     };
// reverse string with extra spaces
// var reverseWords = function(s) {
//     let temp = s.replace(/\s+/g, " ").trim();
//     console.log("space removed: " + temp);
//     let tempString = temp.split(" ").reverse().join(" ");
//     console.log("tempString: " + tempString);

//     return tempString;

// };
// console.log("return: " + reverseWords("  hello world!  "));
// function pickingNumbers(a) {
//     let sortArr = a.sort((a,b)=> b-a);
//     console.log("sorted arr: " + sortArr);
//     let max = 0;
//     let tempArr = [];
//     for(let i=0; i<sortArr.length-1; i++){
//         tempArr.push(sortArr[i]);
//         for(let j=i+1; j<sortArr.length; j++){
//             if( (Math.abs(sortArr[i]-sortArr[j])) <=1){
//                 tempArr.push(sortArr[j]);
//                 if(tempArr.length > max){
//                     max = tempArr.length;
//                 }
//             }
//         }
//         tempArr = [];
//     }
//     return max;
// }
// console.log(pickingNumbers([4,6,5,3,3,1]));

// let coins = [2];
// let am = 23;
// function coinsQueston1(coinArr, amount){
//     let sortedCoins = coinArr.sort((a,b)=> b-a);
//     let cointCount = 0; coins = 0;
//     for(let i=0; i<sortedCoins.length; i++){
//         if(Math.floor(amount/sortedCoins[i]) >=1 && amount > 0){
//             coins += Math.floor(amount/sortedCoins[i]);
//             if(coins > 1){
//                 amount -= sortedCoins[i]*coins;
//                 cointCount += coins;
//             }
//             else{
//                 amount -= sortedCoins[i];
//                 cointCount++;
//             }
//             coins = 0;
//         }
//     }
//     if(amount !== 0){
//         return -1;
//     }
//     return cointCount;
// }
// console.log("coins needet: " + coinsQueston1(coins, am));

// function abcQuestion3 (arrInt){
//     let newSet = new Set();
//     let arr = arrInt.sort();
//     for(let i=0; i<arr.length-2;i++){
//         if(i === 0 || (i>0 && arr[i] !== arr[i-1])){
//         for(let j=i+1; j<arr.length-1; j++){
//             for(let x = j+1; x<arr.length; x++){
//                 if(arr[i]+arr[j]+arr[x] === 0){
//                     newSet.add([arr[i],arr[j],arr[x]].sort());
//                 }
//             }
//         }
//     }
// }
//     return newSet;
// }
// console.log(abcQuestion3([-1,0,1,2,-1,-4]));

// function findTwoSum(arrInt, sum){
//     let result = [];
//     for(let i=0; i<arrInt.length-1; i++){
//         for(let j=i+1; j<arrInt.length;j++){
//             if((arrInt[i] + arrInt[j]) === sum){
//                 result.push(i);
//                 result.push(j);
//             }
//         }
//     }
//     return result;
// }
// console.log(findTwoSum([2,5,3,6,12], 15));

// function isPolindrome(str){
//     str = str.toLowerCase();
//     for(let i=0; i< str.length/2; i++){
//         if(str[i] != str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }

// 

// function permutationOfAString(str){
//     let resultArr = [];
//     if (str.length == 1) return [str];
//     if (str.length == 2) return [str, str[1] + str[0]];
//     for(let i=0; i<str.length; i++){
//         let oneChar = str[i];
//         if(str.indexOf(oneChar) !== i) continue;
//         var remainStr = str.slice(0, i) + str.slice(i+1, str.length);
//         for(let subPerm of permutationOfAString(remainStr)){
//             resultArr.push(oneChar+subPerm);
//         }
//     }
//     return resultArr;
// }
// console.log(permutationOfAString("abcd"));
// function segregate0s (arr){
//     let resultArr = [];
//     for(let i=0;i<arr.length; i++){
//         if(arr[i] === 0){
//             resultArr.unshift(arr[i]);
//         }
//         else{
//             resultArr.push(arr[i]);
//         }
//     }
//     return resultArr;
// }
// console.log(segregate0s([0,0,1,1,0,1,0,1,0,1,1,1,1,]));

// function findApair(arr, n){
//     let resultArr = [];
//     arr = arr.sort((a,b) => b-a);
//     console.log(arr);
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] - arr[j] === n){
//                 resultArr.push(arr[i]);
//                 resultArr.push(arr[j]);
//             }
//         }
//     }
//     return resultArr;
// }
// console.log(findApair([9,29,10,2,50,24,100],50));

// function maximumConsecitive(str){
//     let result = "";
//     let max = 0;
//     let count = 1;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === str[i+1]){
//             count++;
//         }
//         else{
//             if(count>max){
//                 max = count;
//                 result = str[i];
//             }
//             count = 1;
//         }
//     }
//     return result;
// }
// console.log(maximumConsecitive("aabbbxxxxssss"));

// function plusMinus(arr) {
//     let negative = 0;
//     let zero = 0;
//     let positive = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > 0){
//             positive++;
//         }
//         else if(arr[i] < 0){
//             negative++;
//         }
//         else{
//             zero++;
//         }
//     }
//     console.log((positive/arr.length).toFixed(6));
//     console.log((negative/arr.length).toFixed(6));
//     console.log((zero/arr.length).toFixed(6));
//     }
    
// console.log(plusMinus([-1,0,1,1,1,-1]));

// function staircase(n) {
//     for(let i=1; i<n; i++){
//         console.log("#".repeat(i).padStart(n));
//     }
// }
// console.log(staircase(6));

function miniMaxSum(arr) {
    const sortUp = arr.sort();
    let resultSmall = 0;
    let resultBig = 0;
    for(let i=0, j=arr.length-4; j<arr.length, i<4; i++,j++){
        resultSmall += sortUp[i];
        resultBig += sortUp[j];
    }
    console.log(resultSmall, resultBig);
    }
console.log(miniMaxSum([1,2,4,3,5]));