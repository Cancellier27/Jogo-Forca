let palavrasDigitadas = []
let counter = 2
let erros = 1
const word = document.getElementById('word').innerHTML
const WORD = word.toUpperCase()

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
    // Adicionar a Letra já digitada ao array de letras usadas
    palavrasDigitadas.push(letra)

    let unico = palavrasDigitadas.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    document.querySelector('.used').innerHTML = unico

    // invoca a function para adicionar a letra na palavre e troca a imagem da forca
    if (WORD.indexOf(letra) >= 0 && counter < 8) {
        botaLetra(letra)
    } else if (counter < 8) {
        changeImage(counter)
        document.querySelector('.erros').innerHTML = erros
        counter += 1
        erros += 1
    } else {
        alert('Você Perdeu! Clique em recomeçar.')
    }

    if (erros == 7) {
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

