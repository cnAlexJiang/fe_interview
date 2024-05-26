/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
示例 1:
输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

 */

function isValid(s) {
    let valid = true;
    const stack = [];
    const mapper = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const keys = Object.keys(mapper);
    
    for(let i in s){
        const v = s[i];
        if(keys.includes(v)){
            stack.push(v);
        } else {
            const last = stack.pop();
            if(mapper[last] !== v){
                valid = false;
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return valid;
}

console.log(isValid("()[]{}"))

console.log(isValid("(]"))

console.log(isValid("([)]"))