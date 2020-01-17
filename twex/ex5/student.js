window.onclick = function(event){
    mouseX = event.pageX;
    mouseY = event.pageY;
    div = document.createElement("div");
    
    div.style.position ="absolute";
    div.style.left = String(mouseX - 25)+"px";
    div.style.top = String(mouseY - 25)+"px";
    div.classList.add("animat");
    if ((Math.random()%10)*10 < 5){
        div.style.animationName ="miscare1"
    }else{
        div.style.animationName="miscare2"
    }
    
    this.document.body.appendChild(div);
}
