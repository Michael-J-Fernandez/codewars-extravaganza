// ----- Sum of Positive -----
console.log("Sum of Positive");
console.log("\n");


function positiveSum(arr) {

    if (arr === ""){
      return 0;
    }
  
    sum = 0;
  
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}




// ----- Remove First and Last Character -----
console.log("Remove First and Last Character");
console.log("\n");


function removeChar(str){
    
    let newStr = "";

    for (i = 1; i < str.length - 1; i++){
        newStr += str[i];
    } 
    return newStr;
}




// ----- Beginner Series #3 Sum of Numbers -----
console.log("Beginner Series #3 Sum of Numbers");
console.log("\n");


function getSum( a,b ){
  
    let sum = 0;
    
    if (a >= b){
        for (i = b; i <= a; i++){
        sum += i;
    }
}
    if (a < b){
        for (i = a; i <= b; i++){
        sum += i;
    }
}
    return sum;
}




// ----- Square Every Digit -----
console.log("Square Every Digit");
console.log("\n");


function squareDigits(num) {
    
    num = String(num)
    numSqr = "";

    for (i = 0; i < num.length; i++){
        numSqr += num[i] ** 2;
        console.log(numSqr);
    }
    return Number(numSqr);
}




// ----- Mumbling -----
console.log("Mumbling");
console.log("\n");
Mumbling

function accum(s) {
    sU = s.toUpperCase();
    sL = s.toLowerCase();
    newS = "";
    i1 = 0;
    
    while (i1 < s.length) {
        newS += sU[i1];
        
        i2 = 0;
        while (i2 < i1) {
            newS += sL[i1];
            i2++;
        }
        i1++

        if (i1 !== s.length) {
            newS += "-";
        }
    }
    return newS;
}