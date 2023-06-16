   // vamos fazer uma requisição para API ViaCep
  //const cep = "09402620"
  // feito: inferno de then, codigo para várias requisições agora falta o alto complit

async function validarEndereco(cep) {
    const mensagemErro = document.getElementById("erro")

    try {
    const validaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const cepValido = await validaCep.json()
        if (cepValido.erro) {
            throw Error("Cep invalido")
        }
        const endereco = document.getElementById("endereco")
        const bairro = document.getElementById("bairro")
        const cidade = document.getElementById("cidade")
        const uf = document.getElementById("estado")

        endereco.value =  cepValido.logradouro
        bairro.value = cepValido.bairro
        cidade.value = cepValido.localidade
        uf.value = cepValido.uf
        
    console.log(cepValido)
    }catch(erro){
        mensagemErro.innerHTML = `Cep invalido!`
        console.log(erro)
    }
}

const cep = document.getElementById("cep")
cep.addEventListener("focusout", () => validarEndereco(cep.value))
















/* ====================  Aprendizado: ================================ 
    Fluxo de eventos do JS 
    Consumo de API
    Tratar dados retornados de API
    Manipulaçao de elementos 

*/



  // alto complit > preciso de chamar a api viaCep, fazer requisição e solicitação
    // reber promises e os responses onde pode ser positivo ou negativo
    // de cliente para api e para servidor
    // com then, cath e finally tratar os dados
    // Exercicio > Fazer o inferno de THEN, codigo para várias requisições e por ultimo alto complit
    
    

/* ====================  Alto Complit: ================================ 

*/
/* ====================  Promisses All: ================================
      Promisse.All serve para fazermos várias requisisções ao mesmo tempo!

         async function validaCep(cep) {
    try{
    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const verificarCep = await consultaCep.json()
        if (verificarCep.erro) {
            throw Error("Cep Invalido")
        } 
            console.log(verificarCep)
            return verificarCep
        } 
            catch(erro){
            console.log(erro)
        }
   }
   validaCep()
   const ceps = ['09402620', '09402620']
   const consjuntoCeps = ceps.map( valores => validaCep(valores))
   console.log(consjuntoCeps)
    Promise.all(consjuntoCeps).then(res => console.log(res)) 
*/

// Estudar mais sobre Arrow Functions
// THIS

/* Outra maneira de fazer um código Assincrono

    const cep = "09402690"
const consultaCep = fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(Response => Response.json()).then(r => {
    
        if (r.erro) {
          throw Error ("Cep invalido")
        } else {
            console.log(r)
        }
    })
.catch(erro => console.log(erro , ' Errooo')).finally(finalizando => console.log("Finalizado"))

*/

/* ====================  REQUISIÇÕES: ================================
// Branstorme????
Nesse caso usamos o método Fetch > Ele é Assincrono onde vai retornar uma PROMOSE (PROMESSA) do tipo response
Promises > Ela pode ser resolvida ou rejeitada onde métodos assincronos podem ser tornar sincronos


*/

/* ===  API ====== 
É a comunição de entre 2 componentes de software, exemplo:  Cliente => solicitação API =>  Servidor  
                                                            Cliente <= resposta    API <=  Servidor  
  */ 
/* ====================  CALL BACK: ================================

Funções que são enviadas como paramêtros para outras funções
Podemos usar:
 setTimeout()
 function name(function name(params)) => paramentro de outra função
 
 As mais usadas são as questões de requisições

*/



/* ====================  Event Loop e Assicrona: ================================
/* ** JavaScritpt é um sitema Assincrona ***
 Como funciona os codigos ASSINCRONOS onde o Event Loop envia cada código para
1°  Call Stack > os codigos que estão em CALLBACK (setTimeout())
2°   todos os codigos em call Back são enviados para o TASK QUEUE e depois retorna na tela

Usando o setTimeout(codigo, 5000) > temos dentro uma função de CALL BACK 

Como funciona os codigos SINCRONOS onde o Event Loop envia cada código para
1°  Call Stack > Um codigo por vez e depois sai

*/

//  ====================  Assincrono: ================================
// Assincrono:
/*
console.log('Mandando oi para o amigo')

function mandaMensagem() {
    console.log('Oi, tudo bem!')
    console.log("Vou te mandar uma solicitação")
    console.log('recebi')
}

mandaMensagem()

 console.log('Blz, valeuu!')
 */

 /* ====================  10 Heuristica de Nielsen: ================================ 
   1- Visibilidade do status do Sistema: O sistema tem manter o usuário informado:
   Exemplo: Sistema de compra por checkList > Esolha do produto -> Carrinho -> Efetuar Pagamento
   Dessa forma mostra: o que ele fez, o que está fazendo e o que ele fara a seguir

   2- Compatibilidade entre o sistema e o mundo real: Sistema deve se comunicar com o USUÁRIO.
   Exemplos: Icones e frases que façam sentido para guiar o usuario

   3- Controle e Liberdade para o usuario: Quando o usuario aperta um botão errado é importante ele 
   poder voltar sem desespero

   4-Consistencia e Padronização: Manter o site sempre no mesmo padrão sem perder a identidade
    nosso cerebro está acostumado com padrões.
   
    5-Prevenção de Erros: Fazer com que o usuário não cometa erros acidentais.
    Exemplo: se for apagar algum arquivo o sistema perguntar 2 vezes se ele tem certeza da acção!

    6- Reconhecimento invez de memorização: Ao fornecer um serviço é importante o usuário reconhecer
    Exemplo: Lisboa é a capital de Portugal?  isso ajuda e fica mais facil a compreender.

    7- Eficiencia e flexibilidade de uso: A aplicação tem que ser para usuarios leigos e experientes.
    Usuarios leigos: para chegar ao resultado final demanda alguns passos, informações e detalhes.
    Usarios experientes: Já não precisa de tantas informações. 

    8- Estetica e Design minimalista: Não deixe seu site com muitas informações estetica Limpa!!
    Apenas coisas importantes.

    9- Usuarios a reconhecerem, diagniscarem e recuperarem-se de erros: 
    Exemplo: Ao preencher um formulario onde o cep está errado e fica vermelho e informado o erro

    10- Ajuda e documentação: O usuário ter acesso a ajuda quando precisar e documentação com facilidade
    
    Link: https://www.youtube.com/watch?v=5VOLwv5spi8

    As teorias de Nielsen não substitui o teste de usabilidade!!!!!
*/