 "use strict";
 let btnConfirm=document.getElementById("btnConfirm");

 btnConfirm.addEventListener('click', function(){
    let inputText= document.getElementById("txtInput");
    let containerText=document.querySelector(".containerText"); //prende sia la classe che l'id
    let loader= document.querySelector(".loader");
    let myString=inputText.value;
    inputText.value='';
    containerText.innerText='';

    if(!myString.trim()==''){   //se ho spazi bianchi non parte il caricamento
        loader.style.display="block"; //fa comparire "caricamento "
        setTimeout(function(){
            loader.style.display="none";
            containerText.innerText=myString; //metto valore nel container
            
        },5000)
    }
 })