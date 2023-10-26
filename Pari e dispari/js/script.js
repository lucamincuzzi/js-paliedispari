let userNumber = 0;
while (userNumber < 1 || userNumber > 5) {
  userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
}
const cpuNumber = Math.random() * 5 + 1;
console.log("Numero dell'utente:", userNumber);
console.log("Numero del computer:", cpuNumber);
let userBet = "";
while (userBet === "") {
    userBet = prompt("Sarà pari o dispari?");
}
console.log(evenOrOddBet(userNumber, cpuNumber));

/********/
/* Descrizione: Funzione che prende il numero dell'utente e quello del computer, li somma e restituisce la somma e l'esito della scommessa dell'utente
/* @param {userNumber}
/* @param {cpuNumber}
/* returns {number, string}
*/

function evenOrOddBet(userNumber, cpuNumber) {
    let sum = userNumber + cpuNumber;
    let evenOdd = "";
    let result = "";
    if (sum % 2 === 0) {
        evenOdd = "È pari";
    } else {
        evenOdd = "È dispari";
    }
    if (evenOdd === userBet) {
        result = "Hai vinto!";
    } else {
        result = "Hai perso...";
    }
    return sum, result;
}
