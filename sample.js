// // Step 1: Calculate the average of the digits
// const digits = str.split("").map(Number);
// const sum = digits.reduce((acc, digit) => acc + digit, 0);
// const average = Math.round(sum / digits.length);

// // Step 2: Calculate the minimum difference
// const minDiff = digits.reduce((min, curr) => {
//     const diff = Math.abs(curr - average);
//     return (diff < min ? diff : min);
// }, Math.abs(digits[0] - average));

// // Step 3: Use find() to locate the digit with the minimum difference
// const nearestDigit = digits.find(digit => Math.abs(digit - average) === minDiff);

// console.log(nearestDigit); // Output the nearest digit


// const str = "9500084521"

// const digits = str.split('').map(Number)
// const sum = digits.reduce((acc, digit) => acc + digit, 0)
// const average = sum / digits.length;
// const nearestDigit = Math.round(average)
// console.log(nearestDigit)
// const nearestNumber = digits.map(() => nearestDigit).join('')
// console.log(nearestNumber)

// const str = "9500086521";

// // Step 1: Calculate the average of the digits
// const digits = str.split("").map(Number);
// const sum = digits.reduce((acc, digit) => acc + digit, 0);
// const average = Math.round(sum / digits.length); // Using Math.round to round the average

// // Step 2: Find the digit in the original number closest to the rounded average
// const nearestDigit = digits.reduce((prev, curr) => {
//     return (Math.abs(curr - average) < Math.abs(prev - average) ? curr : prev);
// }, digits[0]);

// console.log(nearestDigit); // Output the nearest digit

const str = "950008531";

// function findSame(str) {
//     const splitArray = str.split('').map(Number)
//     let total = 0
//     for(let i=0; i<splitArray.length; i++) {
//         total += splitArray[i]
//     }

//     const average = total / splitArray.length
//     const roundAvg = Math.round(average)

//     const sorted = splitArray.sort((a,b) => b-a)
//     const result = sorted.find((digit) => digit === roundAvg)
//     return result
// }

// const result = findSame(str);
// console.log(result)

function findNearest(str) {

    // convert string into number
    let array = []
    for(let i=0; i<str.length; i++) {
        array.push(Number(str[i]))
    }
    
    let total = 0
    for(let i=0; i<array.length; i++) {
        total += array[i]
    }
    const avg = total/array.length
    const roundAvg = Math.round(avg)
    
    for(let i=0; i<array.length; i++) {
        if(array[i] === roundAvg) {
            return array[i]
        }
    }
    return 'Bye my love'
}

const result = findNearest(str);
console.log(result)