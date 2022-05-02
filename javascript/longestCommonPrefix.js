/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = (strs) => {
  
  var current_prefix = '';

  if (strs[0] === "") return "";
    
  for (let x = 0; x < strs[0].length; x++) {

    let prev_prefix = current_prefix;
    current_prefix = strs[0].substring(0, x+1);
  
    res = strs.every(function(x) {
      return x.startsWith(current_prefix);
    });
  
    if (res == false && current_prefix.length <= 1) {
      return "";
    } else if (res == false && current_prefix.length >= 1) {
      return prev_prefix;
    } else if (res == true && strs[0].length === 1) {
      return current_prefix;
    } else if (res == true && x === strs[0].length - 1) {
      return current_prefix;
    }
  }
}


