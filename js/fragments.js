const fragmentPlay = document.getElementById("content-play");
const fragmentRules = document.getElementById("content-rules");
const sectionPag1 = document.getElementById("secpag-1");
const sectionPag2 = document.getElementById("secpag-2");
const sectionPag3 = document.getElementById("secpag-3");
const sectionPag4 = document.getElementById("secpag-4");
var varSectionPag1 = `<article>
        <h1 id="h1-rules">Regras e tipos de Jogo:</h1>
        
<ul>
    <li class = "li-rules"> <Strong> Sequência Padrão - Repetida adicionando mais um. </Strong> </li>
    <p class="p-pop-rules">
<Strong> Modo para 1 jogador. </Strong>
<br>O Memory começa uma sequência e você deve repeti-la. Ele começa piscando uma luz. 
<br>Você deve clicar sobre esta lente que piscou. 
Na sequência ele piscará esta mesma lente, e piscará mais uma. Então você decora as sequências e deve 
ficar atento sempre à próxima lente que irá ser adicionada. 
<br>Isso se repetirá até o limite de luzes na sequência, sendo o máximo de 48 toques (até a última sequência da fase 3 do nível fácil).
<br>Se você errar uma luz da sequência, ele emitirá um som e terminará o jogo(Game Over).
<br>Você pode também jogar com os amigos, se unindo contra o Memory ou competindo entre si.
    </ul></p>
    <hr>
</article>`;
var varSectionPag2 = `<article>
<ul>
<li class="li-rules"><Strong>Sequência Personalizada - Crie a sua sequência à cada toque</Strong> </li>
<p class="p-pop-rules"><Strong>Quantidade de Jogadores</Strong> 
<br><Strong>1 Jogador:</Strong> 
<br>Neste modo de jogo, o Memory só dá o primeiro sinal. Depois disso você que cria sua própria sequência, 
repetindo o sinal dado, e já incrementando um sinal seu na sequência.
Não espere por mais um toque. 
<br>Logo em seguida, repita a primeira sequência, os dois primeiros sinais incrementando mais um seu novamente. 
E assim por diante, até alcançar a maior sequência possível.

<br>Você também pode jogar com 2 ou mais jogadores nesta modalidade, o que fica mais interessante e exige bastante atenção.
<br>
<br><Strong>2 ou mais Jogadores:</Strong> 
<br>O jogador 1 repete o primeiro sinal e adiciona um.
<br>O jogador 2 repete os dois primeiros e adiciona mais um, e assim por diante na sequência, cada um repetindo 
a sequência anterior e colocando mais um.
<br>Se alguém errar, você pode começar de novo, apenas com os que não erraram até ficar só um, que será o ganhador.
</p></ul><hr>
</article>`;
var varSectionPag3 = `<article>
<ul>
    <li class="li-rules"><Strong>Sequência Aleatória</Strong></li>
    <p class="p-pop-rules">
<Strong>Para jogar Sozinho:</Strong>
<br><Strong>Clique no botão configurações e escolha a sequência aleatória na caixa de seleção.</Strong> 
<br>Esse é um dos menos conhecidos modos de jogar, mas também é bem legal.
<br>O Memory acenderá uma primeira lente. Aí você repete a lente e se acertar espera a próxima sequência. 
<br>Muita atenção na hora de jogar este modo, pois todas as sequências são totalmente diferentes da ultima sequência. 
<br><Strong>Para jogar com 2 ou em dupla com 4 jogadores:</Strong>
<br>Para jogar desta maneira, tanto um contra o outro como em disputa entre duplas, 
basta tirar par ou ímpar e escolher quem vai dar início começando a primeira sequência. 
O Memory repete os sinais como no Jogo 1, com a diferença que todas as sequências são aleatórias.

<br>Aqueles que errarem as cores da sequência, serão os perdedores. 
<br>O Memory automaticamente reconhece o fim de cada fase e avisa que passará para a próxima fase. 
<br>Vencedores preparem-se para as surpresas. 

<br></p></ol><hr>
</article>`;
var varSectionPag4 = `<article>
<ul>
    <li class="li-rules"><Strong>Sequência Aleatória em 2, 3 ou 4 jogadores</Strong></li>
<p class="p-pop-rules">
<Strong>Para jogar em 4.</Strong>  
<br>Cada jogador escolhe uma cor de lente e pressionará apenas a lente desta cor durante todo o jogo. 
<br>Pronto, agora o Memory vai dar o primeiro sinal. O jogador que escolheu esta cor, clica na cor. 
<br>O Memory sempre fará uma sequência aleatória, e cada jogador, assim que perceber que é sua vez 
pressiona apenas a cor que escolheu na sequência.
<br>Se alguém pressionar a sua cor, fora de hora, o Memory anunciará o Game Over e este jogador estará fora da próxima rodada. 
Ganha aquele que restar na partida! 
<br><Strong>Para jogar em 3.</Strong>  
<br>É simples, cada um escolhe sua cor e quando o Memory piscar uma luz, não repita simplesmente esta cor, 
basta ignorá-la e e jogar com apenas 3 cores, e a partir daí é só cada escolher sua cor das 3 restantes e começar a jogar!!!

<br><Strong>2 jogadores:</Strong>  
<br>Também é muito simples, cada jogador escolhe duas cores. Se errar, perde essa cor, e continua apenas com a cor restante. 
Quem ficar sozinho no jogo (com uma ou duas cores) será o ganhador.
<br>
<br>Bem... É isso!!! Tente criar mais modos de jogo e Divirta-se!!! :)
</p></ul>
</article>`;
//---------------------------------------------------------------------
var footerEnd = `<div id="div-p-rules">
<a href = "https://github.com/LucioFrota" target="_blank"> <img src="/img/icoGitHub.png" alt="Name-IconeGitHub" id="img-ico-github"> </a>
<a href= "https://dio.me/" target="_blank"> <img src="/img/icoDio.png" alt="Name-IconeDio" id="img-ico-dio"> </a>
<a href="https://www.linkedin.com/in/lucio-frota/" target="_blank"> <img src="/img/icoLinkedin.png" alt="Name-IconeLinkedin" id="img-ico-Linkedin"> </a>
<p> Super Memory 2022 <a href = "https://www.linkedin.com/in/lucio-frota/" target="_blank"> By Lúcio Frota </a></p>
<p>  <a href="/pages/credits.html"> Credits and Thanks </a></p>
<p> <a href= "https://dio.me/" target="_blank"> Digital Innovation One </a></p></div>`;

