let carros = []; //array para almacenar os objetos criados
let mensagensErros = [];

function Carro(marca, modelo, ano, cor){ // função construtora aqui definiremos a estrutura de nosso objeto e os parametros que deve ter
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}

let marca = document.querySelector('#input-marca')
let modelo = document.querySelector('#input-modelo')
let ano = document.querySelector('#input-ano')
let cor = document.querySelector('#input-cor')
let lista = document.querySelector('#lista-registro')
let comparacoes = document.querySelector('#comparacoes')
let registroCarroNovo= document.createElement('p')
let registroCarroVelho = document.createElement('p')
let erros = document.querySelector('#erros')

function AdicionarNovoRegistro(){ 
    if (ValidacaoCampo() != 0 ){
    let marcaCarro = marca.value;
    let modeloCarro = modelo.value;
    let anoCarro = ano.value;
    let corCarro = cor.value;
    let carro = new Carro(marcaCarro,modeloCarro,anoCarro,corCarro)
    carros.push(carro);
    let novoCarro = document.createElement('li')
    novoCarro.innerHTML = `Marca: ${marcaCarro} <br> Modelo: ${modeloCarro} <br>Ano: ${anoCarro} <br>${corCarro}`;
    novoCarro.classList.add('list-group-item')
    lista.appendChild(novoCarro);
    // nome.value = ""
    // idade.value = ""
    form.reset(); // serve para resetar os campos do formulario;
    } else {
        erros.textContent = mensagensErros.join(', ')
        erros.classList.add('error')

    }
    
}

function ValidacaoCampo(){
    if(marca.value ==""){
        mensagensErros.push("Campo marca é obrigatorio")
        marca.focus()
        return 0
    }
    if (marca.value.length < 2){
        mensagensErros.push("Campo marca deve ter pelo menos 3 carateres")
    
    }else if (ano.value == ""){
        mensagensErros.push("Campo ano é obrigatorio")
        ano.focus();
        return 0 
    }
   // else if (email.value.indexOf('@')==-1 ||
   // email.value.indexOf('.')==-1 ) {
   //     alert("e-mail inválido") // exemplo de como validar email.
   // }
}

function calcularCarroMaisNovo(carro){
    carro.sort(function(a, b) // o sort funciona para ordenar listas, só serve para strings mas usando essa função conseguimos fazer que ordene numeros támbem, dessa vez de menor a maior;
    {
        return a.ano - b.ano
    });
    
    let resultado = carro[carro.length - 1]; // pegamos o último elemento de nosso array já ordenado de menor a maior, por ser o último elemento quer dizer que estamos escolhendo o valor maior ou a pessoa mais velha da lista;
    return resultado;
}

function calcularCarroMaisVelho(carro){
    carro.sort(function(a, b) // o sort funciona para ordenar listas, só serve para strings mas usando essa função conseguimos fazer que ordene numeros támbem, dessa vez de maior a menor;
    {
        return b.ano - a.ano
    });
    
    let resultado = carro[carro.length - 1]; // pegamos o último elemento de nosso array já ordenado de maior a menor, por ser o último elemento quer dizer que estamos escolhendo o valor menor ou a pessoa mais jovem da lista;
    return resultado;
}


function MostrarCarroMaisNovo() { 
     let carroMaisNovo = calcularCarroMaisNovo(carros);
     registroCarroNovo.textContent =  `O Carro mais novo é: Marca: ${carroMaisNovo.marca} Modelo: ${carroMaisNovo.modelo} ano: ${carroMaisNovo.ano} Cor: ${carroMaisNovo.cor}`
     comparacoes.appendChild(registroCarroNovo)
     return 
  }

  function MostrarCarroMaisVelho() {
    let carroMaisVelho = calcularCarroMaisVelho(carros); 
    registroCarroVelho.textContent = `O Carro mais velho é:  Marca: ${carroMaisVelho.marca} Modelo: ${carroMaisVelho.modelo} ano: ${carroMaisVelho.ano} Cor: ${carroMaisVelho.cor}`
    comparacoes.appendChild(registroCarroVelho)
    return
 }
 
 document.querySelector('#btn-submit').addEventListener('click',function(evt){
    evt.preventDefault();
 } )
 document.querySelector('#btn-submit').addEventListener('click',AdicionarNovoRegistro)

 document.querySelector('#btn-submit').addEventListener('click',MostrarCarroMaisNovo)

 document.querySelector('#btn-submit').addEventListener('click',MostrarCarroMaisVelho)
 document.querySelector('#btn-submit').addEventListener('click',ValidacaoCampo)

//FIM
