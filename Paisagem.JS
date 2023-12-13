function mudarImagem(){
let input = document.getElementById("momento").value.toLowerCase();
let imagem = document.getElementById("imagem");


if (input === "dia" || input === "manha"){
    imagem.src = "manha.avif"
    imagem.alt = "paisagem dia"
} else if (input === "tarde"){
    imagem.src= "tarde.jpg"
    imagem.alt = "paisagem tarde"
} else if(input === "noite"){
    imagem.src = "noite.avif"
    imagem.alt = "paisagem noite"
}}