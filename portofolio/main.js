function toggleDetail(a) {
    const target = $(a.target)

    if($(target).hasClass('active')){
        $(target).html('More Info').removeClass('active')
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSub(e){
    e.preventDefault()
    const email = $("#inpEmail")
    const subject = $("#inpSubject")
    const message = $("#inpMessage")

    if(!$(email).val()){
        alert("Email is required")
    } else if(!$(subject).val()){
        alert("Subject is required")
    } else if(!$(message).val()){
        alert("Message is required")
    } else{
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}