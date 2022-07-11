let carros = []; 
let mensagensErros = [];

function Carro(marca, modelo, ano, cor){ 
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
    
    form.reset(); 
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
   
}

function calcularCarroMaisNovo(carro){
    carro.sort(function(a, b) 
    {
        return a.ano - b.ano
    });
    
    let resultado = carro[carro.length - 1]; 
    return resultado;
}

function calcularCarroMaisVelho(carro){
    carro.sort(function(a, b) 
    {
        return b.ano - a.ano
    });
    
    let resultado = carro[carro.length - 1]; 
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
