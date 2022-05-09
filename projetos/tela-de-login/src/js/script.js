function ver_senha(){
    var senha = document.getElementById('senha')
    if(senha.type == 'password'){
        senha.type = "Text"
    }
    else{
        senha.type = "password"
    }
}