//Number
var reg = /^-?\d+$|^(-?\d+)(\.\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/g;

//UTF-8 Encoding 的函数
function utf8Encoding4(str) {
    const code = encodeURIComponent(str);   // winter %E8%80%81 %E5%B8%88
    const array = []
  
    for (let i = 0; i < code.length; i++) {
      const c = code.charAt(i);
      if (c === '%') {
        const hex = code.charAt(i + 1) + code.charAt(i + 2);
        const hexVal = parseInt(hex, 16);
        array.push(hexVal);
        i += 2
      } else {
          array.push(c.charCodeAt(0));
      }
    }
    return array;
  }

  //正则表达式，匹配所有的字符串直接量，单引号和双引号
let regText = /[\x21-\x7E]{6,16}|[\u0021-\u007E]{6,16}|(['"])(?:(?!\1).)*?\1/g