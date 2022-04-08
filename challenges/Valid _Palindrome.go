/* 
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
    and removing all non-alphanumeric characters, it reads the same forward and backward. 
    Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

    Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
    
    Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters. 
*/


package main

import (
	"fmt"
	"strings"
	"regexp"
	"log"
)

func main () {
	fmt.Println(isPalindrome(" "))
}

func isPalindrome(s string) bool {
	trimmed := trim(s)
    lower := strings.ToLower(trimmed)
	return lower == reverse(lower)
}

func trim (s string) string {
    reg, err := regexp.Compile("[^a-zA-Z0-9]+")

    if err != nil {
        log.Fatal(err)
    }

    return reg.ReplaceAllString(s, "")
}

func reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}