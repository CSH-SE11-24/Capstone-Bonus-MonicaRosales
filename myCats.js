let pic1 = document.querySelector("#Pelos")
let pic2 = document.querySelector("#musty")
let light = document.querySelector("#light")
let dark = document.querySelector("#dark")
let body = document.querySelector("#body3")
let texts = document.getElementsByClassName("middle")
let text2 = document.getElementsByClassName("font")

//Mouseover event to change pictures
pic1.addEventListener("mouseover", function(event){
  pic1.src = "pics/pelussa3.jpg"
})

pic1.addEventListener("mouseout", function(event){
  pic1.src = "pics/pelussa2.jpg"
})

pic2.addEventListener("mouseover", function(event){
  pic2.src = "pics/musty2.jpg"
})

pic2.addEventListener("mouseout", function(event){
  pic2.src = "pics/musty3.jpg"
})


//added a dark mode accessibility feature
dark.addEventListener("click", function(event){
  body.style.backgroundColor = "black"

  for(let o = 0; o < texts.length; o++){
    texts[o].style.color = "white"
  }

  for(let x = 0; x < text2.length; x++){
    text2[x].style.color = "white"
  }
  
})

//added light mode feature in case people don't like the dark mode setting

light.addEventListener("click", function(event){
  body.style.backgroundColor = "beige"

  for(let a = 0; a < texts.length; a++){
    texts[a].style.color = "black"
  }

  for(let i = 0; i < text2.length; i++){
    text2[i].style.color = "black"
  }
})