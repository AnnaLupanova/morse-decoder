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
const decoder = {
    "10": ".",
    "11": "-",
    "00":""
}

function splitArr (arr, chunks) {
    let result = []
    for (let i=0; i < arr.length; i=i+chunks ){
        result.push(arr.slice(i,i+chunks))
    }
    return result

}
function decode(expr) {
    const sep = "**********"
    let result_str = '';
    expr = expr.split(sep)
    expr.map((item, index) => {
        item = item.split("")
        let word_arr = splitArr(item,10)
        word_arr.map(word_item=>{
            let letter_arr = splitArr(word_item,2)
            let letter = []
            letter_arr.map(letter_item=>{

                let letter_morze = letter_item.join("")
                letter.push(letter_morze.replace(letter_morze, decoder[letter_morze]))

            })
            letter_morze = letter.join("")
            result_str += MORSE_TABLE[letter_morze]
        })
        result_str += ' '
    })
    return result_str.slice(0,-1)
}

module.exports = {
    decode
}