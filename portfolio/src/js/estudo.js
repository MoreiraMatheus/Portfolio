// o que estudo
const descreve = document.getElementById('description')

function descreve_tec(tec='erro inesperado ocorreu.'){
    if(tec == 'HTML'){
        descreve.innerHTML = `<p>Tecnologia para estruturar páginas web</p>`
    }
    else if(tec == 'CSS'){
        descreve.innerHTML = `<p>Linguagem para estilização de páginas HTML</p>`
    }
    else if(tec == 'JS'){
        descreve.innerHTML = '<p>Linguagem de programação muito utilizada no desenvolvimento web</p>'
    }
    else if(tec == 'Python'){
        descreve.innerHTML = '<p>Linguagem de programação muito utilizada no back-end principalmente em ciência de dados</p>'
    }
    else{
        descreve.innerHTML = `<p>${tec}</p>`
    }
}

function limpa_descript(){
    descreve.innerHTML = '<p>Escolha uma tecnologia para ver a descrição.</p>'
}