const paletaCores = document.querySelectorAll(".paletas-de-cores li span");
const carroSelecionado = document.querySelector(".imagem-carro img");

const colecaoRodas = document.querySelectorAll(".colecao-de-rodas li span");

let corSelecionada = "br";
let rodaSelecionada = "r1";

paletaCores.forEach((li) => {
  li.addEventListener("click", () => {
    paletaCores.forEach((span) => {
      span.classList.remove("selecionado");
    });
    li.classList.add("selecionado");
    corSelecionada = li.classList[0];
    atualizarCarro();
  });
});

colecaoRodas.forEach((li) => {
  li.addEventListener("click", () => {
    colecaoRodas.forEach((span) => {
      span.classList.remove("selecionado");
    });
    li.classList.add("selecionado");
    rodaSelecionada = li.classList[0];
    atualizarCarro();
  });
});

function atualizarCarro() {
  carroSelecionado.src = `./style/assets/p-${corSelecionada}-${rodaSelecionada}.jpeg`;
}
