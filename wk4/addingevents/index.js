console.log ("index.js")
var square= document.createElement("div")
square.textContent= "Welcome to my box"
document.body.appendChild(square)

square.style.height="200px"
square.style.width="200px"
square.style.border="100px solid blue"
square.style.background="white"

window.addEventListener("load",function(){
// change color 
console.log("black")
square.style.backgroundColor="black"

})

