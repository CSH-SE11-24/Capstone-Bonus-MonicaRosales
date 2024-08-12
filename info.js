let text = document.getElementsByClassName("text")
let light = document.querySelector("#light")
let dark = document.querySelector("#dark")
let bod2 = document.querySelector("#body2")
let texts = document.getElementsByClassName("text2")


//Light mode feature for the button when clicked
light.addEventListener("click", function(event){
  for(let j = 0; j < text.length; j++){
    text[j].style.color = "black"
  }

  for(let x = 0; x < texts.length; x++){
    texts[x].style.color = "black"
  }

  bod2.style.backgroundColor = "beige"
})


//dark mode feature when button is clicked
dark.addEventListener("click", function(event){
  for(let i = 0; i < text.length; i++){
    text[i].style.color = "white"
  }

  for(let y = 0; y < texts.length; y++){
    texts[y].style.color = "white"
  }

  bod2.style.backgroundColor = "black"
})