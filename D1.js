/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 1')
console.log('I principali datatype in JavaScript si suddividono in 3 modi: Stringa, Numerico e Boolean. Questo è il datatype "Stringa" che consiste solo in tipologie di testo scritte e si mettono sempre tra virgolette')
console.log(5, 'Questo è un datatype "Numerico", non è compreso tra virgolette come la stringa ma direttamente inserita, se si vuole aggiungere il decimale si aggiunge con il punto. Ovviamente comprende solo i numeri')
const a = 'true';
console.log(a, 'Questo invece è il datatype "Boolean" che è fatto di soli 2 valori: true o false e serve principalmente per i controlli condizionali e far prendere decisioni al codice');

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = 'Jonathan'
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var addizione1 = 12
var addizione2 = 20
var risultatoAddizione = addizione1+addizione2
console.log("Somma dell'addizione tra", addizione1, "e", addizione2, "equivale a", risultatoAddizione)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12
console.log("Il valore della variabile 'x' è", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*myName = 'Bergadano'
console.log(myName)*/
console.log('Una constable è un valore costante che non può essere modificata nuovamente. Per quello al posto di const si dovrà usare var')

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var sottrazione = 4
var risultatoSottrazione = sottrazione-x
console.log("Somma della sottrazione tra", sottrazione, "e", x, "equivale a", risultatoSottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
