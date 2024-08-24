function maskNum(num) {
    const data = num.slice(-4)
    const maskedNum = '*'.repeat(num.length - 3)
    return maskedNum + data
}

const num = '48793749743298'
const result = maskNum(num)
console.log(result);

// const arrObj = [
// {name:'Satheesh',
// age: 29
// },
// {
//     name: 'Sarath',
//     age: 26
// },
// {
//     name: 'Ravi',
//     age: 34
// }]

// const result = arrObj.sort((a,b) => a.age - b.age)
// console.log(result)

// function myPromise() {
//     return new Promise((res,rej) => {
//         if(false) {
//             res('Good Morning')
//         } else {
//             rej('Good night')
//         }
//     })
// }

// // myPromise()
// // .then((message) => {
// //     console.log(message)
// // })
// // .catch((err) => {
// //     console.log(err)
// // })

// async function greet() {
//     try {
//         const response = await myPromise()
//         console.log(response)
//     } catch(err) {
//         console.log(err)
//     }
// }

// greet()