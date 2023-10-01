const menu = document.querySelectorAll(".item")
let total = 0

let carrinho = []

function adicionarItem(nome, preco) {
    this.nome = nome
    this.preco = parseFloat(preco.substr(2))
}

const addChart = product => {
    carrinho.push(product)
}

const addProductList = (selector, product) => {
    const listaItensDOM = document.querySelector(selector)
    listaItensDOM.innerHTML += `<li>${product.nome}</li>`
}

const updateDisplay = (selector, value) => {
    const valorTotalDom = document.querySelector(selector)
    valorTotalDom.innerHTML = value
}

menu.forEach(item => {

    item.addEventListener("click", () => {
        const nomeItem = item.querySelector("figcaption").textContent
        const precoItem = item.querySelector("span").textContent
        const produtoSelecionado = new adicionarItem(nomeItem, precoItem)
        console.log(`Produto Escolhido: ${produtoSelecionado.preco}`)

        //adicionar no carrinho
        addProductList(".itens", produtoSelecionado)

        //salvar no localStorage
        addChart(produtoSelecionado)
        localStorage.setItem("Carrinho", JSON.stringify(carrinho))

        //somar valor total
        total += produtoSelecionado.preco
        updateDisplay(".total", total)
    })
})


//Pegar os itens salvos e exibir na tela


let produtosSalvos = JSON.parse(localStorage.getItem("Carrinho"))

produtosSalvos.forEach(produto => {
    addChart(produto)
    addProductList(".itens", produto)

    total += produto.preco
    updateDisplay(".total",total)
})