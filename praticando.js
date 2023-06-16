
async function validarEndereco(cep) {
    const erroEndereco =  document.getElementById('erro')
    erroEndereco.innerText = ""
try {
    const validarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const resultadocep = await validarCep.json()
        if (resultadocep.erro) {
            throw Error("Cep Invalido")
           
        }
        const rua = document.getElementById('endereco')
        const bairro = document.getElementById("bairro")
        const cidade = document.getElementById('cidade')
        const uf = document.getElementById('estado')

        rua.value = resultadocep.logradouro
        bairro.value = resultadocep.bairro
        cidade.value = resultadocep.localidade
        uf.value = resultadocep.uf

        console.log(resultadocep)
        return resultadocep
    } catch(erro){
        erroEndereco.innerHTML =`<h2>Cep Invalido!</h2>`
        console.log(erro)
    }   
}

const cep = document.getElementById("cep")
cep.addEventListener('focusout', () => validarEndereco(cep.value))


