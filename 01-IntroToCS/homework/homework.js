'use strict';

function BinarioADecimal(num) {
   var result = 0;
   for (var i = 0; i < num.length; i++) {
      result = result + num[i] * 2 ** (num.length - 1 -i);
   }
   return result;
}

function DecimalABinario(num) {
   var result = "";
   while (num >= 1) {
      result = (num % 2) + result;
      num = Math.floor(num / 2)
   }
   return result;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
