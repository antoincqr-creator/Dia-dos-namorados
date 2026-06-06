window.onload = function(){

    const mensagem = this.document.querySelector('#mensagem');
    const imagens = [
        "EuEela.png",
        "print.png",
        "print2.png",
        "print4.png",
        "print5.png",
        "print6.png",
        "PapelDeParede.jpeg",
        "print7.jpeg",
        "print8.jpeg",
        "print9.jpeg",
        "print10,jpeg"
    ];

    let index = 0;
    const bg = document.querySelector(".background");

    function trocarFundo(){
        bg.style.backgroundImage = "url('" + imagens[index] + "')";
        index = (index + 1) % imagens.length;
    }

    trocarFundo();
    setInterval(trocarFundo, 3000);
}

const musica = new Audio('UmAmorPuro.mp3');

musica.loop = true;

musica.volume = 0.4

function tocarMusica(){
    musica.play().catch(function(error){
        console.log("O navegador bloqueou a música, mas eu improviso kkkk");
    });
}
tocarMusica();

document.addEventListener('click', function(){
    tocarMusica();
}, {once: true});