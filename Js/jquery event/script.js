//Jquery Event Listener

$(document).ready(function(){
    let h2 = $('h2')
    h2.text('Kamuuu')
    h2.append(' <u>Append</u>')
    h2.prepend('<i>Salam, </i>')
    h2.after('<b>h2.After</b>')
    h2.before('<i>h2.before</i>')

    let style = {
        color: 'salmon'
}
    h2.css(style)

    let button = $('button')
    let input = $('input')
    let p = $('p')
    
    let counter = true

    /*********************************************************/

    // //Metode Event Menggunakan Javascript
    // button.on('click', function(){
    //     console.log(input.val())
    // })

    // //Metode Event Menggunakan Jquery
    // button.click(function(){
    //     console.log(input.val())
    // })

    /********************************************************/

    //Cara Lama
    // button.click(function(){
    //     if(counter){
    //         p.hide()
    //         counter = false
    //     } else{
    //         p.show()
    //         counter = true
    //     }
    // })

    //  p.hide(700)
    //  p.show(400)
    //  p.toggleClass('Masukkan Class Yang Ingin Dituju)

    //Menggunakan Jquery
    // button.click(function(){
    //     p.toggle(2300)
    //     // p.toggleClass('biru')
    // })

    /********************************************************/
})

// document.querySelector('input').addEventListener('click', function(){
// })