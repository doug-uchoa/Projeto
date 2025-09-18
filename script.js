function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pegar a tag img 
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if(html.classList.contains("light")){
    // light mode
    img.setAttribute("src", "./assest/avatar-light.png")
  } else { 
    //normal mode
    img.setAttribute("src","./assest/avatar.png")
  }

  
 

} 



  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }
     /*traduzindo, é um código boleano se tiver o light em HTML  ele apresente verdadeiro.  */
    /*se a condição for verdadeira ela entra no código */
    /*mas você pode fazer todo esse código de verdadeiro ou falso de forma simples. */