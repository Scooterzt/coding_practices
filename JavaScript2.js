function maxChar(str) {
    let chars = {};
    let max = 0;
    let maxChar = '';
    for(let i=0;i<str.length;i++){
        if(!chars[str[i]]){
            chars[str[i]] = 1;}
        else{
            chars[str[i]]++;}}
    for(let val in chars){
        if(chars[val] > max){
            max = chars[val];
            maxChar = val;}}
    return maxChar;
}
function palindrome(str) {
    let len = Math.floor(str.length/2);
    for(let i=0; i<len;i++){
        if(str[i] !== str[str.length-1-i]){
            return false;}}
    return true;}
function reverseInt(n) {
    let num = n.toString();
    let newN=''; 
    for (let i=num.length-1; i>=0;i--){
        newN += num[i];}
    if(n<0){
        return parseInt(newN) * -1;}
    return parseInt(newN);}
function anagrams(stringA, stringB) {
    return string_to_object(stringA) === string_to_object (stringB);
}
//helper function so we don't have to write 2 times the same for loop.
function string_to_object(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
function anagrams(stringA, stringB) {
    let strA = string_to_object(stringA);
    let strB = string_to_object(stringB);
    if(Object.keys(strA).length !== Object.keys(strB).length){
        return false;}
    for(let char in strA){
        if(strA[char] !== strB[char]){
            return false;}}
    return true;}
//helper function so we don't have to write 2 times the same for loop.
function string_to_object(str){
    let tempStr = str.replace(/[^\w]/g, "").toLowerCase();
    let tempObject = {};
    for(let i=0; i<tempStr.length; i++){
        if(!tempObject[tempStr[i]]){
            tempObject[tempStr[i]] = 1;}
        else{
            tempObject[tempStr[i]]++;}}
    return tempObject;}

    var numJewelsInStones = function(J, S) {
        let counter = 0;
        for(let x=0; x<J.length; x++){
            for(let i=0; i<S.length; i++){
                if(J[x] == S[i]){
                    counter++;
                    }
            }
        }
        return counter;
    };
//find duplictate without creating another datasctructure
    var findDuplicates = function(nums) {
        let result = [];
        for(var value of nums){
            let lookUpIndex = Math.abs(value)-1;  
            if(nums[lookUpIndex] < 0){
                result.push(Math.abs(value));
            }
            else {
                nums[lookUpIndex] *= -1;
            }
        }
        return result; 
    };