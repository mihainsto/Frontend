window.onload=function(){
rng=document.getElementById("rng");
rng.onclick = function(){
    max = rng.max;
    min = rng.min;
    curentValue = rng.value;
    med = parseInt((parseInt(max) + parseInt(min)) / 2);
    inputs = document.getElementsByTagName("body");
    for (i=0; i<inputs.length; i++){
        inputs[i].style.fontSize  = String(curentValue) + "px";
        if (curentValue > med){
            inputs[i].style.color =  "red";
        }else{
            inputs[i].style.color =  "black";
        }
    }
  };

var isCheck = 0;
inputs = document.getElementsByTagName("input");
inputs[1].onclick = function(event){
    inputs = document.getElementsByTagName("input");
    inputs[2].checked  = false;
    inputs[3].checked  = false;
}
inputs[2].onclick = function(event){
    inputs = document.getElementsByTagName("input");
    inputs[1].checked  = false;
    inputs[3].checked  = false;
}
inputs[3].onclick = function(event){
    inputs = document.getElementsByTagName("input");
    inputs[1].checked  = false;
    inputs[2].checked  = false;
}

button = document.getElementById("btn");
button.onclick = function(){
    inputs = document.getElementsByTagName("input");
    for (i = 1; i<=3; i++){
        if (inputs[i].checked){
            button.innerHTML = String(inputs[i].parentElement.textContent);
        }
    }

}
}