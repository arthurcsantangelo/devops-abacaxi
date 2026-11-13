import { useEffect, useState } from 'react';
import Login from './pages/Login.jsx';
import Painel from './pages/Painel.jsx';
import Colheitas from './pages/Colheitas.jsx';
import Vendas from './pages/Vendas.jsx';
import SeletorIdioma from './components/SeletorIdioma.jsx';
import { buscarCotacaoDolar } from './cotacao.js';
import { SUPPORTED_LOCALES, traduzir } from './i18n.js';

const PAGINAS = [
  ['painel', 'dashboard'],
  ['colheitas', 'harvests'],
  ['vendas', 'sales'],
];

export default function App() {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario'));
  const [pagina, setPagina] = useState('painel');
  const [locale, setLocale] = useState(() => {
    const salvo = localStorage.getItem('idioma');
    return SUPPORTED_LOCALES.includes(salvo) ? salvo : 'pt-BR';
  });
  const [cotacao, setCotacao] = useState(null);
  const [cotacaoCarregando, setCotacaoCarregando] = useState(false);
  const [cotacaoErro, setCotacaoErro] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = traduzir(locale, 'siteTitle');
    localStorage.setItem('idioma', locale);
  }, [locale]);

  useEffect(() => {
    if (locale === 'pt-BR') {
      setCotacao(null);
      setCotacaoErro(false);
      setCotacaoCarregando(false);
      return undefined;
    }

    const controller = new AbortController();
    setCotacao(null);
    setCotacaoErro(false);
    setCotacaoCarregando(true);
    buscarCotacaoDolar(controller.signal)
      .then((resultado) => {
        if (!controller.signal.aborted) setCotacao(resultado);
      })
      .catch((erro) => {
        if (erro.name !== 'AbortError') setCotacaoErro(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setCotacaoCarregando(false);
      });

    return () => controller.abort();
  }, [locale]);

  function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setUsuario(null);
  }

  function mudarIdioma(novoLocale) {
    setLocale(novoLocale);
  }

  const avisoMoeda = (
    <aside className="aviso-moeda" role="note">
      <p>{traduzir(locale, 'currencyNotice')}</p>
      {locale !== 'pt-BR' && cotacaoCarregando && (
        <small>{traduzir(locale, 'quoteLoading')}</small>
      )}
      {locale !== 'pt-BR' && cotacaoErro && (
        <small className="erro" role="alert">{traduzir(locale, 'rateUnavailable')}</small>
      )}
      {locale !== 'pt-BR' && cotacao && (
        <small>
          {traduzir(locale, 'rateAsOf', {
            date: new Intl.DateTimeFormat(locale, { timeZone: 'UTC' }).format(cotacao.atualizadoEm),
          })}
        </small>
      )}
    </aside>
  );

  if (!usuario) {
    return (
      <Login
        locale={locale}
        onChangeLocale={mudarIdioma}
        onLogin={setUsuario}
        avisoMoeda={avisoMoeda}
      />
    );
  }

  return (
    <>
      <header>
        <h1><span className="abacaxi-large">🍍</span> {traduzir(locale, 'siteTitle')}</h1>
        <nav>
          {PAGINAS.map(([chave, nome]) => (
            <button
              key={chave}
              className={pagina === chave ? 'ativo' : ''}
              onClick={() => setPagina(chave)}
            >
              {traduzir(locale, nome)}
            </button>
          ))}
        </nav>
        <div className="usuario">
          {usuario} <button onClick={sair}>{traduzir(locale, 'logout')}</button>
        </div>
        <SeletorIdioma locale={locale} onChange={mudarIdioma} />
      </header>
      {avisoMoeda}
      <main>
        {pagina === 'painel' && <Painel locale={locale} cotacao={cotacao} />}
        {pagina === 'colheitas' && <Colheitas locale={locale} />}
        {pagina === 'vendas' && (
          <Vendas
            locale={locale}
            cotacao={cotacao}
            cotacaoCarregando={cotacaoCarregando}
            cotacaoErro={cotacaoErro}
          />
        )}
      </main>
    </>
  );
}
