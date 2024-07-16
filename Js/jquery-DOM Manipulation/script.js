//Document Object Model Manipulation


//.html
const el = $('#text')
// console.log(el)
el.html('<h1>RRRRRRRRRRRAaaaaaaaaaaaaaaahhhh</h1>')

//.attribut
const a = $('input')
a.attr('type', 'password')

// add & remove class
el.addClass('red')
el.addClass('yellow')

el.removeClass()

//CSS
// a.css('border', '1px solid yellow')
a.css({
    border: '1px solid aqua',
    backgroundColor: 'yellow'
})