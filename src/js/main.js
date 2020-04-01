let palavrasDigitadas = new Set();
let counter = 2;
let erros = 1;


function hideWord(simbol) {
    this.newWord = word.toUpperCase().split(' ')
    console.log(typeof (word))
    console.log(newWord)
    // faz um .map na palavra e esconde ela trocando os caracteres por _
    this.hideWord = newWord.map(function (a) {
        let nova = a.split('').map(function (b) {
            return simbol
        })
        return nova.join('')
    })
    this.ThisHideWord = hideWord
    return document.querySelector('.secret').innerHTML = ThisHideWord
}

function Digitar(letra) {
    palavrasDigitadas.add(letra);
    document.querySelector('.used').innerHTML = letra;

    const palavraCorreta = document.getElementById('word').innerHTML;
    const aLetraDigitadaEstaInclusaNaPalavra = palavraCorreta.toUpperCase().includes(letra.toUpperCase());

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


hideWord('__ ')

