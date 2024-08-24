// const str = 'Master'

// function reverseWord(word) {
//     // const reversed = str.split('').reverse().join('');
//     // return reversed;

//     const str = word.toLowerCase()
//     let array = []
//     for(let i=str.length-1; i>=0; i--) {
//         array.push(str[i])
//     }
//     if(str === array.join('')) {
//         return 'str is a palindrome'
//     } else {
//         return 'str is not a palindrome'
//     }
// }

// const result = reverseWord(str)
// console.log(result);

// Map the data 

const array = [4,5,9,8,7,3,4,9];

// function mapData(arr) {
//     // return arr.map((data) => data *2)
//     let map = []
//     for(let i=0; i<arr.length; i++) {
//         map.push(arr[i]*2)
//     }
//     return map
// }

// const result = mapData(array)
// console.log(result)

// Filter the data

// function filterData(arr) {
//     // return arr.filter((data) => data%2 ===0)
//     let filterArray = []
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]%2 === 0) {
//             filterArray.push(arr[i])
//         }
//     }
//     return filterArray
// }

// const result = filterData(array)
// console.log(result)

// add all elements in an array

// function addArray(arr) {
//     // return arr.reduce((acc, num) => acc+num, 0)
//     let output = 0;
//     for(let i=0; i<arr.length; i++) {
//         output += arr[i]
//     }
//     return output
// }

// const result = addArray(array)
// console.log(result)

// Join two array 

const array1 = [49,73,94]
const array2 = [94,37,92]
// function joinArr(arr1, arr2) {
//     // return arr1.concat(arr2)
//     let combinedArray = []
//     for(let i=0; i<arr1.length; i++) {
//         combinedArray.push(arr1[i])
//     }
//     for(let i=0; i<arr2.length; i++) {
//         combinedArray.push(arr2[i])
//     }
//     return combinedArray
// }

// const result = joinArr(array1, array2)
// console.log(result)

const array3 = [49,73,94]
const array4 = [22,44,49]

    // function joinSeperate(arr1, arr2) {

    // Way b to solve 

    // const combinedArray = arr1.concat(arr2)
    // const uniqueArray = combinedArray.reduce((acc, item) => {
    //     if(!acc.includes(item)){
    //         acc.push(item)
    //     }
    //     return acc;
    // },[])
    // const sortedArray = uniqueArray((a,b) => b-a)
    // return sortedArray

    // Way c to solve
    // const combinedArray = arr1.concat(arr2)
    // return combinedArray.filter((data, index) => combinedArray.indexOf(data) === index)

    // Way d to solve
    // const combinedArray = arr1.concat(arr2)
    // const sortedArray = [...new Set(combinedArray)]
    // return sortedArray

    // Way e to solve
    // let combinedArray = []
    // for(let i=0; i<arr1.length; i++) {
    //     combinedArray.push(arr1[i])
    // }

    // for(let i=0; i<arr2.length; i++) {
    //     if(!arr1.includes(arr2[i])) {
    //         combinedArray.push(arr2[i])
    //     }
    // }

    // return combinedArray
    // }

// const result = joinSeperate(array3, array4)

// console.log(result)

// move three elements from an array

const array5 = [47,94,72,98,75];

// function moveElement(arr) {
//     // const cut = arr.splice(0,2)
//     // return arr.push(...cut)
//     let cut = [];
//     for(let i=0; i<2; i++) {
//         cut.push(arr.shift())
//     }
//     return cut
// }

// const result1 = moveElement(array5)
// console.log(result1)

// const result = moveElement(array5)
// console.log(result);
// console.log(array5);

// create a counter

let init = 5
let limit = 10
function Counter(init, limit) {
    for(let i=init; i<limit; i++) {
        init++
    }
    return init
}

const result = Counter(init, limit)
console.log("hi", result)