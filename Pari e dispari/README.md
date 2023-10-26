### ESERCIZIO
Dati un numero dall'utente da 1 a 5 e uno per il computer nello stesso range ma generato casualmente e una scommessa sulla somma (che questa sia pari o dispari), definire una funzione che sommi i numeri e determini se il giocatore abbia vinto o meno. 

### Svolgimento

#### Dati
1. Chiedere all'utente un numero da 1 a 5;
2. Generare un numero casuale da 1 a 5 per il computer;
3. Chiedere all'utente se la somma sarà pari o dispari;

#### Logica del programma
1. Definire la funzione:
 - Dichiarare la variabile che contiene la somma calcolata;
 - Dichiarare la variabile stringa che contiene l'esito del controllo della somma;
 - Dichiarare la variabile che contiene il risultato della scommessa dell'utente;
 - SE la somma divisa per 2 dà resto 0
 la somma è pari
 ALTRIMENTI la somma è dispari;
 - SE la somma e la scommessa dell'utente corrispondono
 l'utente ha vinto
 ALTRIMENTI l'utente ha perso;
 - Restituire la somma e il risultato della scommessa;

#### Output
Stampa in console del risultato della funzione che prende come parametri il numero dell'utente e quello generato dal computer.