function rolar(caixa){
    const box = document.querySelector(caixa)
    const distanciatop = box.offsetTop
    window.scroll(0, distanciatop - 35)
}

function checkbox(){
    const checkbox = document.getElementById("tema-checkbox");
    
    if(checkbox.checked){
        console.log('tema escuro')
        bolinhaAnimada('escuro')
        temaDark()
    }
    else{
        console.log('tema claro')
        bolinhaAnimada('claro')
        temaLight()
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

function temaDark(){
    const body = document.querySelector('body')
    const header = document.querySelector('header')

    const header_bt = document.querySelectorAll('button')[0]
    const header_bt2 = document.querySelectorAll('button')[1]
    const header_bt3 = document.querySelectorAll('button')[2]
    const header_bt4 = document.querySelectorAll('button')[3]

    const troca_tema = document.getElementById('troca-tema')
    const sobre = document.getElementById('sobre')
    const projetos = document.getElementById('projetos')

    const div_projeto = document.querySelectorAll('.projeto')[0]
    const div_projeto2 = document.querySelectorAll('.projeto')[1]
    const div_projeto3 = document.querySelectorAll('.projeto')[2]
    const div_projeto4 = document.querySelectorAll('.projeto')[3]

    const footer = document.querySelector('footer')

    body.style.backgroundColor = 'var(--escuro-fundo)'
    body.style.color = '#ccc'
    header.style.backgroundColor = 'rgba(80, 80, 80, 0.7)'

    header_bt.style.backgroundColor = 'var(--escuro-destaque)'
    header_bt.style.color = '#ccc'
    header_bt2.style.backgroundColor = 'var(--escuro-destaque)'
    header_bt2.style.color = '#ccc'
    header_bt3.style.backgroundColor = 'var(--escuro-destaque)'
    header_bt3.style.color = '#ccc'
    header_bt4.style.backgroundColor = 'var(--escuro-destaque)'
    header_bt4.style.color = '#ccc'

    troca_tema.style.backgroundColor = 'var(--escuro-destaque)'
    sobre.style.backgroundColor = 'var(--escuro-contraste)'
    projetos.style.backgroundColor = 'var(--escuro-contraste)'

    div_projeto.style.backgroundColor = 'var(--escuro-destaque)'
    div_projeto2.style.backgroundColor = 'var(--escuro-destaque)'
    div_projeto3.style.backgroundColor = 'var(--escuro-destaque)'
    div_projeto4.style.backgroundColor = 'var(--escuro-destaque)'

    footer.style.backgroundColor = 'var(--escuro-destaque)'
}

function temaLight(){
    const body = document.querySelector('body')
    const header = document.querySelector('header')

    const header_bt = document.querySelectorAll('button')[0]
    const header_bt2 = document.querySelectorAll('button')[1]
    const header_bt3 = document.querySelectorAll('button')[2]
    const header_bt4 = document.querySelectorAll('button')[3]

    const troca_tema = document.getElementById('troca-tema')
    const sobre = document.getElementById('sobre')
    const projetos = document.getElementById('projetos')

    const div_projeto = document.querySelectorAll('.projeto')[0]
    const div_projeto2 = document.querySelectorAll('.projeto')[1]
    const div_projeto3 = document.querySelectorAll('.projeto')[2]
    const div_projeto4 = document.querySelectorAll('.projeto')[3]

    const footer = document.querySelector('footer')

    body.style.backgroundColor = 'var(--claro-fundo)'
    body.style.color = 'black'
    header.style.backgroundColor = 'rgba(204, 204, 204, 0.7)'

    header_bt.style.backgroundColor = ''
    header_bt.style.color = ''
    header_bt2.style.backgroundColor = ''
    header_bt2.style.color = ''
    header_bt3.style.backgroundColor = ''
    header_bt3.style.color = ''
    header_bt4.style.backgroundColor = ''
    header_bt4.style.color = ''

    troca_tema.style.backgroundColor = 'var(--claro-destaque)'
    sobre.style.backgroundColor = ''
    projetos.style.backgroundColor = ''

    div_projeto.style.backgroundColor = ''
    div_projeto2.style.backgroundColor = ''
    div_projeto3.style.backgroundColor = ''
    div_projeto4.style.backgroundColor = ''

    footer.style.backgroundColor = ''
}