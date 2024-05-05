let buyf = false
function buy(){
    if(!buyf){
   
    document.getElementById("btm").style.background="green"
    document.getElementById("btm").innerHTML="добавлено в корзину"
    buyf=true;
}
else{
   
    document.getElementById("btm").style.background="gray"
    document.getElementById("btm").innerHTML="Купить"
    buyf=false;
}
}






