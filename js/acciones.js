// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
$ ('#btndatos').on ('click',function() {
alert('hola');
$('body').pagecontainer("change","#datos",{transition:"flip"});	
//}); 
});//click btndatos

$ ('#btnresultado').on ('click',function() {

$('body').pagecontainer("change","#resultado",{transition:"flip"});	

var peso=$('#txtpeso').val();
var talla=$('#txttalla').val();
alert (peso);
alert (talla);
imc =(peso/(talla*talla));
$('#imc').text('nombre '+ $('#txtnombre').val()+'imc=' + imc);
});//click btnresultado
});//document ready
