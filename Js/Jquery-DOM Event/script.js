// //Document Object Model EVENT

const ul = $('#text')
ul.mouseenter(function(){
    ul.css('backgroundColor', 'green')
})

const input = $('input')
input.focus(function(){
    input.css('width', '500px')
})