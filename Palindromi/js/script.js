// Codice da eseguire
const userStr = prompt("Dimmi una parola");
let userRevStr = "";
const isItPalindrome = reverseStr(userStr)
console.log("Stringa utente:", userStr, "Stringa utente al contrario:", userRevStr, "Esito:", isItPalindrome);

/**********/
/* Descrizione: data una stringa, la riscrive al contrario in un'altra variabile string
/* @param {userStr}
/* @returns {string, string}
*/

function reverseStr(userStr) {
  // ciclo for che scorre la stringa parametro al contrario, partendo dall'ultimo carattere come fosse un array
  for (let i = userStr.length - 1; i >= 0; i--) {
    // scrivo il carattere all'indice dell'iterazione nella variabile dichiarata nella funzione
    userRevStr += userStr[i];
  }
  // creo un flag booleano per la verifica della parola palindroma
  let palindromo = false;
  // creo il messaggio che comunica l'esito del controllo
  result = "";
  // istruzione condizionale per la verifica della parola palindroma
  // se la parola dell'utente è uguale a quella riscritta al contrario
  if (userStr === userRevStr) {
    // il flag diventa true
    palindromo = true;
  }
  // se il flag è true
  if (palindromo === true) {
    // scrivo nel messaggio
    result += "È palindroma!";
  } else {
    //altrimenti scrivo
    result += "Non è palindroma...";
  }
  // restituisco il valore della stringa creata a fine ciclo e l'esito della verifica
  return userRevStr, result;
}