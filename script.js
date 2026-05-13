function carregar() {
    var mensagem = document.querySelector('#mensagem')
    var imagem = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 6 && hora < 12) {
        document.body.style.background = '#657092'
        imagem.src = 'images/manhã.jpg'
    } else if (hora >=12 && hora < 18) {
        document.body.style.background = '#946265'
        imagem.src = 'images/tarde.jpg'
    } else {
        document.body.style.background = '#101829'
        imagem.src = 'images/noite.jpg'
    }
}

function iniciar() {
    carregar() // chama imediatamente
    setInterval(carregar, 60000) // atualiza a cada 60 segundos
}