// const person = {
//     name: 'Satheesh',
//     age: 29,
//     address: {
//         city: 'chennai',
//         country: 'india'
//     }
// }

// // const shallowCopy = {...person}

// // console.log(shallowCopy)

// // shallowCopy.address.city = 'Madurai'

// // console.log(person)

// const deepCopy = JSON.parse(JSON.stringify(person))

// deepCopy.address.city = 'Madurai'

// console.log(deepCopy)

// console.log(person)

// const str = 'Mom'

// function reverseWord(str) {
// const lowStr = str.replace(/\s/g, '').toLowerCase()
// const reverseWord = lowStr.split('').reverse().join('')
// if(lowStr === reverseWord) {
//     return `${str} is a palindrome`
// } else {
//     return `${str} is not a palindrome`
// }
// }

// const result = reverseWord(str)
// console.log(result)

// const arr1 = [49, 48, 82, 94, 26, 38]
// const arr2 = [48, 32, 75, 98, 74, 32]

// function joinArray(arr1, arr2) {
//     // return arr1.concat(arr2)
//     return [...arr1, ...arr2]
// }

// const result = joinArray(arr1, arr2)
// console.log(result)

// console.log('2' + 1 + 'c')
// console.log('4' + +1 + +'A')

// reverse a each word in sentence

// const sen = "master the blaster"
// function reverseEach(str) {
//     return str.split(' ').map((data) => data.split('').reverse().join('')).join(' ')
// }

// const result = reverseEach(sen)
// console.log(result)

// is anagram

// const str1 = 'file'
// const str2 = 'life'

// function isAnagram(str1, str2) {
//     if(str1.length !== str2.length) {
//         return `str length is not match`
//     }
//     const sortedStr1 = str1.split('').sort().join('')
//     const sortedStr2 = str2.split('').sort().join('')
//     if(sortedStr1 === sortedStr2) {
//         return `is anagram`
//     }
// }

// const result = isAnagram(str1, str2)
// console.log(result)

// const person = [
//     {
// name: 'Satheesh',
// age: 29,
// },{
//     name: 'Satheesh',
//     age: 29,  
// },{
//     name: 'Satheesh',
//     age: 29, 
// }]

// const result = person[1].name = "Naveen"
// console.log(result)
// console.log(person)

// promise

function greet(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello world'), 1000)
    })
} 

greet()
.then((message) => {
    console.log(message)
})
.catch((err) => {
    console.log(err)
})


