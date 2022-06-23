// o que estudo
const descreve = document.getElementById('description')

function descreve_tec(tec='erro inesperado ocorreu.'){
    if(tec == 'HTML'){
        descreve.innerHTML = `<p>linguagem de marcação utilizada na construção de páginas web</p>`
    }
    else if(tec == 'CSS'){
        descreve.innerHTML = `<p>Linguagem de estilização de páginas HTML</p>`
    }
    else if(tec == 'JS'){
        descreve.innerHTML = '<p>Linguagem de programação de alto nivel, voltada para o front-end</p>'
    }
    else if(tec == 'Python'){
        descreve.innerHTML = '<p>Linguagem de programação de alto nivel, voltada para o back-end</p>'
    }
    else{
        descreve.innerHTML = `<p>${tec}</p>`
    }
}

function limpa_descript(){
    descreve.innerHTML = '<p>Escolha uma tecnologia para ver a descrição.</p>'
}