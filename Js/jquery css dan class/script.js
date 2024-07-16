$(document).ready(function(){
    let h2 = $('h2')
    h2.text('Kamu Adalah')
    h2.append(' <u>Beruk</u>')
    h2.prepend('<i>Woi, </i>')
    h2.after('<b>h2.After</b>')
    h2.before('<i>h2.before</i>')

    //menambahkan Class Menggunakan Query
    // h2.addClass('biru')

    //menghapus Class Menggunkana Query
    // h2.removeClass('biru')

    //Menambahkan Style Menggunakan Query 1
    // h2.css('font-size', '90px')

    //Menambahkan Style Menggunakan Query 2
    let style = {
        color: 'salmon'
}
    h2.css(style)
})

// document.querySelector('h2').classList.add('biru')

//Menambahkan Style menggunakan JS
// document.querySelector('h2').style.color = 'red'