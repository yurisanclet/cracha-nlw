/* Anotacoes 
    * A funcao é uma forma de agrupar alguns comandos que daremos a linguagem de programacao
    * Isso abaixo é um objeto.O objeto serve para guardar varios dados que tem alguma correlação dentro de uma unica variavel, a variavel nesse caso é linksSocialMedia.     
        const linksSocialMedia = { 
            github: 'yurisanclet',
            youtube: 'Yuri Santos',
            facebook: 'yurisantos',
            instagram: 'yuri.sanclet',
             twitter: 'yurisanclet'
      É possivel retornar os valores que estao contidos dentro desse objeto utilizando da estrutura: nomevariavel.valorobjeto, por exemplo, linksSocialMedia.github.
        alert(linksSocialMedia.instagram): o ponto serve para buscar alguma coisa dentro do objeto
    
    
    *document.getElementById('userName').textContent
        uss-se o comando document para poder acessar o DOM, o getElement vai informar que eu quero pegar um elemento, o ById vai completar dizendo que eu quero pegar esse elemento identificado pela Id, dentro do parentese sera informado o nome da Id.
     o textContent permite que acessar o conteudo dentro do elemento    
*/

/* Regras para criar o nome de uma variavel
   * Deve ser uma única estrutura  
   * Existem 3 formas de boa pratica para criar o nome de uma variavel
      - 1 forma: camelCase ---> começa escrevendo com minuscula, e quando tem imendar outra palavra deve-se colocar maiuscula.
      - 2 forma: PascalCase ---> a primeira letra é maiuscula, e a primeira letra da proxima palavra tambem é maiuscula.
      - 3 forma: snake_case ---> tudo minuscula, porem as palavras sao separadas por underline

*/

/* 
          O comando userName.textContent faz a mesma coisa que o comando document.getElementById('userName').textContent, porem de maneira mais simplificada. O comando userName.textContent so vai funcionar se o elemento for uma Id. 

          .textContent pode ser usado para acessar o conteudo do HTML pelo DOM, acessando-o pelo DOM
*/
// Na linha 48 eu estou olhando para os filhos da tag ul, os li. O id socialLinks vai identificar minha ul, o children vai fazer com que o programa olhe para os filhos dessa ul.
// na linha 49 a class da li esta sendo guardada na constante social
// na linha 50 eu tenho uma teamplate string nesse formato `https://${social}.com/${linksSocialMedia[social]`
// li.children[0],href é onde esta guardado o link. Esse li.children[0].href esta dizendo para o computador ir na li, procurar o filho dela na posicao 0(nesse caso é o <a></a>), e para pegar o href desse filho
// i++ é a mesma coisa que i = i + 1
// ser humano lê 123456789
// um computador le 0123456789
/*ARROW FUNCTIONS
 como criar funcao: function nomedafuncao(argumentos){
 código}
 A ARROW FUNCTION é uma forma contraida de se criar uma funcao
      argumento => {  a Arrow function é uma função anonima pois ela nao possui um nome

      }  
*/
const linksSocialMedia = {
  github: 'yurisanclet',
  youtube: 'YuriSantos',
  facebook: 'yurisantos',
  instagram: 'yuri.sanclet',
  twitter: 'yurisanclet'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGit.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    }) // quando se tem apenas uma coisa a ser feita dentro da funcao, não há necessidade de abrir e fechar chaves pelo menos na ARROW FUNCTION
  // ele vai bater na url e vai pegar o que ela responder, e dar para a gente
  // o promise que é apresentado pelo comando .then, vai servir para pegar respostas de alguma coisa
  // o retorno da resposta do fetch vai para dentro do then
}

getGitHubProfileInfos()
