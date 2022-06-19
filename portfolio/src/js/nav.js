function rolar(caixa){
    const box = document.querySelector(caixa)
    const distanciatop = box.offsetTop
    window.scroll(0, distanciatop - 35)
}

function tema(){
    const checkbox = document.getElementById("tema-checkbox");
    if(checkbox.checked){
        console.log('tema escuro')
    }
    else{
        console.log('tema claro')
    }
};