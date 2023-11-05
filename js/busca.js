const Url = 'https://api.themoviedb.org/3/search/movie'
const Key = '?api_key=a8aeb895d06ece2c3ea03d50af7602fd';

const buscado = document.getElementById('pesquisa');
const botao = document.getElementById('btn');



const conteinerFilmes = document.getElementById('filmesBuscados')
const  fetchBusca = async (url) =>{
    const response = await fetch(url);
    return response.json();
}


botao.addEventListener('click',async function fazerBusca(){
    const { results } = await fetchBusca(`${Url}${Key}&language=pt-BR&query=${buscado.value}`);
    console.log(results)
    renderizarBusca(results)
})

function renderizarBusca(filmes) {
    conteinerFilmes.innerHTML = "";
   
    filmes.forEach(filme => {

        
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
        conteinerFilmes.appendChild(cartao)
    });
  

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



