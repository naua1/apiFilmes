const apiKey = 'a8aeb895d06ece2c3ea03d50af7602fd'
const corpo = document.getElementById('corpo')
const nomeFilme = document.getElementById('pesquisa')
const popular = `https://api.themoviedb.org/3/movie/popular?api_
key=${apiKey}&language=pt-BR`
const buscar = `https://api.themoviedb.org/3/search/movie?api_
key=${apiKey}&language=pt-BR&query=${nomeFilme.value}`
const img = 'https://image.tmdb.org/t/p/w500/'
const infos = document.getElementById('infos')
const btn = document.getElementById('btn')

const titulo = document.getElementById('titulo')
const NotasDatas = document.getElementById('nD')
const sino = document.getElementById('sino')
const filmesAlta = document.getElementById('alta')
const botoesAlta = document.querySelectorAll('.btn_alta');



 const fetchFilmes  = async (param) =>{
    const res = await fetch(`${param}`)
    return res.json()
}

async function alta() {
    let link = await fetchFilmes(popular)
    console.log(link.results)
  
     for(let i = 0; i <= 6;i++){
        filmesAlta.innerHTML += `<div id='${i}' class="cartao">
         <img class="img " onclick=render(${link},${ i}) src="${img}${link.results[i].poster_path}" alt=""> </div>`

    }
   
}

function render(param, nun){
  console.log(param);
  console.log(nun)
  
 
 }
 
alta();


/*

fetch(`${buscar}&query=jogos mortal`)
.then((res) => res.json())
.then((data) => {
    console.log(data.results[5])
    corpo.innerHTML = `<img src="${img}${data.results[0].poster[_path
    }" alt="">`
})
*/