/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var str = "";
var visore = "";
var numeri = [];
var numVirgole = 0;
var numVirgoleMax = 10;
var lungNum = 25;
var operatori = [];

function nextSegno(campo) {
    var possegno;
    var segnotrovato = false;
    for (var i = 0; i < campo.length && segnotrovato === false; i++) {
        if (campo.charAt(i) === "+" || campo.charAt(i) === "-" || campo.charAt(i) === "*" || campo.charAt(i) === "/") {
            possegno = i;
            segnotrovato = true;
        }
    }
    return possegno;
}

$(document).ready(function () {

    $(".numero").click(function () {
        visore.length < lungNum ? visore += this.innerHTML : null;
        visore.indexOf('.') !== -1 && numVirgole < numVirgoleMax ? numVirgole++ : null;
        $("#campo").html(visore);
    });

    $(".operatore").click(function () {
        if (visore.length === 0 && this.innerHTML === "-") {
            visore += this.innerHTML;
            $("#campo").html(visore);
        } else if (visore.length !== 0 && visore.charAt(0)!="-") {
            str += visore;
            str += this.innerHTML;
            visore = "";
            $("#campo").html("&nbsp");
        } else {
            alert("E' ammesso solo un operatore!");
        }
    });

    $("#numvirgole").click(function () {
        numVirgole = prompt("Inserisci il numero di virgole che vuoi visualizzare (max " + numVirgoleMax + " numeri)", "0");
        while (numVirgole > numVirgoleMax) {
            numVirgole = prompt("Il massimo di numeri è " + numVirgoleMax + ".", "0");
        }
    });


    $("#virgola").click(function () {
        visore.indexOf('.') !== -1 ? alert('Hai già inserito una virgola') : visore += ".";
        $("#campo").html(visore);
    });

    $("#numvirgole").click(function () {
        numVirgole = prompt("Inserisci il numero di virgole che vuoi visualizzare (max " + numVirgoleMax + " numeri)", "0");
        while (numVirgole > numVirgoleMax) {
            numVirgole = prompt("Il massimo di numeri è " + numVirgoleMax + ".", "0");
        }
    });

    $("#back").click(function () {
        visore = visore.slice(0, -1);
        $("#campo").html(visore.length === 0 ? "&nbsp" : visore);
    });

    $("#ctutto").click(function () {
        visore = "";
        str = "";
        numVirgole = 0;
        $("#campo").html("&nbsp");
    });

    $("#uguale").click(function () {
        str += visore;
        var sAiuto = str;
        var i = 0;
        var calcoloSubito = false;
        var negativo = false;
        while (sAiuto.length !== 0) {
            if (calcoloSubito == true || nextSegno(sAiuto) > -1) {
                sAiuto.charAt(0) == "-" ? negativo = true : null;
                if (negativo == true) {
                    sAiuto = sAiuto.slice(1, sAiuto.length);
                    numeri[i] = parseFloat(sAiuto.substring(0, nextSegno(sAiuto))) * (-1);
                    negativo = false;
                } else {
                    numeri[i] = parseFloat(sAiuto.substring(0, nextSegno(sAiuto)))
                }
                if (calcoloSubito) {
                    switch (operatori[i - 1]) {
                        case "*" :
                            numeri[i - 1] = numeri[i - 1] * numeri[i];
                            break;
                        case "/" :
                            numeri[i - 1] = numeri[i - 1] / numeri[i];
                            break;
                    }
                    calcoloSubito = false;
                    numeri.splice(i, 1);
                    operatori.splice(i, 1);
                    i--;
                    if (!(nextSegno(sAiuto) > -1)) {
                        sAiuto = "";
                    }
                }
                if (nextSegno(sAiuto) > -1) {
                    operatori[i] = sAiuto.charAt(nextSegno(sAiuto));
                    if (operatori[i] == "*" || operatori[i] == "/") {
                        calcoloSubito = true;
                    }
                }
                if (nextSegno(sAiuto) > -1) {
                    sAiuto = sAiuto.substring(nextSegno(sAiuto) + 1);
                } else {
                    sAiuto = "";
                }
            } else {
                numeri[i] = parseFloat(sAiuto.substring(0));
                sAiuto = "";
            }
            console.log(numeri, 'num');
            console.log(operatori, 'op');
            console.log(sAiuto, 'string');
            i++;
            inserito = true;
        }
        var risultato;
        operatori.length == numeri.length ? operatori.pop() : null;
        if (numeri.length > 1) {
            for (i = 0; i <= operatori.length; i++) {
                switch (operatori[i]) {
                    case "+":
                        numeri[i + 1] += numeri[i];
                        console.log(numeri, 'num');
                        break;
                    case "-":
                        numeri[i + 1] = numeri[i] - numeri[i + 1];
                        console.log(numeri, 'num');
                        break;
                }
            }
        }
        if (numVirgole == 0) {
            risultato = numeri[numeri.length - 1];
            risultato = Math.floor(risultato);
        } else {
            risultato = numeri[numeri.length - 1];
            risultato = risultato.toFixed(numVirgole);
        }
        $("#campo").html(risultato);
        visore = "";
        str = "";
        operatori = [];
        numeri = [];
        numVirgole = 0;
    });

});