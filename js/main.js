const apiKey = 'a8aeb895d06ece2c3ea03d50af7602fd';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const filmesAlta = document.getElementById('alta');
const imagem = document.getElementById('imagem');

const fetchFilmes = async (url) => {
  const response = await fetch(url);
  return response.json();
}


const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;

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
  console.log(filme);
  
}

carregarFilmesPopulares();


fetch(`${buscar}&query=jogos mortal`)
.then((res) => res.json())
.then((data) => {
    console.log(data.results[5])
    corpo.innerHTML = `<img src="${img}${data.results[0].poster[_path
    }" alt="">`
})
*/
