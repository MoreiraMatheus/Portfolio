function ver_senha(){
    let senha = document.getElementById('senha')
    if(senha.type == 'password'){
        senha.type = "Text"
    }
    else{
        senha.type = "password"
    }
}

function entrar(){
    window.alert('botão ok')
    var login = document.getElementById('login')
    var login_user = login.value
    window.alert(login_user)
    // if(login_user == 'admin' && senha_user == 'admin'){
    //     window.alert('bem vindo')
    // }
    // else{
    //     window.alert('usuário não indentificado')
    // }
}