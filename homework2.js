//1. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.

function findViolatingIndex (arr){
    let wrongNum = arr.find(function (el, i , ar){
                if(ar[i] < ar[i-1]){
                 return true
                }
              })
    return arr.indexOf(wrongNum)
}

//2. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array

function elSum (arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){       
        sum += arr[i]
    }
    return sum
}

function arrSum(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
    result.push(elSum(arr[i]))
    }
    return result
} 

//3. Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length

function arrOddMulti(arr){
    let newArr = arr.filter(function (el, i, ar){
                            if(Math.abs(el % 2) === 1 ){
                                return true
                            }
                           })
    return newArr.map(function (el, i, ar){
        return el * newArr.length
    })
  }

//4. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
//return the result.

function digitsSum(num){
let sum = 0

while(num){
    sum += num % 10
    num = Math.trunc(num/10)
}
    
if(sum !== sum % 10){
    sum = digitsSum(sum)
}
    return sum
}

// or without recursive function

function digitsSum (num){
let sum = 0
while(num){
    sum += num % 10
    num = Math.trunc(num/10)
    }
    return sum
}
function oneDigitSum (number){
let sum2 = digitsSum(number)
while(sum2 % 10 !== sum2){
    sum2 = digitsSum(sum2)
}
    return sum2
}


//5. Write a recursive function which receives  a number as arguments and returns the
//fibonacci sequence as array.

function fibSeq(num){

switch(num) {
       case 0: return [];
       case 1: return [1];
       case 2: return [1,1]
        }

let arr = fibSeq(num - 1)
arr.push(arr[num-3] + arr[num-2])
    return arr
}
