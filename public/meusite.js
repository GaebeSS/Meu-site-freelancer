console.log('site.js')

const listaDeHabilidades = ['HTML', 'CSS', 'JavaScript', 'Python', 'Bootstrap'];

function elementoHabilidade(texto) {
    const elementopai = document.createElement('div');
    elementopai.classList.add('col-6');
    elementopai.classList.add('col-md-4');
    elementopai.classList.add('mb-3');
    elementopai.classList.add('p-2');


    const elemento = document.createElement('div');
    elemento.className = 'habilidade-item';
    //elemento.classList.add('col-6');
    elemento.innerHTML = '<p>' + texto + '</p>';

    elementopai.appendChild(elemento);
    return elementopai;
}

listaDeHabilidades.forEach(function (habilidade){
    const elemento = elementoHabilidade(habilidade);
    document.getElementById('habilidade-lista').appendChild(elemento);
});

const listaDeProjetos= [
    {
        nome: 'Criador de dados fakes',
        descricao: 'Criador de dados fakes usando python',
        link:'https://github.com/GaebeSS/criador-de-dados-fakes'
    }, 
     {
        nome: 'Site freelancer',
        descricao: 'Esse site no github',
        link:'https://github.com/GaebeSS/Meu-site-freelancer'
    }, 
 
]

function projetolista(projeto) {
    const nomePai = document.createElement('div');
    nomePai.classList.add('col-6');
    nomePai.classList.add('col-lg-3');
    nomePai.classList.add('mb-4');
    
    return nomePai;
}
listaDeProjetos.forEach(function (projeto) {
    const tudo = document.createElement('div');
    tudo.classList.add('col-6', 'col-lg-4', 'mb-4','card'); // Classes do grid do Bootstrap

    const elemento = projetolista(projeto.elemento);
    elemento.className = 'card-body bg-light text-dark p-3';

    elemento.innerHTML = '<h3>' + projeto.nome + '</h3>' +
        '<p>' + projeto.descricao + '</p>' + '<a>' + projeto.link + '</a>';

    const descricao = elemento.querySelector('p');
    descricao.className = 'card-text';
    descricao.innerText = projeto.descricao;

    const titulo = elemento.querySelector('h3');
    titulo.className = 'card-title';
    titulo.innerText = projeto.nome;

    const link = elemento.querySelector('a');
    link.className = 'text-decoration-none text-center';
    link.href = projeto.link;
    link.innerText = 'Acessar Projeto';
    link.target = '_blank';

    // Adiciona o card (elemento) dentro da div "tudo"
    tudo.appendChild(elemento);

    // Adiciona a div "tudo" (com o card dentro) ao container principal
    document.getElementById('projeto-lista').appendChild(tudo);
});
