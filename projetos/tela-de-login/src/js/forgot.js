function enviar_codigo(){
    var hiden = document.getElementById('escondido')
    var msg = document.getElementById('p')
    var email = document.getElementById('email')
    if(email.value.length == 0){
        window.alert('Digite seu e-mail')
    }
    else{
        msg.style.display = 'block'
        hiden.style.marginBottom = '170px'
    }
}