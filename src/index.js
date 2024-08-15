const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    // Iterate over the input string in chunks of 10 characters
    for (let i = 0; i < expr.length; i += 10) {
        let letterCode = expr.slice(i, i + 10);
        
        if (letterCode === '**********') {
            // This represents a space in Morse code
            result += ' ';
        } else {
            let morseCode = '';

            // Process each pair of 2 binary digits to form Morse code
            for (let j = 0; j < 10; j += 2) {
                let symbol = letterCode.slice(j, j + 2);
                if (symbol === '10') morseCode += '.';
                if (symbol === '11') morseCode += '-';
            }
            
            // Append the decoded letter to the result
            result += MORSE_TABLE[morseCode];
        }
    }

    return result;
}

module.exports = {
    decode
};
