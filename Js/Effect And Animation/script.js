//Effect And Animation Jqurery

const btnshow = $('#show')
const btnhide = $('#hide')
const btnFadeIn = $('#FadeIn')
const btnFadeOut = $('#FadeOut')
const btnToogle = $('#toogle')

const div = $('div')

btnshow.click(function(){
    div.show('fast')
})

btnhide.click(function(){
    div.hide('slow')
})

btnFadeIn.click(function(){
    div.fadeIn('slow')
})

btnFadeOut.click(function(){
    div.fadeOut('slow')
})

btnToogle.click(function(){
    // div.toggle('slow')
    div.slideToggle('slow')
})