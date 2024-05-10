function countNumbers(text) {
    const counts = {};
    for (const char of text) {
        const number = parseInt(char, 10);
        if (!isNaN(number) && number >= 1 && number <= 9) {
        counts[number] = (counts[number] || 0) + 1;
        }
    }
    return counts;
}
        
function compareAndSum(obj1, obj2) {
    const result = {};
    const allProperties = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    for (const prop of allProperties) {
        const value1 = obj1[prop] || 0; // Handle missing properties with 0
        const value2 = obj2[prop] || 0;
        
        if (!isNaN(value1) && !isNaN(value2)) {
        result[prop] = value1 + value2;
        }
    }

    return result;
}

function reduceToSingleDigit(number,special) {
    if (number < 10 || (special && (number === 11 || number === 22))) {
        return number;
    } else {
        const sum = number.toString().split('').map(Number).reduce((a, b) => a + b);
        return reduceToSingleDigit(sum,special);
    }
}

function onlyVowels(text) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return text.split('').filter(char => vowels.has(char)).join('');
}
function removeVowels(text) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return text.split('').filter(char => !vowels.has(char)).join('');
}
function convertNameToNumbers(name, _removeVowels,_onlyVowels) {
    //1. Chuyển các ký tự về con số theo rule.
    var num = 0;
    var _name = convertVietnameseToAscii((name+'').toLowerCase());
    if(_removeVowels) _name = removeVowels(_name);
    if(_onlyVowels) _name = onlyVowels(_name);
    for (var i = 0; i < _name.length; i++) {
        switch (_name[i]) {
            case 'a': case 'j': case 's':
                num += 1;
                break;
            case 'b': case 'k': case 't':
                num += 2;
                break;
            case 'u': case 'c': case 'l':
                num += 3;
                break;
            case 'd': case 'm': case 'v':
                num += 4;
                break;
            case 'e': case 'n': case 'w':
                num += 5;
                break;
            case 'f': case 'x': case 'o':
                num += 6;
                break;
            case 'g': case 'p': case 'y':
                num += 7;
                break;
            case 'h': case 'q': case 'z':
                num += 8;
                break;
            case 'i': case 'r':
                num += 9;
                break;
            default:
                break;
        }
    }
    return num;
}
function convertNameToNumberString(name, removeVowels,onlyVowels) {
    //1. Chuyển các ký tự về con số theo rule.
    var num = '';
    var _name = convertVietnameseToAscii((name+'').toLowerCase());
    if(removeVowels) _name = removeVowels(_name);
    if(onlyVowels) _name = onlyVowels(_name);
    for (var i = 0; i < _name.length; i++) {
        switch (_name[i]) {
            case 'a': case 'j': case 's':
                num += '1';
                break;
            case 'b': case 'k': case 't':
                num += '2';
                break;
            case 'u': case 'c': case 'l':
                num += '3';
                break;
            case 'd': case 'm': case 'v':
                num += '4';
                break;
            case 'e': case 'n': case 'w':
                num += '5';
                break;
            case 'f': case 'x': case 'o':
                num += '6';
                break;
            case 'g': case 'p': case 'y':
                num += '7';
                break;
            case 'h': case 'q': case 'z':
                num += '8';
                break;
            case 'i': case 'r':
                num += '9';
                break;
            default:
                break;
        }
    }
    return num;
}
function convertVietnameseToAscii(text) {
    const vietnameseChars = {
        'à': 'a',
        'á': 'a',
        'ạ': 'a',
        'ả': 'a',
        'ã': 'a',
        'â': 'a',
        'ầ': 'a',
        'ấ': 'a',
        'ậ': 'a',
        'ẩ': 'a',
        'ẫ': 'a',
        'ă': 'a',
        'ằ': 'a',
        'ắ': 'a',
        'ặ': 'a',
        'ẳ': 'a',
        'ẵ': 'a',
        'è': 'e',
        'é': 'e',
        'ẹ': 'e',
        'ẻ': 'e',
        'ẽ': 'e',
        'ê': 'e',
        'ề': 'e',
        'ế': 'e',
        'ệ': 'e',
        'ể': 'e',
        'ễ': 'e',
        'ì': 'i',
        'í': 'i',
        'ị': 'i',
        'ỉ': 'i',
        'ĩ': 'i',
        'ò': 'o',
        'ó': 'o',
        'ọ': 'o',
        'ỏ': 'o',
        'õ': 'o',
        'ô': 'o',
        'ồ': 'o',
        'ố': 'o',
        'ộ': 'o',
        'ổ': 'o',
        'ỗ': 'o',
        'ơ': 'o',
        'ờ': 'o',
        'ớ': 'o',
        'ợ': 'o',
        'ở': 'o',
        'ỡ': 'o',
        'ù': 'u',
        'ú': 'u',
        'ụ': 'u',
        'ủ': 'u',
        'ũ': 'u',
        'ư': 'u',
        'ừ': 'u',
        'ứ': 'u',
        'ự': 'u',
        'ử': 'u',
        'ữ': 'u',
        'ỳ': 'y',
        'ý': 'y',
        'ỵ': 'y',
        'ỷ': 'y',
        'ỹ': 'y',
        'đ': 'd',
        'Đ': 'D',
    };

    return text.replace(/\越南à-ỹĐ/gi, function(matched) {
        return vietnameseChars[matched.toLowerCase()] || matched;
    });
}