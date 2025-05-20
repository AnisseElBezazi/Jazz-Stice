let MenuMobile =document.querySelector(".trait3") /* Bouton avec les 3 traits  */
let Depliant = document.querySelector(".Depliable")/*Menu depliant */
let tr1 = document.querySelector(".tr1")/*Menu depliant */
let tr2 = document.querySelector(".tr2")/*Menu depliant */
let tr3 = document.querySelector(".tr3")

MenuMobile.addEventListener ("click",function(){ /* lorsque qu'on click sur les 3 traits  */
   Depliant.classList.toggle("menu-visible");/*On rajoute au menu depliant une class ccs lui permetant de passer l'opacité a 1 et changer sa position */
    tr1.classList.toggle("rotate-left");
    tr2.classList.toggle("disapear");
    tr3.classList.toggle("rotate-right");
})