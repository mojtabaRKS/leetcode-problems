var isValid = function(string) {

    var map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };

    var stack = [];

    for (let index = 0; index < string.length; index++) {

        var char = string.charAt(index);

        if (char in map) {


            stack.push(char)
        } else if(map[stack[stack.length-1]] == char) {

            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length == 0;
};

console.log(isValid("]"))



































