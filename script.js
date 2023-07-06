function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  
  const image = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    image.setAttribute("src","./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de avatar usando oculos escuros"
    )
  } else {
    image.setAttribute("src", "./assets/avatar-dark.png")
    image.setAttribute("alt", "Foto de avatar usando oculos de lentes corretivas")
  }
}