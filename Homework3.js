//1. Given an array. Write a recursive function that removes the first element and returns the given
//array. (without using arr.unshift(),assign second element to first, third element to second...)

function fn(arr,i = 0){
  if(arr.length < 2){
      return []
  }
  arr[i] = arr[i+1]

  if(i !== arr.length - 2){
      return fn(arr,i + 1)
    }  
  
  arr.pop()
  return arr
    
}


//2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
//that concats arrays).

function flatten(arr) {
  let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr = newArr.concat(arr[i])
        }
    }
    return newArr
}


//3.	 Given an array and a number N.  Write a recursive function that rotates an array N places to the left.
// (Hint: to add element to the beginning use arr.unshift())

function rotArr(arr,n, i = 0){
    
  if(i < n){
        arr.push(arr[i])
        return fn(arr,n,i+1)
    }

  for (let j = 0; j < n; j++) {
    arr.shift()  
  }
    return arr
}


//4. 	Given the list of the following readers:
//Output the books sorted by the percent in descending order which readStatus is true.
// [
//	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
//	{ book: "Animal Farm", readStatus: true, percent: 20},
//	{ book: "Solaris", readStatus: false, percent: 90 },
//	{ book: "The Fall", readStatus: true, percent: 50 },
//	{ book: "White Nights", readStatus: false, percent: 60 } ,
//	{ book: "After Dark", readStatus: true, percent: 70 }
];

function sortedList(list) {
   return   list
                .filter(el => el.readStatus)
                .sort((a,b) => b.percent - a.percent)
}


//5.	Implement “map” method for plain objects (same as Array map method.)

function objMap(cbFn){
  let newObj = {}
 
  for(let key in this){
    newObj[key] =  cbFn(this[key], key, this)
  }
  return newObj
}







