/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
  let longest = s.length > 1 ? '' : s[0];

  let substr = s.length > 1 ? '' : s[0];

  for (let x = 0; x < s.length; x++) {

    if (!substr.includes(s[x])) {
      substr += s[x];
      if (substr.length >= longest.length) longest = substr;
    } else {
      substr = substr.slice(substr.indexOf(s[x])+1, x)
      if (substr !== s[x]) substr += s[x];
      if (substr.length >= longest.length) longest = substr;
    }
  }

  return longest?.length || 0;

};


const test = "anviaj";

console.log(lengthOfLongestSubstring(test));