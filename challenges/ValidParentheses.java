package challenges;

import java.util.*;

class ValidParentheses {

    public static HashMap<String, String> map = new HashMap<String, String>();

    public static Stack<Character> stack = new Stack<Character>();

    public static boolean isValid(String s) {

        map.put("(", ")");
        map.put("{", "}");
        map.put("[", "]");

        if ((s.length() % 2) != 0) {
            return false;
        }

        for (char ch : s.toCharArray()) {

            if (map.containsKey(Character.toString(ch))) {
                stack.push(ch);

            }
            
            else if (map.get(Character.toString(stack.peek())).equals(Character.toString(ch))) {
                stack.pop();
            }
            
            else {
                return false;
            }
        }

        return stack.isEmpty();
    }

    public static void main(String[] args) {

        System.out.println(isValid("{[]}"));
    }
}