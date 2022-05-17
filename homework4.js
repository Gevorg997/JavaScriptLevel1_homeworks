//1.  Create a function that builds a tree like object given an array with object which contains parent and id properties.
function fn(arr) {
  arr.sort((a,b) => a.id - b.id)
  for(let el of arr){
    if(el.parent === null){
       var root = el.id
       break 
    }
  }
  var tree =  {}
  tree[root] = {}
  
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
           
            if(arr[i].parent == root){
             
               tree[root][arr[i].id] = {}
                
            } else if (arr[i].parent == arr[j].id){
             
                if(tree[root].hasOwnProperty([arr[j].id])){
                 
                    tree[root][arr[j].id][arr[i].id] = {}
    
                } else {
                    for(let key in tree[root]){
                     
                        if(tree[root][key].hasOwnProperty([arr[j].id])){
                         
                            tree[root][key][arr[j].id][arr[i].id] = {}
                            break
                        }
                    }
                }       
            }   
        }
    }
    return tree
}


//2.   Write a JavaScript function to get all possible subsets of given length of the given array.
//Assume that all elements in the array are unique.

function allSubsets(arr , n , newArr = [] , i = arr.length-1){
    for (i; i >= 0; i--) {
        let array = [...arr]
        array.splice(i,1)
        if(array.length === n){
            newArr.push(array)
        } else {
            allSubsets(array,n,newArr,i-1)
        }
   } 
    return newArr
}



//3.   Write a recursive function to determine whether all digits of the number are odd or not.
function areOdds(num){
    if(num % 2 === 0){
        return false
    }
    num = Math.trunc(num/10)

    if(num){
        return areOdds(num)
    }
    return true
}


//4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

function minPos(arr){
    let min = Infinity

    if(arr[0] >= 0){
        min = Math.min(min, arr[0])
    }
    arr.shift()
    if(arr.length){
        return minPos(arr)
    }
    if(min === Infinity){
        return -1
    }
    return min
}

// or without recursion 

function minPos(arr){
    let newArr = arr.filter(el => el>=0)
    if(!newArr.length){
        return -1
    }
    return Math.min(...newArr)
}
