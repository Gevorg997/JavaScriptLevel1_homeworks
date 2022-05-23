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
