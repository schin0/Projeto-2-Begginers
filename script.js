function mudaTema() {
    let bgcColor = document.querySelector('body')
    
    if(bgcColor.className == 'cor-fundo') {
        bgcColor.className = 'cor-fundo-escuro'
    } else {
        bgcColor.className = 'cor-fundo'
    }
}

function mudaFooter() {
    let mudaOTema = document.querySelector('footer')
    
    if(bgcColor.className == 'cor-fim') {
        bgcColor.className = 'cor-fundo-escuro'
    } else {
        bgcColor.className = 'cor-fim'
    }

    document.querySelector('#direita').setAttribute('click', mudaFooter())
}