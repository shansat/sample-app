// find the index of an array

const array = [1, 2, 3, 4, 5]
const element = 7

const result = array.indexOf(element);

// Merge and sorted Array

const array1 = [1, 3, 5]
const array2 = [2, 4, 6]

const mergeArr = array1.concat(array2)
const sortedArr = mergeArr.sort()
console.log(sortedArr);

// Remove duplicates from an array

const array3 = [1, 2, 2, 3, 4, 4, 5]

const result1 = [...new Set(array3)]
console.log(result1)

// Find the largest number in an array

const array4 = [1, 3, 5, 7, 2, 8]
const result2 = array4.sort((a,b) => b-a)
const output1 = result2[0]
console.log(output1)

// find palindrome or not

const str = 'racecar'

function isPalindrome(str) {
    const noSpace = str.replace(/\s/g, '');

    const reversedWords = noSpace.split('').reverse().join('');
    if(noSpace === reversedWords) {
        return `${str} is a palindrome`
    } else {
        return `${str} is not a palindrome`
    }
}

const output2 = isPalindrome(str)
console.log(output2);

// reverse a word

const str1 = "hello";

const output3 = str1.split("").reverse().join('')
console.log(output3)

// sum of an array

const array5 = [1, 2, 3, 4, 5]

function sumArray(arr) {
    let sum = 0
    for(let i=0; i<arr.length; i++) {
         sum += arr[i]
    }
    return sum;
}

const output4 = sumArray(array5);
console.log(output4)

// Count Vowels in a string

const str2 = 'openai'
const vowels = "aeiouAEIOU"

function countVowels(str) {
    let count = 0
    for(let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count
}

const output5 = countVowels(str2)
console.log(output5)

// Fizzbuzz

function Fizzbuzz(n) {
    let result = []
    for(let i=1; i<=n; i++) {
        if(i %3 === 0 && i%5 === 0) {
            result.push("FizzBuzz")
        } else if(i%3 === 0) {
            result.push('Fizz')
        } else if(i%5 === 0) {
            result.push('Buzz')
        } else {
            result.push(String(i))
        }
    }
    return result;
}

const index = 15
const output6 = Fizzbuzz(index)
console.log(output6);

// Factorial of a Number

function factorialIterative(n) {
    let result = 1;
    for(let i =1; i<= n; i++) {
        result *= i;
    }
    return result;
}

const input = 4;
const result3 = factorialIterative(input);
console.log(result3)

// find isAnagram

const str3 = 'life';
const str4 = 'file';

function isAnagram(str3, str4) {
    if(str3.length !== str4.length) {
        return 'string length is not matching'
    }
    
    const sortedStr3 = str3.split('').sort().join('');
    const sortedStr4 = str4.split('').sort().join('')
    if(sortedStr3 === sortedStr4) {
        return `${str3} and ${str4} are anagram`
    } else {
        return `${str3} and ${str4} are not anagram`
    }  
}

const result4 = isAnagram(str3, str4)
console.log(result4)

// find second largest in an array

const array6 = [49,64,39,84,32,86,48,42,94,79,97,84,32,78,20]

const sortedArr1 = array6.sort((a,b) => b-a)
console.log(sortedArr1[1])

// fibonacci 

function fibonacciGenerator(n) {
    let fibonacciArray = [1,2]
    for(let i=2; i<n; i++) {
        const nextNumber = fibonacciArray[i-1] + fibonacciArray[i-2]
        fibonacciArray.push(nextNumber)
    }
    return fibonacciArray
}

const n1 = 8
const output7 = fibonacciGenerator(n1)
console.log(output7)

// reverse each word not a sentence

const str5 = "My name is Satheesh"

function reverseEach(str) {
    const noSpace = str.split(' ')
    const mappedData = noSpace.map((data) => 
        data.split('').reverse().join('')
    )
    return mappedData.join(' ')
}

const output8 = reverseEach(str5)
console.log(output8)

// Capitalize first letter of each word

function capWord(str) {
    const noSpace = str.split(' ').map((data) => data.charAt(0).toUpperCase()+data.slice(1)).join(' ');
    console.log(noSpace)
}

const str6 = 'hello world'
const result5 = capWord(str6)

// Remove vowels from the string

const str7 = 'javascript'
const vowels1 = new Set('aeiouAEIOU')

function removeVowels(str) {
    let result = ''
        for(let char of str) {
            if(!vowels1.has(char)) {
                result += char
            }
        }
        return result
}

const result6 = removeVowels(str7)
console.log(result6);

// find intersection 

const array7 = [1, 2, 3, 4]
const array8 = [3, 4, 5, 6]
function findInteraction(arr1, arr2) {
    return arr1.filter((element) => arr2.includes(element))
}

const result7 = findInteraction(array7, array8)
console.log(result7)

// 