function rolar(caixa){
    const box = document.querySelector(caixa)
    const distanciatop = box.offsetTop
    window.scroll(0, distanciatop - 35)
}

function tema(){
    const checkbox = document.getElementById("tema-checkbox");
    const body = document.querySelector('body')
    if(checkbox.checked){
        console.log('tema escuro')
        bolinhaAnimada('escuro')
        trocaTema()
        body.style.backgroundColor = 'var(--escuro-fundo)'
    }
    else{
        console.log('tema claro')
        bolinhaAnimada('claro')
        body.style.backgroundColor = 'var(--claro-fundo)'
        trocaTema()
    }
};

function bolinhaAnimada(tema){
    const ball = document.getElementById('ball')
    const imagem_tema = document.querySelector('#ball')
    if(tema == 'escuro'){
        ball.style.animationName = 'direita'
        ball.style.animationDuration = '0.5s'
        ball.style.left = '24px'
        imagem_tema.innerHTML = '<img src="src/img/icons/moon.png" alt="">'
    }
    else if(tema == 'claro'){
        ball.style.animationName = 'esquerda'
        ball.style.animationDuration = '0.5s'
        ball.style.left = '4px'
        imagem_tema.innerHTML = '<img src="src/img/icons/sun.png" alt="">'
    }
    else{
        console.log('erro ao animar bolinha')
    }
}

function trocaTema(){
    console.log('função em desenvolvimento')
}