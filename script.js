function carregar() {
    var mensagem = document.querySelector('#mensagem')
    var imagem = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
}