// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var result = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < str.length; i++) {
        var letter = str[i].toLowerCase();

        if (vowels.indexOf(letter) !== -1) {
            result += 1;
        }
    }
    return result;
};
