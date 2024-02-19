function firstNonRepeatedChar(str) {
 // Write your code here
	 const charCount = {};

    // Iterate through the string to count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // If no non-repeated character found, return null
    return null;

console.log(firstNonRepeatedChar('aabbcdd'));
console.log(firstNonRepeatedChar('aabbcc'));  
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
