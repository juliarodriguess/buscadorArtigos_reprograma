const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest();
  respostaDaBusca.open("GET", `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaGif()}&api_key=aa20db39f85244a2ac443968f64710bc`);
  respostaDaBusca.onload = carregaPostsComGifs;
  respostaDaBusca.onerror = erro;
  respostaDaBusca.send();


}

function carregaPostsComGifs(){
  listaGifs = JSON.parse(this.responseText)["response"]["docs"];
  exibePosts();

}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGifs.map(artigo => `
        <div class="gif">
          <p>"${artigo.headline.main}"></p>
        </div>
        `).join("")}
      </div>`;
}
  


