let vetorN = []
let vetorId = []
let vetorCont = [] 

let res = document.getElementById('res')

function cadastrar(){
    let txtnome = document.getElementById('nome')
    let txtId = document.getElementById('ident')
    let txtCont = document.getElementById('cont')

    let nome = txtnome.value
    let Id = txtId.value
    let cont = txtCont.value
    if (nome === ''|| Id === ''|| cont === ''){
        alert('Preencha todos os dados para cadastrar!')
    }else {
    vetorN.push(nome) 
    vetorId.push(Id)
    vetorCont.push(cont)

    txtnome.value = ''  
    txtId.value =''   
    txtCont.value = ''
    txtnome.focus()
    }           
}
function mostrar(){

    if (vetorN.length === 0 || vetorId.length === 0|| vetorCont.length === 0 ){
        alert('Não há usuarios cadastrados!')
    }else{
        let resultado = `<button onclick="voltar()"> Voltar </button>
                        <h3> Usuarios Cadastrados: </h3>`
    for (let i = 0; i < vetorN.length; i++ ){
        resultado += `<p>
        <strong>Nome:</strong> ${vetorN[i]}<br>
        <strong>Identificação:</strong> ${vetorId[i]}<br>
        <strong>Contato:</strong> ${vetorCont[i]}<br>
        <button onclick="deletar(${i})">Excluir </button>
      </p><hr>`
      }
    res.innerHTML = resultado  
    }
}
function deletar(indice){
    vetorN.splice(indice, 1)
    vetorId.splice(indice, 1)
    vetorCont.splice(indice, 1)
    mostrar()
}
function voltar(){
    res.innerHTML = `
        <p>Cadastrando usuários: </p>
        <p>Nome: <input type="text" name="nome" id="nome"></p>
        <p>Identificação: <input type="number" name="ident" id="ident"></p>
        <p>Contato: <input type="number" name="cont" id="cont"></p>
        <p>
            <input type="button" value="Cadastrar" onclick="cadastrar()">
            <input id="mostrar" type="button" value="Mostrar usuários" onclick="mostrar()">
        </p>:`    
}    
    
    

   

