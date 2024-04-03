let vetor = []
for (let posicao = 0; posicao < vetor.length; posicao++) {
    console.log(vetor[posicao])
}
let formContato = document.getElementById('form-contato')
let divLista = document.getElementById('lista')
let nome = []
let email = []
let telefone = []
let assunto = []
let msg = []

//Inserindo dados nos meus arrays
formContato.addEventListener("submit", (event) => {
    event.preventDefault();
    nome.push(formContato.nome.value);
    email.push(formContato.email.value);
    telefone.push(formContato.telefone.value);
    assunto.push(formContato.mensagem.value);
    gerarLista()
})
function gerarLista() {

    let auxiliarLista = "";

    for (let posicao = 0; posicao < nome.length; posicao++) {
        
        auxiliarLista += `<div class="card">       
                        <div class="dados-label">
                          <div> Nome completo:</div>
                          <div>${nome[posicao]}</div>
                        </div>
                        <div class="dados-label">
                          <div> Telefone:</div>
                          <div>${telefone[posicao]}</div>
                         </div>
                        <div class="dados-label">
                          <div> Email:</div>
                          <div>${email[posicao]}</div>
                        </div>
                        <div class="dados-label">
                          <div> assunto:</div>
                          <div>${assunto[posicao]}</div>
                        </div>
                        <div class="dados-label">
                          <div> Mesagem:</div>
                          <div>${msg[posicao]}</div>
                        </div> ` 
    }
    divLista.innerHTML = auxiliarLista;
}