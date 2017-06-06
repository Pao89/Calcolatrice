/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var num1 = "";
var num2 = "";
var operatore = "";
var numVirgole = 0;
var numVirgoleNum1 = 0;
var numVirgoleNum2 = 0;
var numVirgoleMax = 8;
var lungNum = 25;

$(document).ready(function () {

	$(".numero").click(function () {
		if (operatore.length === 0) {
			num1.length<lungNum? num1 += this.innerHTML:null;
			if(num1.indexOf('.') !== -1 && numVirgoleNum1 < numVirgoleMax){
				numVirgoleNum1++;
			}
			$("#campo").html(num1);
		} else {
			num2.length<lungNum? num2 += this.innerHTML:null;
			if(num2.indexOf('.') !== -1 && numVirgoleNum2 < numVirgoleMax){
				numVirgoleNum2++;
			}
			$("#campo").html(num2);
		}
	});

	$(".operatore").click(function () {
		if (num1.length === 0 && this.innerHTML === "-") {
			num1 += this.innerHTML;
			$("#campo").html(num1);
		} else if (num2.length === 0 && operatore.length !== 0 && this.innerHTML === "-") {
			num2 += this.innerHTML;
			$("#campo").html(num2);
		} else if (operatore.length === 0) {
			operatore += this.innerHTML;
		} else {
			alert("E' ammesso solo un operatore!");
		}
	});

	$("#virgola").click(function () {
		if (operatore.length === 0) {
			num1.indexOf('.') !== -1 ? alert('Hai già inserito una virgola') : num1 += ".";
			$("#campo").html(num1);
		} else {
			num2.indexOf('.') !== -1 ? alert('Hai già inserito una virgola') : num2 += ".";
			$("#campo").html(num2);
		}
	});

	$("#back").click(function () {
		if (operatore.length === 0) {
			num1 = num1.slice(0, -1);
			$("#campo").html(num1.length === 0 ? "&nbsp" : num1);
		} else {
			num2 = num2.slice(0, -1);
			$("#campo").html(num2.length === 0 ? "&nbsp" : num2);
		}
	});

	$("#ctutto").click(function () {
		num1 = "";
		num2 = "";
		operatore = "";
		numVirgole = 0;
		$("#campo").html("&nbsp");
	});

	$("#uguale").click(function () {
		numVirgole = Math.max(numVirgoleNum1, numVirgoleNum2);
		if (num1.length !== 0 || num2.length !== 0) {
			var risultato;
			switch (operatore) {
				case "+" :
					risultato = parseFloat(num1) + parseFloat(num2);
					break;
				case "-" :
					risultato = parseFloat(num1) - parseFloat(num2);
					break;
				case "*" :
					risultato = parseFloat(num1) * parseFloat(num2);
					break;
				case "/" :
					if (parseFloat(num2) !== 0) {
						risultato = parseFloat(num1) / parseFloat(num2);
					} else {
						risultato = "Math ERROR";
					}
					break;
				case "" :
					risultato = parseFloat(num1);
					break;
			}
			if (typeof risultato !== "string") {
				/*if (numVirgole === 0) {
					risultato = Math.floor(risultato);
				} else {
					risultato = risultato.toFixed(numVirgole);
				*/
			}
			$("#campo").html(risultato.toString());
			num1 = "";
			num2 = "";
			operatore = "";
			numVirgole = 0;
		}
	});

});