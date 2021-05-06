var heading = document.createElement('h1')
document.body.append(heading) 
heading.textContent ="Hello World"

for (var i= 0; i < 10 ; i++) {
    var heading = document.createElement('h1')
    document.body.append(heading) 
    heading.textContent ="Hello World"
    heading.style.fontFamily='"Times New Roman", Georgia, Serif"'
}


var paragraph = document.createElement('p')
document.body.append(paragraph) 
paragraph.textContent ="All of this was created wit js"

var number = [1,2,3,4]
var id = document.createElement("ol")
document.body.append(id)
number.forEach(i=>{
    var newDiv = document.createElement('div')
    newDiv.innerHTML = i
    id.appendChild(newDiv)
})



var li = document.createElement('h1')
document.body.append(li) 
li.textContent ='number'

var li = document.getElementById("number   ")


var li = document.querySelectorAll('h1')
document.body.append(li) 
li.textContent =[];