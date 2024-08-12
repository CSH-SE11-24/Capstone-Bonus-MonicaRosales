let light = document.querySelector("#light")
let dark = document.querySelector("#dark")
let bod1 = document.querySelector("#body1")
let card1 = document.getElementsByClassName("card-body")
let card2 = document.getElementsByClassName("card")
let text = document.getElementsByClassName("mid")
let cardHead = document.getElementsByClassName("card-title")
let cardText = document.getElementsByClassName("card-text")


//added a dark mode accessibility feature 
dark.addEventListener("click", function(event){
  for(let i = 0; i < text.length; i++){
    text[i].style.color = "white"
  }

  bod1.style.backgroundColor = "black"

  //for(let x = 0; x < card2.length; x++){
    //card2[x].backgroundColor.innerHTML = "black"
  //}
})

//added a light mode feature in case people didn't like this dark mode setting

light.addEventListener("click", function(event){
  for(let j = 0; j < text.length; j++){
    text[j].style.color = "black"
  }

  bod1.style.backgroundColor = "beige"
})