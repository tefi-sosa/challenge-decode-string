// The number in the string represents how many characters each letter should shift

// function decoder (string) {
//     let result = ""
//     let num = Number(string.charAt(0))
//     for (let i = 1; i < string.length; i++) {
//         let newChar = String.fromCharCode(string.charCodeAt(i) + num).toLowerCase()
//         result += newChar
//     }
//     return result
// }

// function decoder1 (string) {
//     let letters = "a b c d e f g h j k l m n o p q r s t u v w x y z"
//     string = string.split("")
//     num = string.shift() 
//     let result = []
//     string.forEach(element => {
//         let position = letters.search(element)
//         if (position + num * 2 > letters.length) {
//             let newNum = (position + num * 2) - letters.length
//             result.push(letters[newNum - 1])
//         } else {
//             result.push(letters[position + num * 2])
//         }
//     });
//     return result.join("")
// }

// SOLUTION WITHOUT BUILT IN FUNCTIONS

function decoder1 (string) {
    let letters = "abcdefghjklmnopqrstuvwxyz"
    let num = Number(string[0])
    let result = ""
    for (let i = 1; i < string.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            if (string[i] === letters[j]) {
                let index = j + num                
                if (index > letters.length) {
                    let newIndex = index - letters.length
                    result += letters[newIndex]      
                } else {
                    result += letters[index]
                }                
                break
            }
        }
    }
    return result
}

console.log(decoder("3bc"))
console.log(decoder("2fcjjm"))
console.log(decoder("5z"))