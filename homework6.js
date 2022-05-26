//1. Get array of node ids from tree (keys).

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
function findNodes(tree,arr = []){
    for(let node in tree){
        arr.push(node)
        findNodes(tree[node],arr)
    }
    return arr
}

