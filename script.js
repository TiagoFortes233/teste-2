
function irParaCarrinho() {
    window.location.href = "carrinho.html";
}

const feedbacks = [
    '"Camisolas top, chegou rápido!"',
    '"Serviço ao cliente impecável."',
    '"Recomendo muito, voltarei a comprar!"'
];
let i = 0;
setInterval(() => {
    document.getElementById("feedback-text").innerText = feedbacks[i];
    i = (i + 1) % feedbacks.length;
}, 4000);
