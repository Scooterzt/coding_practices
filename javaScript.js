
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
// }
// console.log(repeatStr(a,b));

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

function minTimeToVisitAllPoints(points){
    let count = 0;
    for(let i=0; i<points.length; i++){
        count += steps(points[i], points[i+1]);
    }
    return count;
}
function steps(x,y){
    let temp = Math.max( Math.abs(x[0] - y[0]), Math.abs(x[1] - y[1]) );
    console.log("steps: " + temp); 
    return temp;
}
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));