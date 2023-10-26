// Codice da eseguire
const userStr = prompt("Dimmi una parola");
const userRevStr = reverseStr(userStr);
console.log(userRevStr);

/**********/
/* Descrizione: data una stringa, la riscrive al contrario in un'altra variabile string
/* @param {userStr}
/* @returns {string}
*/

function reverseStr(userStr) {
  // creo una variabile string vuota
  let reversedStr = "";
  // ciclo for che scorre la stringa parametro al contrario partendo dall'ultimo carattere come fosse un array.
  for (let i = userStr.length - 1; i >= 0; i--) {
    // scrivo il carattere all'indice dell'iterazione nella variabile dichiarata nella funzione
    reversedStr += userStr[i];
  }
  return reversedStr; // restituisco il valore della string a fine ciclo
}