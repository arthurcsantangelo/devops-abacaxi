const MENSAGENS = {
  'pt-BR': {
    language: 'Idioma',
    siteTitle: 'Fazenda de Abacaxis',
    dashboard: 'Painel',
    harvests: 'Colheitas',
    sales: 'Vendas',
    logout: 'Sair',
    username: 'Usuário',
    password: 'Senha',
    login: 'Entrar',
    entering: 'Entrando...',
    apiSleepTip: 'No plano gratuito do Render a API pode levar até 1 minuto para "acordar".',
    informUserPass: 'Informe usuário e senha',
    loginInvalid: 'Usuário ou senha inválidos',
    connectError: 'Não foi possível conectar à API',
    unexpectedError: 'Erro inesperado',
    loading: 'Carregando...',
    totalHarvested: 'Total colhido',
    totalSold: 'Total vendido',
    inStock: 'Em estoque',
    revenue: 'Faturamento',
    registerSale: 'Registrar venda',
    date: 'Data',
    quantity: 'Quantidade',
    unitPrice: 'Preço unitário (R$)',
    client: 'Cliente',
    save: 'Salvar',
    salesDate: 'Data',
    salesClient: 'Cliente',
    salesQuantity: 'Qtd.',
    salesUnitPrice: 'Preço un.',
    total: 'Total',
    actions: 'Ações',
    delete: 'Excluir',
    noSales: 'Nenhuma venda registrada.',
    registerHarvest: 'Registrar colheita',
    observation: 'Observação',
    noHarvests: 'Nenhuma colheita registrada.',
    currencyNotice: 'Os valores são armazenados em BRL. Em inglês e chinês, são exibidos em USD com base na cotação diária; o site não converte para sua moeda local.',
    rateAsOf: 'Cotação BRL → USD atualizada em {date}.',
    rateUnavailable: 'Não foi possível obter a cotação diária. Valores em USD e novos registros de venda estão temporariamente indisponíveis.',
    quoteLoading: 'Carregando cotação diária...',
    invalidSalesData: 'Informe data, quantidade e preço maiores que zero',
    invalidHarvestData: 'Informe a data e uma quantidade maior que zero',
    insufficientStock: 'Estoque insuficiente. Disponível: {available}',
    harvestNotFound: 'Colheita não encontrada',
    harvestAlreadySold: 'Não é possível excluir: os abacaxis desta colheita já foram vendidos',
    saleNotFound: 'Venda não encontrada',
    serverError: 'Erro interno no servidor',
    noToken: 'Token não informado',
    invalidToken: 'Token inválido ou expirado',
    requestError: 'Erro na requisição',
  },
  en: {
    language: 'Language',
    siteTitle: 'Pineapple Farm',
    dashboard: 'Dashboard',
    harvests: 'Harvests',
    sales: 'Sales',
    logout: 'Log out',
    username: 'Username',
    password: 'Password',
    login: 'Log in',
    entering: 'Signing in...',
    apiSleepTip: 'On Render’s free plan, the API may take up to 1 minute to wake up.',
    informUserPass: 'Enter a username and password',
    loginInvalid: 'Invalid username or password',
    connectError: 'Could not connect to the API',
    unexpectedError: 'Unexpected error',
    loading: 'Loading...',
    totalHarvested: 'Total harvested',
    totalSold: 'Total sold',
    inStock: 'In stock',
    revenue: 'Revenue',
    registerSale: 'Record a sale',
    date: 'Date',
    quantity: 'Quantity',
    unitPrice: 'Unit price (USD)',
    client: 'Customer',
    save: 'Save',
    salesDate: 'Date',
    salesClient: 'Customer',
    salesQuantity: 'Qty.',
    salesUnitPrice: 'Unit price',
    total: 'Total',
    actions: 'Actions',
    delete: 'Delete',
    noSales: 'No sales recorded.',
    registerHarvest: 'Record a harvest',
    observation: 'Notes',
    noHarvests: 'No harvests recorded.',
    currencyNotice: 'Values are stored in BRL. In English and Chinese, they are displayed in USD using the daily exchange rate; this site does not convert amounts to your local currency.',
    rateAsOf: 'BRL → USD rate updated on {date}.',
    rateUnavailable: 'The daily exchange rate is unavailable. USD amounts and new sales are temporarily unavailable.',
    quoteLoading: 'Loading daily exchange rate...',
    invalidSalesData: 'Enter a date, quantity, and price greater than zero',
    invalidHarvestData: 'Enter a date and a quantity greater than zero',
    insufficientStock: 'Insufficient stock. Available: {available}',
    harvestNotFound: 'Harvest not found',
    harvestAlreadySold: 'This harvest cannot be deleted because its pineapples have already been sold',
    saleNotFound: 'Sale not found',
    serverError: 'Internal server error',
    noToken: 'No token provided',
    invalidToken: 'Invalid or expired token',
    requestError: 'Request failed',
  },
  'zh-CN': {
    language: '语言',
    siteTitle: '菠萝农场',
    dashboard: '仪表盘',
    harvests: '收成',
    sales: '销售',
    logout: '退出登录',
    username: '用户名',
    password: '密码',
    login: '登录',
    entering: '正在登录...',
    apiSleepTip: 'Render 免费计划中的 API 可能需要最多 1 分钟唤醒。',
    informUserPass: '请输入用户名和密码',
    loginInvalid: '用户名或密码无效',
    connectError: '无法连接到 API',
    unexpectedError: '发生意外错误',
    loading: '加载中...',
    totalHarvested: '收获总量',
    totalSold: '销售总量',
    inStock: '库存',
    revenue: '收入',
    registerSale: '登记销售',
    date: '日期',
    quantity: '数量',
    unitPrice: '单价（USD）',
    client: '客户',
    save: '保存',
    salesDate: '日期',
    salesClient: '客户',
    salesQuantity: '数量',
    salesUnitPrice: '单价',
    total: '总计',
    actions: '操作',
    delete: '删除',
    noSales: '暂无销售记录。',
    registerHarvest: '登记收成',
    observation: '备注',
    noHarvests: '暂无收成记录。',
    currencyNotice: '所有金额均以 BRL 存储。英文和中文界面使用每日汇率显示 USD；本网站不会将金额换算为您的当地货币。',
    rateAsOf: 'BRL → USD 汇率更新于 {date}。',
    rateUnavailable: '每日汇率暂不可用，因此暂时无法显示 USD 金额或新增销售记录。',
    quoteLoading: '正在加载每日汇率...',
    invalidSalesData: '请输入日期、数量和大于零的价格',
    invalidHarvestData: '请输入日期和大于零的数量',
    insufficientStock: '库存不足。可用数量：{available}',
    harvestNotFound: '未找到收成记录',
    harvestAlreadySold: '无法删除此收成记录，因为其中的菠萝已售出',
    saleNotFound: '未找到销售记录',
    serverError: '服务器内部错误',
    noToken: '未提供令牌',
    invalidToken: '令牌无效或已过期',
    requestError: '请求失败',
  },
};

