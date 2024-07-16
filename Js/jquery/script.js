// $(document).ready(function(){
//     console.log($('h2'))
// })

// $(document).ready(function(){
//     let h2 = $('h2')
//     console.log(h2.text('kosong'))
// })

$(document).ready(function(){
    let h2 = $('h2')
    h2.text('Kamu Adalah')
    h2.append(' <u>Beruk</u>')
    h2.prepend('<i>Woi, </i>')
    h2.after('<b>h2.After</b>')
    h2.before('<i>h2.before</i>')

    //untuk mengubah input melalui Jquery
    let input = $('input')
    console.log(input.val('string'))
    
    //untuk mengosongkan h2
    h2.empty()
    //untuk menghapus h2
    h2.remove()
})