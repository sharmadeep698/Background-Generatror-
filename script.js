var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.querySelector("body")

function makeColor(){
      body.style.background =("linear-gradient(to right, "+ color1.value +","+color2.value +")" )
    css.textContent = body.style.background;    
}
//console.log(color1,color2,css);
color1.addEventListener("input",makeColor)
color2.addEventListener("input",makeColor); 
