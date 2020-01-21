/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let  minP1=document.getElementById('part-one').getAttribute('data-min');
    let  maxP1=document.getElementById('part-one').getAttribute('data-max');
    let  minP2=document.getElementById('part-two').getAttribute('data-min');
    let  maxP2=document.getElementById('part-two').getAttribute('data-max');
    let  minP3=document.getElementById('part-three').getAttribute('data-min');
    let  maxP3=document.getElementById('part-three').getAttribute('data-max');
    let  minP4=document.getElementById('part-four').getAttribute('data-min');
    let  maxP4=document.getElementById('part-four').getAttribute('data-max');

    let numbP1 = minP1;
    let numbP2 = minP2;
    let numbP3 = minP3;
    let numbP4 = minP4;

    document.getElementById("part-one").innerHTML=numbP1;
    document.getElementById('part-two').innerHTML=numbP2;
    document.getElementById('part-three').innerHTML=numbP3;
    document.getElementById('part-four').innerHTML=numbP4;


    let globalNumber = 460000000;

    document.getElementById("part-one").addEventListener("click", () => {
        if(numbP1 == maxP1){
            numbP1=minP1;
            globalNumber-=39000000;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }
        else{
            numbP1++;
            globalNumber+=1000000;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }
        document.getElementById("part-one").innerHTML=numbP1;
    });
    
    document.getElementById("part-two").addEventListener("click", () => {
        if(numbP2 == maxP2){
            numbP2=minP2;
            globalNumber-=990000;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }
        else{
            numbP2++;
            globalNumber+=10000;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }

        if(numbP2 >= 10){
            document.getElementById("part-two").innerHTML=numbP2;
        }
        else if(numbP2 < 10 && numbP2 != 0){
            document.getElementById("part-two").innerHTML='0'+numbP2;
        }
        else{
            document.getElementById("part-two").innerHTML='0'+0;
        }
    });

    document.getElementById("part-three").addEventListener("click", () => {
        if(numbP3 == maxP3){
            numbP3=minP3;
            globalNumber-=9900;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }
        else{
            numbP3++;
            globalNumber+=100;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }

        if(numbP3 >= 10){
            document.getElementById("part-three").innerHTML=numbP3;
        }
        else if(numbP3 < 10 && numbP3 != 0){
            document.getElementById("part-three").innerHTML='0'+numbP3;
        }
        else{
            document.getElementById("part-three").innerHTML='0'+0;
        }
    });

    document.getElementById("part-four").addEventListener("click", () => {
        if(numbP4 == maxP4){
            numbP4=minP4;
            globalNumber-=99;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }
        else{
            numbP4++;
            globalNumber+=1;
            document.getElementById('target').innerHTML = '+' + globalNumber;
        }

        if(numbP4 >= 10){
            document.getElementById("part-four").innerHTML=numbP4;
        }
        else if(numbP4 < 10 && numbP4 != 0){
            document.getElementById("part-four").innerHTML='0'+numbP4;
        }
        else{
            document.getElementById("part-four").innerHTML='0'+0;
        }
    });


})();
