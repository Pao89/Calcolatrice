# Calcolatrice
Progetto scolastico TPSIT as 2016-2017, svolto in linguaggio Javascript con l' aiuto della libreria jQuery.

Primo release della calcolatrice :

Documentazione del file Calcolatrice-v1.js
(Spiega cosa fanno i selector)

________________________________________________

<h1>Variabili</h1>

<b>num1</b> : Stringa contenente il primo operando<br>
<b>num2</b> : Stringa contenente il secondo operando<br>
<b>numVirgole</b> : Intero contenente il numero di cifre dopo la virgola che appariranno nel risultato<br>
<b>numVirgoleNum1</b> : Il numero di cifre dopo la virgola del primo numero<br>
<b>numVirgoleNum2</b> : Il numero di cifre dopo la virgola del secondo numero<br>
<b>numVirgoleMax</b> : Il numero massimo di cifre dopo la virgola<br>
<b>lungNum</b> : Il numero massimo che si può inserire nel visore<br>


<h1>Selectors</h1>

<i>$(".numero").click(function () { ... } )</i> : Inserisce il numero1/numero2;

<i>$(".operatore").click(function () { ... } )</i> : Inserisce l' operatore oppure inserisce il "-" dinanzi a un numero negativo;

<i>$("#virgola").click(function () { ... } )</i> : Inserisce la virgola;

<i>$("#back").click(function () { ... } )</i> : Cancella l' ultima cifra inserita;

<i>$("#ctutto").click(function () { ... } )</i> : Resetta la calcolatrice;

<i>$("#uguale").click(function () { ... } )</i> : Svolge l' operazione indicata dal <b>operatore</b> tra i due numeri;
