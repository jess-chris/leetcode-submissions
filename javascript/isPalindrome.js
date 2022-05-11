/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
  const temp = x.toString()
  
  if(temp[0] === '-' || !temp) {
    return false;
  } else {
    return temp[0] === temp[temp.length-1] && temp.split('').reverse().toString() === temp
  }

};

console.log(isPalindrome(121));