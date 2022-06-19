// o que estudo
const descreve = document.getElementById('description')

function passou_mouse(tec='erro inesperado ocorreu.'){
    const tecnologia = document.getElementById(tec)
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

function saiu_mouse(){
    descreve.innerHTML = '<p>Passe o mouse em cima de um icone para ver a descrição.</p>'
}