// Textos e dados da página. Para ajustar conteúdo, normalmente basta editar este arquivo.

export const whatsappNumber = '556581313761';
// Mensagens iniciais do WhatsApp, uma por ponto de contato, para a Isabelly saber de onde veio a conversa.
export const whatsappGreeting = 'Olá, Isabelly! Gostaria de conhecer as possibilidades de crédito para adquirir uma máquina ou equipamento.';
export const heroWhatsappMessage = 'Olá, Isabelly! Acessei sua página e quero avaliar as possibilidades de crédito para a máquina que preciso.';
export const aboutWhatsappMessage = 'Olá, Isabelly! Vi sua apresentação na página e gostaria de conversar sobre a máquina que preciso para minha operação.';
export const faqWhatsappMessage = 'Olá, Isabelly! Acessei sua página e gostaria de tirar algumas dúvidas antes de avaliar uma opção de crédito.';
export const instagramLink = 'https://www.instagram.com/isabelly_rufino';

export function buildWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Dados legais. Enquanto estiverem vazios, a página mostra um texto neutro
// (e, em desenvolvimento, uma marcação de pendência).
export const company = {
  administradora: { nome: '', cnpj: '', autorizacaoBacen: '' },
  grupoCapitalCnpj: '',
  cidadeAssinatura: 'Cuiabá (MT)',
};

export const heroFacts = [
  { title: 'Sem juros de financiamento', text: 'Os custos do plano são apresentados na simulação, antes de qualquer decisão.' },
  { title: 'Compra à vista', text: 'Após a contemplação, para máquinas novas ou seminovas aceitas pelo plano.' },
  { title: 'Orientação personalizada', text: 'Você fala direto com a Isabelly, do primeiro contato à assinatura.' },
];

export const consortiumSteps = [
  {
    icon: 'plan',
    title: 'Conversa e simulação',
    text: 'Pelo WhatsApp, a Isabelly entende a máquina que você precisa e apresenta valores, parcelas, custos e regras do plano.',
  },
  {
    icon: 'group',
    title: 'Análise e assinatura',
    text: `Você envia os documentos para a análise de crédito da administradora e assina o contrato em ${company.cidadeAssinatura}. A partir daí, entra em um grupo e paga as parcelas.`,
  },
  {
    icon: 'draw',
    title: 'Contemplação',
    text: 'O acesso ao crédito acontece por sorteio ou lance, conforme o contrato e as regras do grupo. Não existe data garantida.',
  },
  {
    icon: 'key',
    title: 'Uso do crédito',
    text: 'Após a contemplação e a análise da administradora, o crédito paga à vista um bem aceito pelo plano, com nota fiscal. Não é um valor para saque.',
  },
];

// Seção "Crédito para aquisição de máquinas". O bloco de estratégias mantém visível
// como o crédito é liberado (contemplação, sem data garantida).
export const acquisitionPaths = [
  {
    icon: 'plan',
    title: 'Planejamento financeiro',
    text: 'Valor da carta, prazo e forma de pagamento definidos de acordo com o fluxo de caixa da sua operação, sem juros de financiamento.',
  },
  {
    icon: 'draw',
    title: 'Estratégias de aquisição',
    text: 'O crédito é liberado na contemplação, por sorteio ou lance, sem data garantida. A estratégia de lance é planejada com você, de acordo com o que você pode investir.',
  },
  {
    icon: 'group',
    title: 'Orientação personalizada',
    text: 'Converse com a Isabelly sobre a máquina que você procura e avalie qual alternativa faz sentido para o seu momento.',
  },
];

export const acquisitionWhatsappMessage = 'Olá, Isabelly! Estou avaliando a aquisição de uma máquina e gostaria de entender as possibilidades para o meu caso.';

export const paymentRhythms = [
  { title: 'Mensal', text: 'Para operações com receita constante ao longo do ano, como frete e prestação de serviços.' },
  { title: 'Semestral', text: 'Para quem fatura em ciclos, como contratos de obra e períodos de produção.' },
  { title: 'Anual', text: 'Para quem concentra a receita em um período, como a colheita da safra.' },
];

// `machineType` precisa existir em `machineTypes` (formulário de simulação).
export const purchaseCategories = [
  {
    title: 'Construção e infraestrutura',
    text: 'Escavadeiras, pás carregadeiras, retroescavadeiras e motoniveladoras, para mineração, obra e terraplenagem.',
    machineType: 'Linha amarela',
  },
  {
    title: 'Agronegócio',
    text: 'Tratores, colheitadeiras e implementos para a operação no campo.',
    machineType: 'Agro',
  },
  {
    title: 'Transporte e logística',
    text: 'Caminhões, carretas e implementos rodoviários.',
    machineType: 'Caminhão ou carreta',
  },
];

export const serviceCommitments = [
  'Entendo a sua operação antes de falar de plano.',
  'Explico custos, regras de lance e reajustes antes da assinatura.',
  'Falo de prazos com transparência, sem promessas que não posso cumprir.',
];

