const apiKey = 'a8aeb895d06ece2c3ea03d50af7602fd';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const filmesAlta = document.getElementById('alta');
const imagem = document.getElementById('imagem');


//------------------------------------------------------------------//

const paginaDoFilme = document.getElementById('info')
const pagina = document.getElementById('infos')
const tituloFilme = document.getElementById('titulo')
const dataFilme = document.getElementById('Data')
const imagemPagina = document.getElementById('imagemPagina')
const sinopse = document.getElementById('sino')

//------------------------------------------------------------------//


const fetchFilmes = async (url) => {
  const response = await fetch(url);
  return response.json();
}


const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&query${pesquisa.value}`;

async function carregarFilmesPopulares() {
  try {
    const { results } = await fetchFilmes(popularUrl);
    renderizarFilmes(results);
  } catch (error) {
    console.error('Erro ao carregar filmes populares:', error);
  }
}

function renderizarFilmes(filmes) {
    for(let i = 0; i < 7; i++){
        const filme = filmes[i];
        const cartao = document.createElement('div');
        cartao.className = 'cartao'
        
        const img = document.createElement('img');
        img.className = 'img'
        img.src = `${imgBaseUrl}${filme.poster_path}`
        img.alt = filme.title;

        img.addEventListener('click', () =>{
            render(filme)
        })

        cartao.appendChild(img);
        filmesAlta.appendChild(cartao)

    }

}

function render(filme) {

  pagina.className = 'existe';

  tituloFilme.innerHTML = "";

  const nomeFilme = document.createElement('h1');
  nomeFilme.textContent = `${filme.title}`
  tituloFilme.innerHTML = "";
  tituloFilme.appendChild(nomeFilme)

  const lancamento = document.createElement('p');
  lancamento.textContent = `Data de Laçamento ${filme.release_date}`
  lancamento.className = "lacamento"
  dataFilme.innerHTML = "";
  dataFilme.appendChild(lancamento)

  const poster = document.createElement('img');
  poster.src = `${imgBaseUrl}${filme.poster_path}`
  poster.className = "imagemPoster"
 imagemPagina.innerHTML = "";
 imagemPagina.appendChild(poster)

 const resumo = document.createElement('p');
  resumo.textContent = `${filme.overview}`
 sinopse.innerHTML = "";
 sinopse.appendChild(resumo)

  
}

//---------------------------------------------------------------------------



carregarFilmesPopulares();









/* 

fetch(`${buscar}&query=jogos mortal`)
.then((res) => res.json())
.then((data) => {
    console.log(data.results[5])
    corpo.innerHTML = `<img src="${img}${data.results[0].poster[_path
    }" alt="">`
})
*/