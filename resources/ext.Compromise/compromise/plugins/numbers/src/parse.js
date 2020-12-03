const toNumber = require('./convert/toNumber')

// get a numeric value from this phrase
const parseNumber = function(p) {
  let str = p.text('reduced')
  // is it in '3,123' format?
  let hasComma = /[0-9],[0-9]/.test(p.text('text'))
  str = str.replace(/,/g, '')

  //parse a numeric-number (easy)
  let arr = str.split(/^([^0-9]*)([0-9.,]*)([^0-9]*)$/)
  if (arr && arr[2] && p.terms().length < 2) {
    let num = parseFloat(arr[2] || str)
    //ensure that num is an actual number
    if (typeof num !== 'number') {
      num = null
    }
    // strip an ordinal off the suffix
    let suffix = arr[3] || ''
    if (suffix === 'st' || suffix === 'nd' || suffix === 'rd' || suffix === 'th') {
      suffix = ''
    }
    // support M for million, k for thousand
    if (suffix === 'm' || suffix === 'M') {
      num *= 1000000
      suffix = ''
    }
    if (suffix === 'k' || suffix === 'k') {
      num *= 1000
      suffix = ''
    }
    return {
      hasComma: hasComma,
      prefix: arr[1] || '',
      num: num,
      suffix: suffix,
    }
  }
  //parse a text-numer (harder)
  let num = toNumber(str)
  return {
    hasComma: hasComma,
    prefix: '',
    num: num,
    suffix: '',
  }
}
module.exports = parseNumber
