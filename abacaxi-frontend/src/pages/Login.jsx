import { useState } from 'react';
import { api } from '../api.js';
import SeletorIdioma from '../components/SeletorIdioma.jsx';
import { traduzir, traduzirErro } from '../i18n.js';

export default function Login({ onLogin, locale, onChangeLocale, avisoMoeda }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function entrar(e) {
    e.preventDefault();
    setErro(null);
    setCarregando(true);
    try {
      const dados = await api('/auth/login', { method: 'POST', body: { usuario, senha } });
      localStorage.setItem('token', dados.token);
      localStorage.setItem('usuario', dados.usuario);
      onLogin(dados.usuario);
    } catch (err) {
      setErro(err);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="login">
      <div className="login-conteudo">
        <SeletorIdioma locale={locale} onChange={onChangeLocale} />
        <form className="card" onSubmit={entrar}>
          <h1>🍍 {traduzir(locale, 'siteTitle')}</h1>
          <label>
            {traduzir(locale, 'username')}
            <input value={usuario} onChange={(e) => setUsuario(e.target.value)} required autoFocus />
          </label>
          <label>
            {traduzir(locale, 'password')}
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </label>
          {erro && <p className="erro">{traduzirErro(erro, locale)}</p>}
          <button type="submit" disabled={carregando}>
            {carregando ? traduzir(locale, 'entering') : traduzir(locale, 'login')}
          </button>
          {carregando && <p className="dica">{traduzir(locale, 'apiSleepTip')}</p>}
        </form>
        {avisoMoeda}
      </div>
    </div>
  );
}
