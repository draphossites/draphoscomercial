const formulario = document.querySelector('#form-orcamento');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const dados = new FormData(formulario);
  const nome = dados.get('nome').trim();
  const organizacao = dados.get('organizacao').trim();
  const telefone = dados.get('telefone').trim();
  const servico = dados.get('servico');
  const mensagem = [
    'Olá, gostaria de solicitar um orçamento com a Betel Elevadores.',
    '',
    `Nome: ${nome}`,
    ...(organizacao ? [`Condomínio ou empresa: ${organizacao}`] : []),
    `Telefone: ${telefone}`,
    `Serviço: ${servico}`,
  ].join('\n');

  const whatsapp = new URL('https://wa.me/5551997831110');
  whatsapp.searchParams.set('text', mensagem);
  window.location.assign(whatsapp.href);
});
