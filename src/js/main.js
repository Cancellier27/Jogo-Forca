let palavrasDigitadas = new Set();
let counter = 2;
let erros = 1;

function recuperarPalavraCorreta(){
    var url = new URL(window.location.href);

    return url.searchParams.get("name").toUpperCase();
}

const PALAVRA_CORRETA = recuperarPalavraCorreta();
document.getElementById('word').innerHTML = PALAVRA_CORRETA;

function esconderPalavraCorreta(simbolo) {
    const letrasDaPalavraCorreta = PALAVRA_CORRETA.split('');

    const palavraEscondida = letrasDaPalavraCorreta
        .map(() => simbolo)
        .join(' ');

    return document.querySelector('.secret').innerHTML = palavraEscondida;
}

function Digitar(letra) {
    palavrasDigitadas.add(letra);
    document.querySelector('.used').innerHTML = Array.from(palavrasDigitadas).join(' - ');

    const aLetraDigitadaEstaInclusaNaPalavra = PALAVRA_CORRETA.includes(letra.toUpperCase());

    const aindaRestamChances =  counter <8;

    if(!aindaRestamChances){
        alert('Você Perdeu! Clique em recomeçar.');
        return;  // interrompe a execução da função
    }

    if(aLetraDigitadaEstaInclusaNaPalavra){
        // invoca a function para adicionar a letra na palavre e troca a imagem da forca
        botaLetra(letra);

        return; // interrompe a execução da função
    }

    changeImage(counter);

    document.querySelector('.erros').innerHTML = erros;
    counter += 1;
    erros += 1;

    if (erros === 7) {
        document.querySelector('.answer').style.display = 'flex'
    }
}

function botaLetra(letra) {
    let wordSecret = document.querySelector('.secret').innerHTML
    console.log(typeof(wordSecret))
    console.log(wordSecret)
    console.log(wordSecret[18])

    





    // // Adicionar a letra, caso certa, digitada a palavra segredo
    // newWord.forEach(function (nome, indice, array) {
    //     for (let i = 0; nome.length > i; ++i) {
    //         if (nome[i] == valor) {
    //             console.log(valor)
    //         } else if (nome[i] != valor) {
    //             changeImage(counter)
    //             // console.log("imagem")
    //         }
    //     }
    // })

}

function changeImage(num) {
    let imagem = document.querySelector('.img')
    return imagem.src = `../img/forca${num}.png`
}


esconderPalavraCorreta('_');

