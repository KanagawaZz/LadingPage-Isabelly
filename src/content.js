// Textos e dados da página. Para ajustar conteúdo, normalmente basta editar este arquivo.

export const whatsappNumber = '556581313761';
export const whatsappGreeting = 'Olá, Isabelly. Vim pela sua página e gostaria de informações sobre carta de crédito para máquinas.';
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
  { title: 'Sem juros de financiamento', text: 'Os custos são taxa de administração, fundo de reserva e seguros, quando houver.' },
  { title: 'Compra à vista', text: 'Com a carta de crédito, máquina nova ou seminova, conforme as regras do grupo.' },
  { title: 'Todo o Brasil', text: `Atendimento online e assinatura presencial em ${company.cidadeAssinatura}.` },
];

export const consortiumSteps = [
  {
    icon: 'plan',
    title: 'Plano e carta de crédito',
    text: 'Você define o valor da carta, o prazo e a forma de pagamento: mensal, semestral ou anual.',
  },
  {
    icon: 'group',
    title: 'Grupo e parcelas',
    text: 'Você entra em um grupo e paga as parcelas, que incluem a taxa de administração e o fundo de reserva.',
  },
  {
    icon: 'draw',
    title: 'Contemplação',
    text: 'Acontece nas assembleias, por sorteio ou lance, conforme as regras do grupo. Para concorrer, as parcelas precisam estar em dia.',
  },
  {
    icon: 'key',
    title: 'Uso da carta',
    text: 'Após a análise da administradora, a carta paga a máquina à vista, de concessionária, revenda ou particular, com nota fiscal.',
  },
];

// Seção "Crédito para aquisição de máquinas". O bloco de estratégias mantém visível
// como o crédito é liberado (contemplação, sem data garantida).
export const acquisitionPaths = [
  {
    icon: 'plan',
    title: 'Planejamento financeiro',
    text: 'Parcelas mensais, semestrais ou anuais, sem juros de financiamento, para a aquisição caber no fluxo de caixa da sua operação.',
  },
  {
    icon: 'draw',
    title: 'Estratégias de aquisição',
    text: 'O crédito é liberado na contemplação, por sorteio ou lance. Não há data garantida, mas uma boa estratégia de lance pode antecipar a compra.',
  },
  {
    icon: 'group',
    title: 'Orientação personalizada',
    text: 'Converse com a Isabelly sobre a máquina que você procura e avalie qual alternativa faz sentido para o seu momento.',
  },
];

export const acquisitionWhatsappMessage = 'Olá, Isabelly! Acessei sua página e gostaria de entender as possibilidades de crédito para adquirir uma máquina para minha operação.';

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

export const serviceSteps = [
  { title: 'Primeira conversa', text: 'Pelo WhatsApp: qual máquina você procura e quanto pode investir.' },
  { title: 'Simulação', text: 'Opções de carta de crédito, prazo e parcelas, com os custos explicados.' },
  { title: 'Análise', text: 'Envio dos documentos. A contratação é sujeita a análise de crédito.' },
  { title: 'Assinatura', text: `Presencial, na unidade do Grupo Capital em ${company.cidadeAssinatura}.` },
];

export const serviceCommitments = [
  'Entendo a sua operação antes de falar de plano.',
  'Explico custos, regras de lance e reajustes antes da assinatura.',
  'Não prometo data de contemplação, porque ninguém pode prometer.',
];

export const safetyPoints = [
  {
    title: 'Regulado pelo Banco Central',
    text: 'O consórcio segue a Lei 11.795/2008. Antes de assinar, confira se a administradora é autorizada no site do Banco Central.',
  },
  {
    title: 'Ninguém garante a data',
    text: 'A contemplação acontece por sorteio ou lance. Desconfie de quem promete crédito liberado em prazo certo.',
  },
  {
    title: 'Tudo está no contrato',
    text: 'Taxa de administração, fundo de reserva, seguros, reajustes e regras de lance ficam por escrito. Leia com calma antes de assinar.',
  },
];