export const SUPPORTED_LOCALES = ['pt-BR', 'en', 'zh-CN'];

export function traduzir(locale, chave, valores = {}) {
  const mensagem = MENSAGENS[locale]?.[chave] || MENSAGENS['pt-BR'][chave] || chave;
  return mensagem.replace(/\{(\w+)\}/g, (_, nome) => valores[nome] ?? `{${nome}}`);
}

export function formatarMoeda(valor, locale, usdPerBrl) {
  const valorNumerico = Number(valor);
  if (!Number.isFinite(valorNumerico)) return '—';

  if (locale === 'pt-BR') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }).format(valorNumerico);
  }
  if (!Number.isFinite(usdPerBrl) || usdPerBrl <= 0) return '—';

  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' })
    .format(valorNumerico * usdPerBrl);
}

export function formatarData(data, locale) {
  const dataLocal = new Date(`${data}T00:00:00`);
  if (Number.isNaN(dataLocal.getTime())) return data;
  return new Intl.DateTimeFormat(locale).format(dataLocal);
}

export function traduzirErro(erro, locale) {
  const mensagem = erro?.message || '';
  const mensagensConhecidas = {
    'Informe usuário e senha': 'informUserPass',
    'Usuário ou senha inválidos': 'loginInvalid',
    'Não foi possível conectar à API': 'connectError',
    'Informe data, quantidade e preço maiores que zero': 'invalidSalesData',
    'Informe a data e uma quantidade maior que zero': 'invalidHarvestData',
    'Colheita não encontrada': 'harvestNotFound',
    'Não é possível excluir: os abacaxis desta colheita já foram vendidos': 'harvestAlreadySold',
    'Venda não encontrada': 'saleNotFound',
    'Erro interno no servidor': 'serverError',
    'Token não informado': 'noToken',
    'Token inválido ou expirado': 'invalidToken',
    'Erro na requisição': 'requestError',
  };
  const chave = mensagensConhecidas[mensagem];
  if (chave) return traduzir(locale, chave);

  const estoque = mensagem.match(/^Estoque insuficiente\. Disponível: (.+)$/);
  if (estoque) return traduzir(locale, 'insufficientStock', { available: estoque[1] });
  if (mensagem === 'Failed to fetch') return traduzir(locale, 'connectError');
  return mensagem || traduzir(locale, 'unexpectedError');
}