var varContentPlay = `<div class= "pop-class" id= "pop-play"> 
<div id ="container-pop-play" > 
<h1 class = "h1-pop-play" style:"color:rgb(68, 111, 206)">Bem vindo ao Super Memory!</h1>
<section class="inf-pop-play">
<p class="p-pop">Este jogo foi baseado no antigo jogo Gênius,
    uma implementação eletrônica da brincadeira Simon Says ("Siga o Mestre"),
    originalmente vendida pela <strong> Milton Bradley. </strong> <br>
    Foi o primeiro jogo eletrônico comercializado no Brasil, fazendo muito sucesso nos anos 80.
    <br> <br>
    O nome Gênius não era muito apropriado a esse jogo já que ele não exige nenhum raciocinio lógico de fato,
    apenas memória e um pouco de reflexo. 
    <br> <br>
    Caso você esteja curioso por mais informações sobre esse e outros jogos da <strong> Milton Bradley </strong>
    <a href= "https://ludopedia.com.br/editora/464/Milton%20Bradley?v=sobre" target="_blank"> Tem um Montão Aqui! </a>
    </p> <hr></section>
    <div class="div-input-group" id= "div-input"> 
   <button class= "btn-play" id="btn-play" type= "button"
    onclick= "playGame(1)"> Jogar </button> </div> </div> </button> </div>`;

const liRules = document.getElementById("aba-2");
let element = document.getElementById("btn-rules");

function contentPlay(num) {
  if (num == 0) {
    fragmentPlay.style.display = "flex";
    document.getElementById("footer-rules").style.display = "none";
    document.getElementById("content-play").innerHTML = varContentPlay;
    document.getElementById("footer-rules").style.display = "flex";
    fragmentRules.style.display = "none";
  } else if (num == 1) {
    fragmentRules.style.display = "flex";
    fragmentPlay.style.display = "none";
    document.getElementById("footer-rules").style.display = "none";
    sectionPag1.innerHTML = varSectionPag1;
  } else if (num == 2) {
    document.getElementById("footer").innerHTML = footerEnd;
    document.getElementById("footer-rules").innerHTML = footerEnd;
  } else if (num == 3) {
    document.getElementById("content-init").style.display = "flex";
    document.getElementById("btn-init").focus();
    fragmentRules.style.display = "none";
    fragmentPlay.style.display = "none";
    document.getElementById("footer").innerHTML = footerEnd;
    document.getElementById("footer-rules").innerHTML = footerEnd;
    document.getElementById("footer-rules").style.display = "flex";
  }
}
var sectionPag = [sectionPag1, sectionPag2, sectionPag3, sectionPag4];
var varSectionPag = [
  varSectionPag1,
  varSectionPag2,
  varSectionPag3,
  varSectionPag4,
];

function subPagination(num) {
  for (let i = 0; i < 4; i++) {
    if (num == i) {
      sectionPag[i].style.display = "flex";
      sectionPag[i].innerHTML = varSectionPag[i];
    } else {
      sectionPag[i].style.display = "none";
    }
  }
}
