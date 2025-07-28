let carrinho = 0;
function adicionarCarrinho() {
  carrinho++;
  document.getElementById("cart-count").innerText = carrinho;
  localStorage.setItem("carrinho", carrinho);
}
window.onload = () => {
  const guardado = localStorage.getItem("carrinho");
  if (guardado) document.getElementById("cart-count").innerText = guardado;

  document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("side-menu");
    menu.classList.toggle("hidden");
  });
};