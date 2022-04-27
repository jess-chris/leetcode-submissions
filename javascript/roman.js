const romanToInt = (str) => {
    
  if (!str || str.length > 15) return 'Invalid length';
  
  const tmpArr = str.toUpperCase().split('');
  const prefixChars = ['I', 'X', 'C'];
  let totalValue = 0;
  
  while(tmpArr.length) {
      
      let tmpVal = tmpArr.shift();
      
      if (tmpArr.length && prefixChars.includes(tmpVal) && tmpArr[0] !== tmpVal) {
        if (tmpVal === 'I' && ['V', 'X'].includes(tmpArr[0])) tmpVal += tmpArr.shift(); 
        else if (tmpVal === 'X' && ['L', 'C'].includes(tmpArr[0])) tmpVal += tmpArr.shift(); 
        else if (tmpVal === 'C' && ['D', 'M'].includes(tmpArr[0])) tmpVal += tmpArr.shift(); 
      }

      console.log(tmpVal)
      
      switch(tmpVal) {
          case 'I':
              totalValue += 1;
              break;
          case 'V':
              totalValue += 5;
              break;
          case 'X':
              totalValue += 10;
              break;
          case 'L':
              totalValue += 50;
              break;
          case 'C':
              totalValue += 100;
              break;
          case 'D':
              totalValue += 500;
              break;
          case 'M':
              totalValue += 1000;
              break;
          case 'IV':
              totalValue += 4;
              break;
          case 'IX':
              totalValue += 9;
              break;
          case 'XL':
              totalValue += 40;
              break;
          case 'XC':
              totalValue += 90;
              break;
          case 'CD':
              totalValue += 400;
              break;
          case 'CM':
              totalValue += 900;
              break;
          default:
              return 'Invalid character';
      }

      if (totalValue >= 4000) return 'Invalid range';
  }
  
  return totalValue;
};

console.log(romanToInt("MDCCCLXXXIV"));