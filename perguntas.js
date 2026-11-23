const listaPerguntas = document.querySelector('#lista-perguntas');
const anterior = document.querySelector('#pergunta-anterior');
const proxima = document.querySelector('#pergunta-proxima');

function atualizarBotoes() {
  const limite = listaPerguntas.scrollWidth - listaPerguntas.clientWidth;
  anterior.disabled = listaPerguntas.scrollLeft <= 1;
  proxima.disabled = listaPerguntas.scrollLeft >= limite - 1;
}

function moverPerguntas(direcao) {
  const [primeira, segunda] = listaPerguntas.children;
  const passo = segunda.offsetLeft - primeira.offsetLeft;
  const indice = Math.round(listaPerguntas.scrollLeft / passo);
  listaPerguntas.scrollTo({ left: (indice + direcao) * passo });
}

anterior.addEventListener('click', () => moverPerguntas(-1));
proxima.addEventListener('click', () => moverPerguntas(1));
listaPerguntas.addEventListener('scroll', atualizarBotoes, { passive: true });
new ResizeObserver(atualizarBotoes).observe(listaPerguntas);
atualizarBotoes();
anterior.parentElement.hidden = false;
