"use script";
/*Homework 1
Дан масив чисел (положительных, отрицательных и в перемешку)
Найти max, min, sum
Залить на github решение
Нельзя использовать методы массива, а только циклы for, while*
Примеры массивов:
[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
[-1,-8,-2]
[1,7,3]
[1,undefined,3,5,-3]
[1,NaN,3,5,-3]
[-5,5,true,null]
*/



//  Найти sum
let num = [-5,5,true,null];
let sum = 0; 
for (var i = 0, len = num.length; i < len; i++) {
    
    if ( typeof num[i] === 'number' ) {
        sum += num[i]; 
    }
}
console.log( sum ); 


//Найти max
let maxSum = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
    for (let i = 0; i < maxSum.length; i++) {
        if(maxSum[i] > maxSum[0]){
            maxSum[0] = maxSum[i];
    }
}
console.log(maxSum[0]);


//Найти min
let minSum = [1,undefined,3,5,-3];
    for (let i = 0; i < minSum.length; i++) {
        if(minSum[i] < minSum[0]){
            minSum[0] = minSum[i];
    }
}
console.log(minSum[0]);





