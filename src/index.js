module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPair = {};  
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];    
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i]; 
    if (openBrackets.includes(current)) {
      if ((stack[stack.length - 1] === current) && (bracketsPair[current] === current)) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketsPair[current] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
