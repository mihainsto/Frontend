window.onkeydown = function(event){
    if (event.keyCode == 87)
    {
        divs = this.document.getElementsByTagName("div");
        for (i=0; i<divs.length; i++){
            curentDiv = divs[i];
            curentHeight = curentDiv.style.height;
            
            curentDiv.style.height = String(curentDiv.offsetHeight-5) + "px";
        }
    }
    if (event.keyCode == 83)
    {
        divs = this.document.getElementsByTagName("div");
        for (i=0; i<divs.length; i++){
            curentDiv = divs[i];
            curentHeight = curentDiv.style.height;
            
            curentDiv.style.height = String(curentDiv.offsetHeight+5) + "px";
        }
    }
}