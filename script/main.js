const input = document.getElementById('search')
const inputSearch = document.getElementById('inputSearch')
const containerLinks = document.getElementById('linkcontainer');
const erro = document.getElementById('erro');


inputSearch.addEventListener("click", ()=>{
pegaApi(input.value)
input.value = ""
})

async function pegaApi(url) {
 
    try {
        var api = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        var apiConvertida = await api.json()
        var urlCurta = apiConvertida.result.short_link
        erro.innerHTML = "";
        adicionaLink(url, urlCurta)        
    } catch {       
        erro.innerHTML = `Please add a link`
    }

}


function adicionaLink(linkOriginal, linkCurto) {
  let divLinks = 
   containerLinks.innerHTML += `<div class="link__container">
    <div class="link-item" id="url">
      <p id="link-original">${linkOriginal}</p> 
    </div>
    <div class="link-item-convertido">
      <span id="link-convertido">${linkCurto}</span> 
    <button class="button_copy" onclick="copiaTexto(this.previousElementSibling.innerHTML), trocaCorBotaoCopiar(this)">Copy!</button>
    </div>
  </div>`

}


function copiaTexto(linkConvertido) {  
    let texto = linkConvertido;
    navigator.clipboard.writeText(texto)
    console.log(linkConvertido);
}

function trocaCorBotaoCopiar(botao) {  
    botao.style.backgroundColor = "hsl(257, 27%, 26%)"
    botao.textContent = 'Copied!'    
    setTimeout(() => {
      botao.style.backgroundColor = ""
      botao.textContent = "Copy!"
    }, 2000);
}
