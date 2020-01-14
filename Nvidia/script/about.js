
let x=15;
img = document.getElementById("animationCardImage")
sign = -1
var t
function cardClicked(){
    img.style.top=-40 + "px";
    t=setInterval(function(y){

        position = parseInt(img.style.top)+y * sign
        if (position < -240){
            sign = 1
        } 
        if (position > -41 ){
            sign = -1
        }
        img.style.top=position + "px";
        }
        ,100,x);
        x=x+25;
}
function boardClicked(){
    clearInterval(t)
}
schImages()
function schImages(){

    a = [1,2,3]
    shuffle(a)
    htmlContent = `
      <img src="resources/offices/office`+a[0]+`.jpg">
      <img src="resources/offices/office`+a[1]+`.jpg">
      <img src="resources/offices/office`+a[2]+`.jpg" onclick="lastImageClicked(event)">`
    document.getElementById("officeImages").innerHTML=htmlContent
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function lastImageClicked(event){
    event.stopPropagation();
    var element = document.getElementById("likeFB")
    var style = window.getComputedStyle(element)
    if (style.getPropertyValue('display') == 'none'){
        element.classList.remove("hide")
    }
    else{
        element.classList.add("hide");

    }
}