export const safetyPoints = [
  {
    title: 'Regulado pelo Banco Central',
    text: 'O consórcio segue a Lei 11.795/2008. Antes de assinar, confira se a administradora é autorizada no site do Banco Central.',
  },
  {
    title: 'Desconfie de prazo garantido',
    text: 'A contemplação acontece por sorteio ou lance. Quem promete crédito liberado em data certa não está sendo transparente.',
  },
  {
    title: 'Tudo está no contrato',
    text: 'Taxa de administração, fundo de reserva, seguros, reajustes e regras de lance ficam por escrito. Leia com calma antes de assinar.',
  },
];

export const frequentlyAskedQuestions = [
  {
    question: 'Que tipo de solução de crédito é essa?',
    answer: 'É uma carta de crédito na modalidade consórcio, para a aquisição de bens. Não é empréstimo nem financiamento com liberação imediata: o crédito fica disponível na contemplação, por sorteio ou lance, conforme o contrato.',
  },
  {
    question: 'Onde está a máquina?',
    answer: 'A carta de crédito não está ligada a um estoque. Ao ser contemplado, você escolhe a máquina, nova ou seminova, em concessionária, revenda ou de particular, com nota fiscal, desde que o bem seja aceito pelas regras do plano. Vale confirmar o equipamento com a Isabelly antes de contratar.',
  },
  {
    question: 'Quanto tempo leva para eu conseguir a máquina?',
    answer: 'Não existe data garantida. A contemplação acontece nas assembleias do grupo, por sorteio ou por lance, e para concorrer é preciso estar com as parcelas em dia. A Isabelly planeja com você uma estratégia de lance de acordo com o que você pode investir.',
  },
  {
    question: 'Tem juros?',
    answer: 'Não há juros como em um financiamento, mas há custos: taxa de administração, fundo de reserva, seguros e reajustes, quando previstos no contrato. Todos aparecem na simulação e no contrato.',
  },
  {
    question: 'Como funcionam os lances?',
    answer: 'O lance é uma forma de concorrer à contemplação além do sorteio. No lance livre, você oferta um valor com recursos próprios. No lance embutido, parte da própria carta de crédito é usada, o que reduz o valor disponível para a compra. Ofertar um lance não garante a contemplação: vale a regra do grupo.',
  },
  {
    question: 'Quanto preciso para começar?',
    answer: 'Depende do valor do crédito, do plano, da forma de pagamento e dos custos do contrato. Na simulação, a Isabelly apresenta os valores reais para o seu caso, sem compromisso.',
  },
  {
    question: 'Posso dar minha máquina ou meu veículo como parte do pagamento?',
    answer: 'Depende das regras do grupo e das formas de lance aceitas. Na conversa, a Isabelly explica o que é possível no seu caso.',
  },
  {
    question: 'Posso contratar com o nome negativado?',
    answer: 'Depende dos critérios da administradora. A adesão e a liberação do crédito podem passar por análise cadastral. Converse com a Isabelly para verificar a sua situação antes de contratar.',
  },
  {
    question: 'O valor do crédito e das parcelas muda?',
    answer: 'Pode mudar. Quando o contrato prevê reajuste, o crédito e as parcelas são atualizados pelo critério definido para o grupo. Confirme essa regra na simulação.',
  },
  {
    question: 'Preciso ir até a loja?',
    answer: `A primeira conversa, a simulação e a análise são feitas à distância. A assinatura do contrato é presencial, na unidade do Grupo Capital em ${company.cidadeAssinatura}.`,
  },
  {
    question: 'Quais documentos preciso enviar?',
    answer: [
      ['Quando', 'só na etapa de análise, pelo canal indicado pela Isabelly. Esta página não pede documentos.'],
      ['Pessoa física', 'documento oficial com foto (RG ou CNH), comprovante de residência atualizado e comprovante de renda.'],
      ['Pessoa jurídica', 'contrato social ou requerimento de empresário, cartão CNPJ atualizado, comprovante de endereço comercial, documento com foto do responsável legal e comprovante de renda.'],
    ],
  },
  {
    question: 'O atendimento da Isabelly tem custo?',
    answer: 'Não. A Isabelly é remunerada pela administradora. Você não paga nenhum valor diretamente a ela.',
  },
  {
    question: 'Como verifico a administradora?',
    answer: 'O nome e o CNPJ da administradora constam na proposta e no contrato. Com esses dados, consulte no site do Banco Central se ela é autorizada a administrar consórcios.',
  },
];

// Formulário de simulação
export const goals = ['Comprar minha primeira máquina', 'Ampliar a frota', 'Renovar um equipamento', 'Planejar uma compra futura'];
export const machineTypes = ['Linha amarela', 'Agro', 'Caminhão ou carreta', 'Implemento', 'Outro'];
export const valueRanges = ['Até R$ 500 mil', 'R$ 500 mil a R$ 1 milhão', 'R$ 1 a 2 milhões', 'R$ 2 a 3 milhões', 'Acima de R$ 3 milhões'];
export const initialRanges = ['Ainda não sei', 'Até R$ 100 mil', 'R$ 100 a 300 mil', 'R$ 300 a 600 mil', 'Acima de R$ 600 mil'];
export const termOptions = ['Curto', 'Médio', 'Longo'];
export const urgencyOptions = ['O quanto antes', 'Nos próximos meses', 'Estou planejando com calma'];
export const frequencyOptions = ['Mensal', 'Semestral', 'Anual'];
