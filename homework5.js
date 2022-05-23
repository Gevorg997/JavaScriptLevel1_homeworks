// 1. Create a function that builds a tree.

const treeNodes = [
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3,]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []},
]

function buildTree (arr,  root = 'root'){
    
    const tree = {}
    const nodes = arr.filter(el => el.id === root)

   if(!nodes.length){
       return {}
   }
    
    tree[root] = {}
    
    nodes[0].children.forEach(child => {
    tree[root][child] = buildTree(arr,child) 
    })
      
return  root === 'root' ?  tree :  tree[root]

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

// 3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.


function delayDecorator(fn,ms){

    function delayedFn(...args) {
        return setTimeout(fn,ms,...args)
    }
    return delayedFn
}


// 4.   Implement Debounce decorator

function debounce(fn , ms) {

    let arr = []

    function newFn(...args){
        
       let callTime = Date.now()
        
       arr.unshift(callTime) 
      
       return callChecker(callTime)
        
      function callChecker(cT){
         
          if(Date.now() - cT >= ms){
               if(cT === arr[0]){
                   return fn(...args)
               } else {
                  return
               }
          } 
          return setTimeout(callChecker, ms/10 , cT)
      }
      
    }
    
    return newFn
}
