### ESERCIZIO
Data una parola dell'utente, creare una funzione che verifichi che la suddetta sia palindroma senza usare le funzioni built-in di JavaScript.

### Svolgimento

#### Dati
1. Chiedere all'utente una parola;
2. Creazione della stringa vuota che sarà la parola al contrario;
3. Creazione della variabile che contiene il risultato della funzione;

#### Logica del programma
1. Creazione della funzione che ha come parametro la parola immessa dall'utente;
 - ciclo for per estrarre le singolarmente le lettere dalla parola che vengono poi immesse nella stringa vuota dichiarata nella fase della raccolta dati;
 - dichiarazione della variabile booleana che funge da flag;
 - dichiarazione della variabile stringa che contiene il messaggio del risultato della verifica della parola palindroma;
 - istruzione condizionale che esegue il controllo confrontando la stringa dell'utente e quella generata dal ciclo for
  SE il booleano è true il messaggio contiene esito positivo
  ALTRIMENTI è negativo
  2. La funzione restituisce la stringa dell'utente al contrario e l'esito del controllo;
  
#### Output
Stampa in console della stringa dell'utente, la suddetta scritta al contrario e l'esito del controllo.