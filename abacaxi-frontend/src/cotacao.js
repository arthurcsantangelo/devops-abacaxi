const URL_COTACAO = 'https://open.er-api.com/v6/latest/BRL';

export async function buscarCotacaoDolar(signal) {
  const resposta = await fetch(URL_COTACAO, { signal });
  if (!resposta.ok) throw new Error('Falha ao carregar cotação cambial');

  const dados = await resposta.json();
  const usdPerBrl = Number(dados?.rates?.USD);
  const atualizadoEm = Number(dados?.time_last_update_unix);
  if (
    dados?.result !== 'success' ||
    dados?.base_code !== 'BRL' ||
    !Number.isFinite(usdPerBrl) ||
    usdPerBrl <= 0 ||
    !Number.isFinite(atualizadoEm)
  ) {
    throw new Error('Resposta de cotação cambial inválida');
  }

  return { usdPerBrl, atualizadoEm: new Date(atualizadoEm * 1000) };
}
