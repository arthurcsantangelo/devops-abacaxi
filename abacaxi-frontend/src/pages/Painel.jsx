import { useEffect, useState } from 'react';
import { api } from '../api.js';
import { formatarMoeda, traduzir, traduzirErro } from '../i18n.js';

export default function Painel({ locale, cotacao }) {
  const [resumo, setResumo] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    api('/resumo').then(setResumo).catch(setErro);
  }, []);

  if (erro) return <p className="erro">{traduzirErro(erro, locale)}</p>;
  if (!resumo) return <p>{traduzir(locale, 'loading')}</p>;

  return (
    <div className="indicadores">
      <div className="card"><span>{traduzir(locale, 'totalHarvested')}</span><strong>{resumo.colhido}</strong></div>
      <div className="card"><span>{traduzir(locale, 'totalSold')}</span><strong>{resumo.vendido}</strong></div>
      <div className="card"><span>{traduzir(locale, 'inStock')}</span><strong>{resumo.estoque}</strong></div>
      <div className="card">
        <span>{traduzir(locale, 'revenue')}</span>
        <strong>{formatarMoeda(resumo.faturamento, locale, cotacao?.usdPerBrl)}</strong>
      </div>
    </div>
  );
}
