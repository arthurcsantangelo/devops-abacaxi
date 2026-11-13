import { SUPPORTED_LOCALES, traduzir } from '../i18n.js';

const NOMES_IDIOMAS = {
  'pt-BR': 'Português (Brasil)',
  en: 'English',
  'zh-CN': '中文',
};

export default function SeletorIdioma({ locale, onChange }) {
  return (
    <label className="seletor-idioma">
      <span>{traduzir(locale, 'language')}</span>
      <select value={locale} onChange={(e) => onChange(e.target.value)}>
        {SUPPORTED_LOCALES.map((idioma) => (
          <option key={idioma} value={idioma}>{NOMES_IDIOMAS[idioma]}</option>
        ))}
      </select>
    </label>
  );
}
