// find a vowels in a string 

const str = 'aeroplane'

function findVowels(str) {
    const vowels = 'aeiouAEIOU'
    const foundVowels = []

    for(let i=0; i<str.length; i++) {
        if(vowels.includes(str[i])) {
            foundVowels.push(str[i])
        }
    }
    return foundVowels
}

// reverse a string

// const str = 'This is an aeroplane'

// function reverseStr(str) {
//     return str.split(' ').map((data) => data.split('').reverse().join('')).join(' ')
// }

// const result = reverseStr(str)
// console.log(result)

// isPalindrome

// const str = 'rave car'
// function isPalindrome(str) {
//     const noSpace = str.replace(/\s/g, '')
//     const reversedWords = noSpace.split('').reverse().join('')
//     if(noSpace === reversedWords) {
//         return `is a palindrome`
//     } else {
//         return `is not a palindrome`
//     }
// }

// const result = isPalindrome(str)
// console.log(result)

// isAnagram

// const str1 = 'life'
// const str2 = 'file'

// function isAnagram(str1, str2) {
//     const sortedStr1 = str1.split('').sort().join('')
//     const sortedStr2 = str2.split('').sort().join('')
//     if(sortedStr1 === sortedStr2) {
//         return `is a anagram`
//     } else {
//         return `is not a anagram`
//     }
// }

// const result = isAnagram(str1, str2) 
// console.log(result)

// find duplicates

// const array = [32,74,81,74,32]

// function findDuplicate(arr) {
//     const seen = new Set()
//     const duplicate = new Set()

//     for(const item of arr) {
//         if(seen.has(item)) {
//             duplicate.add(item)
//         } else {
//             seen.add(item)
//         }
//     }
//     return {
//         duplicate: [...duplicate],
//         seen: [...seen]
//     }

//     // const duplicate = [...new Set(array)]
//     // return duplicate
// }

// const result = findDuplicate(array)
// console.log(result)

// const array = [45,87,32,74,48,98]

// sort an array

// function sortArray(arr) {
//     // return arr.sort()
//     for(let i=0; i<arr.length; i++) {
//         for(let j=0; j<arr.length-1; j++){
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// const result =sortArray(array)
// console.log(result)


// find a number in an array
// const array = [45,87,32,74,48,98]
// const element = 45

// function findNumber(arr, item) {
//     // return arr.filter((data => data === item))
//     // return arr.find((data) => data === item)
//     // if(arr.includes(item)) {
//     //     return item
//     // } else {
//     //     return `Item is missing`
//     // }

//     // const index = arr.indexOf(item);
//     // if(index !== -1) {
//     //     return arr[index];
//     // } else {
//     //     return 'Element is missing'
//     // }

//     // for(let i=0; i<arr.length; i++) {
//     //     if(arr[i] === item) {
//     //         return arr[i]
//     //     }
//     // }
// }

// const result = findNumber(array,element)
// console.log(result)


// create a function and return a promise

// function sayGreet() {
//     return new Promise((req, res) => {
//         setTimeout(() => {
//             res(`Hello world`)
//         }, 2000)
//     })
// }

// // sayGreet()
// // .then((message) => {
// //     console.log(message)
// // })
// // .catch((err) => {
// //     console.log(err)
// // })

// async function helloGreet() {
// try {
//     const response = await sayGreet()
//     console.log(response)
// } catch(err) {
//     console.log(err)
// }}

// helloGreet()

