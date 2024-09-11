function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa", "sem-resultado");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
      section.innerHTML = '<div class="sem-resultado">Nenhum resultado foi encontrado.</div>';
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    //Inicializa uma string vazia para armazenas os resulados 
    let resultados = ""; 
    let titulo = "";
    let tags = "";

  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      
      // Cria um novo elemento para cada resultado
      resultados += `
       <div class="item-resultado">
                <a href="${dado.link}">
                    <img src="${dado.imagem}" class="imagem-resultado" alt="C# para Iniciantes">
                    <div class="info-block">${dado.info}</div>
                </a>
                <h3>${dado.titulo}</h3>
        </div>
      `;
    
  }
}
// Se não houver resultados, mostra a mensagem de "Nenhum resultado encontrado"
if (resultados === "") {
    section.innerHTML = '<div class="sem-resultado">Nenhum resultado encontrado.</div>';
} else {
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

  }

  function obterParametroDaConsulta(id) {
    const parametrosDaUrl = new URLSearchParams(window.location.search);
    return parametrosDaUrl.get(id);
}

function carregarInformacao() {
    const idLivro = obterParametroDaConsulta('id');
    const livro = livros[idLivro];
    if (livro) {
        document.getElementById('livro-titulo').textContent = livro.titulo;
        document.getElementById('livro-autor').textContent = livro.autor;
        document.getElementById('livro-descricao').textContent = livro.descricao;
        document.getElementById('livro-imagem').src = livro.imagem;
    } else {
        document.getElementById('livro-titulo').textContent = 'Livro não encontrado';
    }
}

function voltar() {
    window.history.back();
}

window.onload = carregarInformacao;

    function atualizarResultados(livros) {
        const container = document.getElementById('livros');
        container.innerHTML = ''; // Limpa o conteúdo atual
        livros.forEach(livro => {
            const link = document.createElement('a');
            link.href = `informacoes.html?id=${livro.id}`;
            link.textContent = livro.titulo;
            container.appendChild(link);
        });
    }

