const SIMBOLO_LETRA_NAO_ACERTADA = '_';
const SIMBOLO_ESPACO_NA_PALAVRA = '-'
const palavrasDigitadas = new Set();
let counter = 2;
let erros = 1;
let DicaDoJogo = null
const predeterminedWords = {
    '1': { palavra: 'DINOSAUR', dica: 'Animal' },
    '2': { palavra: 'BRAZIL', dica: 'Country' },
    '3': { palavra: 'SMARTPHONE', dica: 'Samsung' },
    '4': { palavra: 'BOTTLE', dica: 'Object' },
    '5': { palavra: 'AUSTRALIA', dica: 'Country' },
    '6': { palavra: 'OCEAN', dica: 'Big and blue' },
    '7': { palavra: 'PANTHER', dica: 'Animal' },
    '8': { palavra: 'POKEMON', dica: 'Anime' },
    '9': { palavra: 'BICYCLE', dica: 'Transport' },
    '10': { palavra: 'CASTLE', dica: 'History' },
}

const predeterminedWordsLength = Object.keys(predeterminedWords).length
let number = Math.floor(Math.random() * predeterminedWordsLength)

function testeDeDica() {
    const url = new URL(window.location.href)

    if (url.searchParams.get("checkBOX") == 'checked') {
        return DicaDoJogo = predeterminedWords[`${number}`]['dica']
    } else {
        return DicaDoJogo = url.searchParams.get("dica");
    }
}

function dicaPalavra() {
    alert(DicaDoJogo)
}


function chooseWord(array, num) {
    return array[`${num}`]['palavra']
}

function recuperarPalavraCorreta() {
    const url = new URL(window.location.href);

    if (url.searchParams.get("checkBOX") == 'checked') {
        return chooseWord(predeterminedWords, number)
    } else {
        return url.searchParams.get("name").toUpperCase();
    }
}


const PALAVRA_CORRETA = recuperarPalavraCorreta();
document.getElementById('word').innerHTML = PALAVRA_CORRETA;

// CRIA UM MAPA PARA CONTROLAR SE A PALAVRA SECRETA JA FOI DESCOBERTA
const resultado = PALAVRA_CORRETA.split('').reduce((acumulado, corrente) => {
    if (corrente === ' ') {
        acumulado.set(corrente, SIMBOLO_ESPACO_NA_PALAVRA);
        return acumulado;
    }
    else {
        acumulado.set(corrente, SIMBOLO_LETRA_NAO_ACERTADA);
        return acumulado;
    }
}, new Map());

function Digitar(letra) {
    const valorDaLetra = letra.toUpperCase();

    palavrasDigitadas.add(letra);
    document.querySelector('.used').innerHTML = Array.from(palavrasDigitadas).join(' - ');

    const aLetraDigitadaEstaInclusaNaPalavra = PALAVRA_CORRETA.includes(valorDaLetra);

    const aindaRestamChances = counter < 8;

    if (!aindaRestamChances) {
        alert('You lost! Click on New Word.');
        return;  // interrompe a execução da função
    }

    if (aLetraDigitadaEstaInclusaNaPalavra) {
        // invoca a function para adicionar a letra na palavr e e troca a imagem da forca
        resultado.set(valorDaLetra, valorDaLetra);
        atualiza();

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

function atualiza() {
    const letrasDoResultado = Array.from(resultado.values());
    const palavraEscondida = PALAVRA_CORRETA.split('').reduce((acumulado, corrente) => {
        return `${acumulado} ${resultado.get(corrente)}`;
    }, '');

    document.querySelector('.secret').innerHTML = palavraEscondida;

    setTimeout(() => {
        const acabou = !letrasDoResultado.some(letra => letra === SIMBOLO_LETRA_NAO_ACERTADA);
        if (acabou) {
            document.querySelector('.answer').style.display = 'flex'
            alert('You WON!');
        }
    }, 300);
}

function changeImage(num) {
    let imagem = document.querySelector('.img')
    return imagem.src = `../img/forca${num}.png`
}


atualiza();
testeDeDica();

