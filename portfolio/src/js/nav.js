function rolar(caixa){
    const box = document.querySelector(caixa)
    const distanciatop = box.offsetTop
    window.scroll(0, distanciatop - 35)
}