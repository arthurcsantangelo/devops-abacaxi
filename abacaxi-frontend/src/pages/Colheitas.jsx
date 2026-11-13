import { useCallback, useEffect, useState } from 'react';
import { api, hoje } from '../api.js';
import { formatarData, traduzir, traduzirErro } from '../i18n.js';

export default function Colheitas({ locale }) {
  const [colheitas, setColheitas] = useState([]);
  const [form, setForm] = useState({ data: hoje(), quantidade: '', observacao: '' });
  const [erro, setErro] = useState(null);

  const carregar = useCallback(
    () => api('/colheitas').then(setColheitas).catch(setErro),
    []
  );
  useEffect(() => { carregar(); }, [carregar]);

  async function salvar(e) {
    e.preventDefault();
    setErro(null);
    try {
      await api('/colheitas', {
        method: 'POST',
        body: { ...form, quantidade: Number(form.quantidade) },
      });
      setForm({ ...form, quantidade: '', observacao: '' });
      carregar();
    } catch (err) {
      setErro(err);
    }
  }

  async function excluir(id) {
    setErro(null);
    try {
      await api(`/colheitas/${id}`, { method: 'DELETE' });
      carregar();
    } catch (err) {
      setErro(err);
    }
  }

  return (
    <>
      <form className="card formulario" onSubmit={salvar}>
        <h2>{traduzir(locale, 'registerHarvest')}</h2>
        <label>
          {traduzir(locale, 'date')}
          <input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} required />
        </label>
        <label>
          {traduzir(locale, 'quantity')}
          <input type="number" min="1" value={form.quantidade} onChange={(e) => setForm({ ...form, quantidade: e.target.value })} required />
        </label>
        <label>
          {traduzir(locale, 'observation')}
          <input value={form.observacao} onChange={(e) => setForm({ ...form, observacao: e.target.value })} />
        </label>
        <button type="submit">{traduzir(locale, 'save')}</button>
      </form>
      {erro && <p className="erro">{traduzirErro(erro, locale)}</p>}

      <div className="card tabela">
        <table>
          <thead>
            <tr>
              <th>{traduzir(locale, 'date')}</th>
              <th>{traduzir(locale, 'quantity')}</th>
              <th>{traduzir(locale, 'observation')}</th>
              <th>{traduzir(locale, 'actions')}</th>
            </tr>
          </thead>
          <tbody>
            {colheitas.map((c) => (
              <tr key={c.id}>
                <td>{formatarData(c.data, locale)}</td>
                <td>{c.quantidade}</td>
                <td>{c.observacao}</td>
                <td><button className="excluir" onClick={() => excluir(c.id)}>{traduzir(locale, 'delete')}</button></td>
              </tr>
            ))}
            {colheitas.length === 0 && (
              <tr><td colSpan="4">{traduzir(locale, 'noHarvests')}</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
