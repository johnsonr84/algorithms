// Write code to return the largest number in the given array

var characterCount = function(str) {
    var charMap = {};
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
  
      if (char in charMap) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
  
    return charMap;
  };
