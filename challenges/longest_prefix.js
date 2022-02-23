  /* 
  
    Longest Common Prefix
    level : easy
    Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".
    --------------------------------------------------

    Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    ----------------------------------------------

    Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    -----------------------------------------------------------
    
    Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters. 
 
 */


var longestCommonPrefix = function (strs) {
    var longestPrefix = "";

    var res = strs.find(elem => {
        return elem.length == Math.min(...strs.map(item  => item.length));
    })

    for(index = 0; index < res.length; index++) {
        if (strs.filter(arrElem => arrElem.startsWith(res.slice(0, index + 1 ))).length === strs.length) {
            longestPrefix = res.slice(0, index  + 1)
        };
    }
    
    return longestPrefix;
  };

  var result = longestCommonPrefix(["car","carace","car"])