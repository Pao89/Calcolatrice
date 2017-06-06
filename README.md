# Calcolatrice-v3
Progetto scolastico TPSIT as 2016-2017, svolto in linguaggio Javascript con l' aiuto della libreria jQuery.

Aggiornamento a versione 3.0 (dettagli nel release)

Documentazione del file Calcolatrice-v3.js
(Spiega cosa fanno i selector, le funzioni e le variabili)

<h1>Variabili</h1>


<b>str</b> : Stringa finale su cui verra svolto il calcolo<br>
<b>visore</b> : Stringa che viene aggiunta a <b>str</b> ogni volta che viene inserito un operatore, contiene il numero che sto mostrando sul visore<br>
<b>num</b> : Array che contiene tutti i numeri di tipo float convertiti dalla <b>str</b><br>
<b>numVirgole</b> : Numero di cifre da vedere nel risultato dopo la virgola<br>
<b>numVirgoleMax</b> : Numero di cifre massime dopo la virgola<br>
<b>visoreMax</b> : Numero di cifre massime che puoi inserire in <b>visore</b><br>
<b>operatori</b> : Array contente gli operatori tirati fuori da <b>str</b> in ordine in cui appaiono<br>



<h1>Funzioni</h1>

<b>nextSegno(campo)</b> : int {
Return : posizione in campo del prossimo segno
}

<b>uguale()</b> : undefined {
Svolge i calcoli tra <b>numeri</b> e <b>operatori</b>, dando priorità durante l' inserimento nei array a fare le moltiplicazioni e le divisioni prima
}



<h1>Selectors</h1>

<i>$(".numero").click(function () { ... } ) </i>: Inserisce la cifra nel visore;

<i>$(".operatore").click(function () { ... } ) </i>: Inserisce prima il contenuto di visore e poi l' operatore in <b>str</b>, successivamente resetta visore, oppure inserisce il "-" dinanzi a un numero negativo nel visore;

<i>$("#numvirgole").click(function() { ... } ) </i>: Prompt che chiede di inserire manualmente <b>numVirgole</b>

<i>$("#virgola").click(function () { ... } ) </i>: Inserisce la virgola nel visore;

<i>$("#back").click(function () { ... } ) </i>: Cancella l' ultima cifra inserita;

<i>$("#ctutto").click(function () { ... } ) </i>: Resetta la calcolatrice;

<i>$("#uguale").click(function () { .. } ) </i>: Inserendo i numeri svolge prima le moltiplicazioni e le divisioni, infine fa le somme e le sottrazioni;

  

<h1>Listeners</h1>

<i>document.addEventListener("keydown", function(event) { ... } ) </i>: Svolge le funzioni dei selettori in base al codice ASCII che riceve in event da tastiera;

