// import axios from 'axios';

// // const str = '9747846732';

// // function findNearest(str) {
// //     // convert into array traditional 
// //     // let num = []
// //     // for(let i=0; i<str.length; i++) {
// //     //      num.push(Number(str[i]))
// //     // }
// //     // return num
// //     // sum of an array
// //     // let sum = 0;
// //     // for(let i=0; i<num.length; i++) {
// //     //     sum += num[i]
// //     // }
// //     // return sum

// //     // convert into array modern 
// //     const num = str.split('').map(Number)

// //     // sum of an array
// //     const sum = num.reduce((acc, digit) => acc+digit, 0)

// //     // find average 
// //     const avg = sum/num.length
    
// //     // find round average
// //     const round = Math.round(avg)
    
// //     // find a number in an array
// //     // let same = []
// //     // for(let i=0; i<num.length; i++) {
// //     //     if(num[i] === round) {
// //     //         same.push(i)
// //     //     }
// //     // } 
// //     // return String(same)

// //     // find a number in an array

// //     const sameOne = num.find((digit) => digit === round)
// //     return sameOne
// // }

// // const result = findNearest(str)
// // console.log(result)


// const express = require('express');
// const app = express();

// app.get('/posts', async(req,res) => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     res.json(response.data)
// })

// app.listen(() => {
//     console.log(`Port listening on port ${4001}`)
// })

// isAnagram

const str1 = 'life'
const str2 = 'file'

// function isAnagram(str1, str2) {
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('')
//     if(sortedStr1 === sortedStr2) {
//         return `${str1} and ${str2} is a anagram`
//     } else {
//         return `${str1} and ${str2} is not a anagram`
//     }
// }

function isAnagram(str1, str2) {
    let arr1 = []
    let arr2 = []
    for(let i=0; i<str1.length; i++) {
        arr1.push(str1[i])
    }
    for(let i=0; i<str2.length; i++) {
        arr2.push(str2[i])
    }

    function manualSort(arr) {
        for(let i=0; i<arr.length; i++) {
            for(let j =0 ; j<arr.length-1; j++) {
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
        return arr
    }

    const sortArr1 = manualSort(arr1)
    const sortArr2 = manualSort(arr2)
    console.log(sortArr1)
    console.log(sortArr2)
    // if(sortArr1 === sortArr2) {
    //      return `${str1} and ${str2} is a anagram`
    // } else {
    //     return `${str1} and ${str2} is not a anagram`
    // } 
    for(let i=0; i<arr1.length; i++) {
        if(sortArr1[i] !== sortArr2[i]) {
            return `${str1} and ${str2} are not anagrams`
        } 
    }
    return `${str1} and ${str2} are anagrams`
}

const result = isAnagram(str1, str2)
console.log(result)