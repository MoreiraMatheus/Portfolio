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
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')
    var login_user = login.value
    var senha_user = senha.value

    if(login_user.length == 0 || senha_user.length == 0){
        if(login_user.length == 0){
            window.alert('digite seu login')
        }
        if(senha_user.length == 0){
            window.alert('digite uma senha')
        }
    }
    else{
        if(login_user == 'admin' && senha_user == 'admin'){
            location.href = 'bem-vindo.html'
        }
        else{
            window.alert('login ou senha incorretos')
        }
    }
}

function nome_user(){
    // encontrar uma maneira de dizer o nome do usuário ao carregar página
    var local = location.href 
    if(document.URL == 'bem-vindo.html'){
        window.onload = window.alert('estou funcionando')
    }
    // var bv = document.getElementById('bem-vindo')
    // bv.innerHTML += 'user'
    // login_user
}