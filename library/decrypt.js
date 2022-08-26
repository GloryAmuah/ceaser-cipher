const numToChar = require('./num-to-char.js')
const charToNum = require('./char-to-num.js')

const caesarDec = (value, shift) => {
  return numToChar(charToNum(value) - (shift % 26))
}

const decrypt = (value, shift) => {
  const letters = value.split('')
  
  return letters.map(letter => {
    return caesarDec(letter, shift)
  }).join('')
}

module.exports = decrypt