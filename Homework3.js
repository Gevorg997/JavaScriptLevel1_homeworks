//1. Given an array. Write a recursive function that removes the first element and returns the given
//array. (without using arr.unshift(),assign second element to first, third element to second...)

function fn(arr,i = 0){
  if(arr.length < 2){
      return []
  }
  arr[i] = arr[i+1]

  if(i !== arr.length - 2){
      return fn(arr,i + 1)
    }  else {
        arr.pop()
        return arr
    }
}
