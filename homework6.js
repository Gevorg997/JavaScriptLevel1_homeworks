//1-2

var tree = {
    0: {
        1: {
            3: {
                
            },
            4: {
                6: {
                    
                }
            }
        },
        2: {
            5: {
                
            }
        }
    }
}

//1. Get array of node ids from tree (keys).
function findNodes(tree,arr = []){
    for(let node in tree){
        arr.push(node)
        findNodes(tree[node],arr)
    }
    return arr
}

//2. Get array of nodes from tree.

function nodes(tree,arr=[]){
     for(let node in tree){
        arr.push({id:node , children: Object.keys(tree[node])})
        nodes(tree[node],arr)
    }
    return arr
}