export const frequentlyAskedQuestions = [
  {
    question: 'Onde está a máquina?',
    answer: 'O consórcio não trabalha com estoque. Você recebe uma carta de crédito e, ao ser contemplado, escolhe a máquina, nova ou seminova, em concessionária, revenda ou de particular, com nota fiscal.',
  },
  {
    question: 'Não é aquele consórcio em que a gente paga anos e nunca é contemplado?',
    answer: 'Esse é o receio mais comum, e faz sentido. A contemplação acontece nas assembleias do grupo, por sorteio ou por lance. Com lance livre (recursos próprios) ou embutido (parte da própria carta), é possível tentar antecipar a contemplação, e essa estratégia é planejada com você desde o início. Ainda assim, não existe data garantida, e você sabe disso antes de assinar.',
  },
  {
    question: 'Tem juros?',
    answer: 'Não há juros remuneratórios, como em um financiamento. Há outros custos: taxa de administração, fundo de reserva e seguros, quando houver. Todos aparecem na simulação e no contrato.',
  },
  {
    question: 'Quando recebo o crédito?',
    answer: 'Na contemplação, que acontece nas assembleias do grupo, por sorteio ou por lance. Não existe data garantida, e para concorrer é preciso estar com as parcelas em dia.',
  },
  {
    question: 'Como funcionam os lances?',
    answer: 'No lance livre, você oferta um valor com recursos próprios para antecipar a contemplação. No lance embutido, parte da própria carta de crédito é usada como lance, o que reduz o valor disponível para a compra. As regras de cada grupo estão no contrato.',
  },
  {
    question: 'O valor da carta e das parcelas muda?',
    answer: 'Pode mudar. A carta e as parcelas podem ser reajustadas periodicamente, pelo critério previsto em contrato, para acompanhar o preço dos bens.',
  },
  {
    question: 'Quanto preciso para começar?',
    answer: 'Depende do valor da carta e do plano escolhido. Na simulação, a Isabelly apresenta as opções para o seu caso, sem compromisso.',
  },
  {
    question: 'Posso usar minha máquina ou meu veículo no negócio?',
    answer: 'As formas de lance aceitas seguem as regras de cada grupo. Na conversa, a Isabelly explica o que é possível no seu caso.',
  },
  {
    question: 'Posso contratar com o nome negativado?',
    answer: 'A adesão passa por análise da administradora. Fale com a Isabelly para entender a possibilidade no seu caso, sem promessa de aprovação.',
  },
  {
    question: 'Preciso ir até a loja?',
    answer: `A conversa, a simulação e a análise são feitas à distância. A assinatura do contrato é presencial, na unidade do Grupo Capital em ${company.cidadeAssinatura}.`,
  },
  {
    question: 'Quais documentos preciso enviar?',
    answer: [
      ['Pessoa física', 'documento oficial com foto (RG ou CNH), comprovante de residência atualizado e comprovante de renda.'],
      ['Pessoa jurídica', 'contrato social ou requerimento de empresário, cartão CNPJ atualizado, comprovante de endereço comercial, documento com foto do responsável legal e comprovante de renda.'],
    ],
  },
  {
    question: 'Quanto custa o atendimento da Isabelly?',
    answer: 'Nada. A Isabelly é remunerada pela administradora. Você não paga nenhum valor diretamente a ela.',
  },
  {
    question: 'Como verifico a administradora?',
    answer: 'O nome e o CNPJ da administradora constam na proposta e no contrato. Com esses dados, confira no site do Banco Central se ela é autorizada a administrar consórcios.',
  },
];

// Formulário de simulação
export const goals = ['Comprar minha primeira máquina', 'Ampliar a frota', 'Renovar um equipamento', 'Planejar uma compra futura'];
export const machineTypes = ['Linha amarela', 'Agro', 'Caminhão ou carreta', 'Implemento', 'Outro'];
export const valueRanges = ['Até R$ 500 mil', 'R$ 500 mil a R$ 1 milhão', 'R$ 1 a 2 milhões', 'R$ 2 a 3 milhões', 'Acima de R$ 3 milhões'];
export const initialRanges = ['Ainda não sei', 'Até R$ 100 mil', 'R$ 100 a 300 mil', 'R$ 300 a 600 mil', 'Acima de R$ 600 mil'];
export const termOptions = ['Curto', 'Médio', 'Longo'];
export const frequencyOptions = ['Mensal', 'Semestral', 'Anual'];
