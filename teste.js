const array1 = 'Filipe Costa'
const array2 = 'Cancellier'

const array1_1 = array1.toUpperCase().split(' ')
const array2_1 = array2.toUpperCase().split(' ')
// console.log(array1_1, array2_1)

let palavraFinal = []

function substituir(array) {
    if (array.length > 1) {
        let arrayFinal = []
        array.forEach((item, index) => {
            arrayMeio = []
            for (let i = 0; i < item.length; i++) {
                arrayMeio.push('__')
            }
            arrayFinal.push(arrayMeio)
        })
        return arrayFinal
    } else {
        array.forEach((item, index) => {
            arrayMeio = []
            for (let i = 0; i < item.length; i++) {
                arrayMeio.push('__')
            }
        })
        return arrayMeio
    }
}

// console.log(substituir(array1_1))
// console.log(substituir(array2_1))

let hidden1 = [ [ '__', '__', '__', '__', '__', '__' ], [ '__', '__', '__', '__', '__' ] ]
let hidden2 = substituir(array2_1)

let value = 'I'

function substituir2(array) {
    if (array.length > 1) {
        array.forEach((item, index) => {
            for (let i = 0; i < item.length; i++) {
                if (item[i] == value && hidden1[index][i] == '__') {
                    hidden1[index][i] = value
                }
            }
        })
        return hidden1
    } //else {
    //     array.forEach((item, index) => {
    //         for (let i = 0; i < item.length; i++) {
    //             if (item[i] == value && hidden1[i] == '__') {
    //                 hiddenNovo[i] = value
    //             } else {
    //                 continue
    //             }
    //         }
    //     })
    //     return hiddenNovo
    // }
}

console.log(substituir2(array1_1))
console.log(hidden1)

