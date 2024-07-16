//DOM EVENTS

let p = document.querySelector('p')

let button = document.querySelector('button')
let input = document.querySelector('input')

//Cara 1 'Click'

// button.addEventListener('click', function(){
//    let isi = input.value
//    //p.innerHTML = isi
//    console.log(isi)
// })

//Cara 2 'Click'

// let clickHandler = function(){
//     let isi = input.value
//     p.innerHTML = isi
// }

// button.addEventListener('click', clickHandler)

//Cara Input Live
let clickHandler = function(){
    let isi = input.value
    console.log(isi)
}

// input.addEventListener('input', clickHandler)

button.addEventListener('click', clickHandler)