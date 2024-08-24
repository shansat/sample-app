const products = [
    { name: "Product A", price: 30 },
    { name: "Product B", price: 50 },
    { name: "Product C", price: 20 },
];

function filterByPrice(products) {
    return products.sort((a,b) => a.price - b.price)
}

const result = filterByPrice(products)
console.log(result)

// const array = [{price:50},{price:20},{price:-2},{price:2}];

// function sortArr(arr) {
//     let splitArr = arr
//     return splitArr
// }

// const result = sortArr(array)
// console.log(result)

// const str1 = 'life'
// const str2 = 'filee'

// function isAnagram(str1, str2) {
//     if(str1 === str2) {
//         return `${str1} and ${str2} is a anagram`
//     } else {
//         return `${str1} and ${str2} is not a anagram`
//     }
// }

// const result = isAnagram(str1, str2)
// console.log(result)