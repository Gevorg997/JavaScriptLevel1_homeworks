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
