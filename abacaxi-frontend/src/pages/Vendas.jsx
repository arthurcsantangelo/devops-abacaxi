import { useCallback, useEffect, useState } from 'react';
import { api, hoje } from '../api.js';
import { formatarData, formatarMoeda, traduzir, traduzirErro } from '../i18n.js';

export default function Vendas({ locale, cotacao, cotacaoCarregando, cotacaoErro }) {
  const [vendas, setVendas] = useState([]);
  const [form, setForm] = useState({ data: hoje(), quantidade: '', preco_unitario: '', cliente: '' });
  const [erro, setErro] = useState(null);

  const carregar = useCallback(
    () => api('/vendas').then(setVendas).catch(setErro),
    []
  );
  useEffect(() => { carregar(); }, [carregar]);
  useEffect(() => {
    setForm((atual) => ({ ...atual, preco_unitario: '' }));
  }, [locale]);

  async function salvar(e) {
    e.preventDefault();
    setErro(null);
    if (locale !== 'pt-BR' && !cotacao) {
      setErro(traduzir(locale, 'rateUnavailable'));
      return;
    }

    try {
      await api('/vendas', {
        method: 'POST',
        body: {
          ...form,
          quantidade: Number(form.quantidade),
          preco_unitario: locale === 'pt-BR'
            ? Number(form.preco_unitario)
            : Math.round(((Number(form.preco_unitario) / cotacao.usdPerBrl) + Number.EPSILON) * 100) / 100,
        },
      });
      setForm({ ...form, quantidade: '', preco_unitario: '', cliente: '' });
      carregar();
    } catch (err) {
      setErro(err);
    }
  }

  async function excluir(id) {
    setErro(null);
    try {
      await api(`/vendas/${id}`, { method: 'DELETE' });
      carregar();
    } catch (err) {
      setErro(err);
    }
  }

  return (
    <>
      <form className="card formulario" onSubmit={salvar}>
        <h2>{traduzir(locale, 'registerSale')}</h2>
        <label>
          {traduzir(locale, 'date')}
          <input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} required />
        </label>
        <label>
          {traduzir(locale, 'quantity')}
          <input type="number" min="1" value={form.quantidade} onChange={(e) => setForm({ ...form, quantidade: e.target.value })} required />
        </label>
        <label>
          {traduzir(locale, 'unitPrice')}
          <input type="number" min="0.01" step="0.01" value={form.preco_unitario} onChange={(e) => setForm({ ...form, preco_unitario: e.target.value })} required />
        </label>
        <label>
          {traduzir(locale, 'client')}
          <input value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} />
        </label>
        <button
          type="submit"
          disabled={locale !== 'pt-BR' && (!cotacao || cotacaoCarregando || cotacaoErro)}
        >
          {traduzir(locale, 'save')}
        </button>
      </form>
      {erro && <p className="erro">{traduzirErro(erro, locale)}</p>}

      <div className="card tabela">
        <table>
          <thead>
            <tr>
              <th>{traduzir(locale, 'salesDate')}</th>
              <th>{traduzir(locale, 'salesClient')}</th>
              <th>{traduzir(locale, 'salesQuantity')}</th>
              <th>{traduzir(locale, 'salesUnitPrice')}</th>
              <th>{traduzir(locale, 'total')}</th>
              <th>{traduzir(locale, 'actions')}</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map((v) => (
              <tr key={v.id}>
                <td>{formatarData(v.data, locale)}</td>
                <td>{v.cliente}</td>
                <td>{v.quantidade}</td>
                <td>{formatarMoeda(v.preco_unitario, locale, cotacao?.usdPerBrl)}</td>
                <td>
                  {formatarMoeda(v.quantidade * Number(v.preco_unitario), locale, cotacao?.usdPerBrl)}
                </td>
                <td><button className="excluir" onClick={() => excluir(v.id)}>{traduzir(locale, 'delete')}</button></td>
              </tr>
            ))}
            {vendas.length === 0 && (
              <tr><td colSpan="6">{traduzir(locale, 'noSales')}</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
