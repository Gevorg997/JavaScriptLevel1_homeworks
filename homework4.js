//2.
function copy(ar){
    let arr = []
    for(let el of ar){
        arr.push(el)
    }
    return arr
}

function subs(arr){

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let arr2 = copy(arr)
        arr2.splice(i,1)
        for (let j = i; j < arr.length - 1; j++) {
            let arr1 = copy(arr2)
            arr1.splice(j,1)
            newArr.push(arr1)
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
