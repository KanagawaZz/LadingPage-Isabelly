import { useEffect, useRef, useState } from 'react';
import isabellyPhoto from './assets/pagina/isabelly.webp';
import linhaAmarelaPhoto from './assets/pagina/linha-amarela.webp';
import agroPhoto from './assets/pagina/agro.webp';
import faixaPhoto from './assets/pagina/faixa.webp';

const whatsappNumber = '556581313761';
const whatsappGreeting = 'Olá, Isabelly. Vim pela sua página e gostaria de informações sobre o consórcio de máquinas pesadas.';
const whatsappLink = buildWhatsappLink(whatsappGreeting);
const instagramLink = 'https://www.instagram.com/isabelly_rufino';

function buildWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Marca no esboço o que ainda depende de confirmação. Basta trocar pelo texto final.
function Pendente({ children }) {
  return <mark className="pending" title="Pendente de confirmação">{children}</mark>;
}

function InstagramIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 3.8A11.55 11.55 0 0 0 12 0.4C5.62.4.43 5.59.43 11.97c0 2.03.53 4.02 1.54 5.77L.33 23.6l6-1.57a11.55 11.55 0 0 0 5.67 1.46h.01c6.38 0 11.56-5.19 11.56-11.57 0-3.1-1.2-6-3.37-8.12Zm-8.2 17.71h-.01a9.58 9.58 0 0 1-4.88-1.34l-.35-.21-3.56.93.95-3.47-.23-.36a9.57 9.57 0 0 1-1.47-5.08c0-5.27 4.29-9.56 9.57-9.56 2.55 0 4.95 1 6.76 2.81a9.51 9.51 0 0 1 2.8 6.77c0 5.27-4.29 9.56-9.58 9.56Zm5.25-7.17c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.73.92-.9 1.1-.16.2-.33.22-.62.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.52.3-.48.86-1.59.1-.2.05-.37-.03-.52-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.54c-.19 0-.5.07-.76.37-.26.29-1 .98-1 2.4 0 1.42 1.03 2.8 1.17 2.99.15.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.62.69.22 1.32.19 1.82.12.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

const consortiumSteps = [
  {
    title: 'Você define o plano',
    text: 'Valor da carta de crédito, prazo e forma de pagamento: mensal, semestral ou anual.',
  },
  {
    title: 'Entra em um grupo',
    text: 'Você paga as parcelas, sem juros. O custo é a taxa de administração, diluída no plano.',
  },
  {
    title: 'É contemplado',
    text: 'Nas assembleias, por sorteio ou por lance. Com as parcelas em dia, você concorre todo mês.',
  },
  {
    title: 'Compra à vista',
    text: 'Com a carta de crédito, você escolhe a máquina, nova ou seminova, onde quiser, com nota fiscal.',
  },
];

const comparisonRows = [
  { label: 'Juros', consortium: 'Não há. Você paga a taxa de administração', financing: 'Sim, somados a tarifas e impostos' },
  { label: 'Custo total', consortium: 'Costuma ser menor', financing: 'Costuma ser maior, por causa dos juros' },
  { label: 'Quando a máquina chega', consortium: 'Após a contemplação, por sorteio ou lance', financing: 'Logo após a aprovação' },
  { label: 'Parcelas', consortium: 'Mensais, semestrais ou anuais', financing: 'Em geral, mensais' },
  { label: 'Indicado para', consortium: 'Quem pode planejar a compra', financing: 'Quem precisa da máquina agora' },
];

const purchaseOptions = [
  {
    title: 'Linha amarela',
    text: 'Escavadeiras, pás carregadeiras, retroescavadeiras e motoniveladoras para mineração, obra e terraplenagem.',
    image: linhaAmarelaPhoto,
  },
  {
    title: 'Agro',
    text: 'Tratores, colheitadeiras e implementos para a sua operação no campo.',
    image: agroPhoto,
  },
  {
    title: 'Caminhões e carretas',
    text: 'Caminhões, carretas e implementos rodoviários para transporte e apoio à operação.',
    image: null,
  },
];

const serviceSteps = [
  { title: 'Primeira conversa', text: 'Pelo WhatsApp: qual máquina você procura e quanto pode investir.' },
  { title: 'Simulação', text: 'Opções de carta de crédito, prazo e parcelas, apresentadas com clareza.' },
  { title: 'Análise', text: 'Envio dos documentos. A contratação é sujeita a análise de crédito.' },
  { title: 'Assinatura', text: <>Presencial, na unidade do Grupo Capital em <Pendente>Cuiabá (MT)</Pendente>.</> },
];

const safetyPoints = [
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
    text: 'Taxa de administração, fundo de reserva e regras de lance ficam por escrito. Leia com calma antes de assinar.',
  },
];

const frequentlyAskedQuestions = [
  {
    question: 'Onde está a máquina?',
    answer: 'O consórcio não trabalha com estoque. Você recebe uma carta de crédito e, ao ser contemplado, escolhe a máquina, nova ou seminova, em concessionária, revenda ou de particular, com nota fiscal.',
  },
  {
    question: 'O consórcio tem juros?',
    answer: 'Não. Os custos são a taxa de administração, o fundo de reserva e o seguro, quando houver. Todos aparecem na simulação e no contrato.',
  },
  {
    question: 'Quando recebo o crédito?',
    answer: 'Na contemplação, que acontece nas assembleias do grupo, por sorteio ou por lance (livre ou embutido). Não existe data garantida, e para concorrer é preciso estar com as parcelas em dia.',
  },
  {
    question: 'Quanto preciso para começar?',
    answer: 'Depende do valor da carta e do plano escolhido. Na simulação, a Isabelly apresenta as opções para o seu caso, sem compromisso.',
  },
  {
    question: 'Posso usar minha máquina ou meu veículo no negócio?',
    answer: <Pendente>As formas de lance aceitas seguem as regras de cada grupo. Consulte a Isabelly para avaliar o seu caso.</Pendente>,
  },
  {
    question: 'Posso contratar com o nome negativado?',
    answer: 'A adesão passa por análise da administradora. Fale com a Isabelly para entender a possibilidade no seu caso, sem promessa de aprovação.',
  },
  {
    question: 'Preciso ir até a loja?',
    answer: <>A conversa, a simulação e a análise são feitas à distância. A assinatura do contrato é presencial, na unidade do Grupo Capital em <Pendente>Cuiabá (MT)</Pendente>.</>,
  },
  {
    question: 'Quais documentos preciso enviar?',
    answer: (
      <>
        <strong>Pessoa física:</strong> documento oficial com foto (RG ou CNH), comprovante de residência atualizado e comprovante de renda.
        <br />
        <strong>Pessoa jurídica:</strong> contrato social ou requerimento de empresário, cartão CNPJ atualizado, comprovante de endereço comercial, documento com foto do responsável legal e comprovante de renda.
      </>
    ),
  },
  {
    question: 'Quanto custa o atendimento da Isabelly?',
    answer: 'Nada. A Isabelly é remunerada pela administradora. Você não paga nenhum valor diretamente a ela.',
  },
];

const machineTypes = ['Linha amarela', 'Agro', 'Caminhão ou carreta', 'Implemento', 'Outro'];
const valueRanges = ['Até R$ 500 mil', 'R$ 500 mil a R$ 1 milhão', 'R$ 1 a 2 milhões', 'R$ 2 a 3 milhões', 'Acima de R$ 3 milhões'];
const initialRanges = ['Ainda não sei', 'Até R$ 100 mil', 'R$ 100 a 300 mil', 'R$ 300 a 600 mil', 'Acima de R$ 600 mil'];
const termOptions = ['Curto', 'Médio', 'Longo'];
const frequencyOptions = ['Mensal', 'Semestral', 'Anual'];

const emptyForm = {
  name: '',
  city: '',
  machineType: '',
  machine: '',
  condition: 'Nova',
  value: '',
  initial: '',
  term: 'Médio',
  frequency: 'Mensal',
  consent: false,
};

function buildSimulationMessage(form) {
  const machine = form.machine.trim() ? `${form.machineType} (${form.machine.trim()})` : form.machineType;
  const lines = [
    'Olá, Isabelly. Gostaria de simular um consórcio.',
    '',
    `Nome: ${form.name.trim()}`,
    form.city.trim() ? `Cidade: ${form.city.trim()}` : null,
    `Máquina: ${machine}, ${form.condition.toLowerCase()}`,
    form.value ? `Valor aproximado: ${form.value}` : null,
    form.initial ? `Disponível para investir no início: ${form.initial}` : null,
    `Prazo: ${form.term.toLowerCase()} · Parcelas: ${form.frequency.toLowerCase()}`,
  ];
  return lines.filter((line) => line !== null).join('\n');
}

function ChoiceGroup({ legend, name, options, value, onChange }) {
  return (
    <fieldset className="choice-group">
      <legend>{legend}</legend>
      <div className="choice-options">
        {options.map((option) => (
          <label key={option} className={value === option ? 'choice is-selected' : 'choice'}>
            <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function SimulationForm() {
  const [form, setForm] = useState(emptyForm);
  const update = (field) => (value) => setForm((current) => ({ ...current, [field]: value }));
  const handleInput = (field) => (event) => update(field)(event.target.type === 'checkbox' ? event.target.checked : event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(buildWhatsappLink(buildSimulationMessage(form)), '_blank', 'noopener');
  };

  return (
    <form className="simulation-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Seu nome</span>
          <input type="text" autoComplete="name" required value={form.name} onChange={handleInput('name')} />
        </label>
        <label className="field">
          <span>Cidade e estado</span>
          <input type="text" autoComplete="address-level2" placeholder="Ex.: Marabá (PA)" value={form.city} onChange={handleInput('city')} />
        </label>
        <label className="field">
          <span>Tipo de máquina</span>
          <select required value={form.machineType} onChange={handleInput('machineType')}>
            <option value="" disabled>Selecione</option>
            {machineTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Qual máquina? <small>(opcional)</small></span>
          <input type="text" placeholder="Ex.: escavadeira 20 t" value={form.machine} onChange={handleInput('machine')} />
        </label>
        <label className="field">
          <span>Valor aproximado da máquina</span>
          <select value={form.value} onChange={handleInput('value')}>
            <option value="">Selecione</option>
            {valueRanges.map((range) => <option key={range}>{range}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Disponível para investir no início <small>(opcional)</small></span>
          <select value={form.initial} onChange={handleInput('initial')}>
            <option value="">Selecione</option>
            {initialRanges.map((range) => <option key={range}>{range}</option>)}
          </select>
        </label>
      </div>

      <div className="form-choices">
        <ChoiceGroup legend="Nova ou seminova?" name="condition" options={['Nova', 'Seminova']} value={form.condition} onChange={update('condition')} />
        <ChoiceGroup legend="Prazo do plano" name="term" options={termOptions} value={form.term} onChange={update('term')} />
        <ChoiceGroup legend="Parcelas" name="frequency" options={frequencyOptions} value={form.frequency} onChange={update('frequency')} />
      </div>

      <label className="consent">
        <input type="checkbox" required checked={form.consent} onChange={handleInput('consent')} />
        <span>Autorizo o contato da Isabelly pelo WhatsApp. Meus dados são usados apenas para este atendimento.</span>
      </label>

      <button type="submit" className="button button-primary button-wide">
        <WhatsAppIcon /> Enviar pelo WhatsApp
      </button>
      <p className="form-note">Simulação sem compromisso. Contratação sujeita a análise de crédito e às regras do grupo.</p>
    </form>
  );
}

function App() {
  const bandRef = useRef(null);
  const [openQuestion, setOpenQuestion] = useState(0);

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    // Elementos que já começam visíveis na tela (ex.: o hero) recebem a
    // classe de imediato, sem depender do primeiro disparo assíncrono do
    // IntersectionObserver — evita o conteúdo ficar preso em opacidade 0.
    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('is-visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    revealElements.forEach((element) => observer.observe(element));

    // Rede de segurança: garante que nenhum bloco fique invisível para
    // sempre caso o observer não dispare por algum motivo.
    const fallbackTimer = window.setTimeout(() => {
      revealElements.forEach((element) => element.classList.add('is-visible'));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!bandRef.current) return;
        const rect = bandRef.current.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        bandRef.current.style.setProperty('--band-shift', `${Math.max(0, Math.min(1, progress)) * -60}px`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Isabelly Rufino — voltar ao início">
          <span className="brand-monogram" aria-hidden="true">IR</span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-text">
            <span className="brand-name">Isabelly Rufino</span>
            <span className="brand-role">Consórcio · Grupo Capital</span>
          </span>
        </a>
        <nav className="header-nav" aria-label="Seções da página">
          <a href="#como-funciona">Como funciona</a>
          <a href="#comparativo">Consórcio x financiamento</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="header-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> <span>Falar no WhatsApp</span>
        </a>
      </header>

      <main>
        <section className="hero section-shell" id="inicio">
          <div className="hero-copy" data-reveal="left">
            <p className="eyebrow">Consórcio de máquinas pesadas</p>
            <h1>Sua próxima máquina, conquistada <em>sem juros</em>.</h1>
            <p className="hero-text">
              Planejamento de consórcio para linha amarela, agro, caminhões e implementos, com parcelas
              mensais, semestrais ou anuais e atendimento pessoal do início ao fim.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#simulacao">Simular meu plano</a>
              <a className="text-link" href="#como-funciona">Entender o consórcio <span aria-hidden="true">→</span></a>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Sem juros</dt>
                <dd>Taxa de administração diluída no plano</dd>
              </div>
              <div>
                <dt>Compra à vista</dt>
                <dd>Nova ou seminova, onde você quiser</dd>
              </div>
              <div>
                <dt>Regulado</dt>
                <dd>Pelo Banco Central do Brasil</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-portrait" data-reveal="right">
            <img src={isabellyPhoto} alt="Isabelly Rufino, consultora de consórcio do Grupo Capital" width="640" height="640" fetchPriority="high" />
            <figcaption>
              <span className="portrait-name">Isabelly Rufino</span>
              <span className="portrait-role">Consultora de consórcio · Grupo Capital</span>
            </figcaption>
          </figure>
        </section>

        <div className="highlight-strip" aria-label="Destaques">
          <div className="section-shell highlight-strip-inner">
            <span>Sem juros</span>
            <span aria-hidden="true">•</span>
            <span>Parcelas mensais, semestrais ou anuais</span>
            <span aria-hidden="true">•</span>
            <span>Máquinas novas e seminovas</span>
            <span aria-hidden="true">•</span>
            <span>Atendimento em todo o Brasil</span>
          </div>
        </div>

        <section className="steps section-shell" id="como-funciona">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Como funciona</p>
              <h2>Consórcio, sem letras miúdas.</h2>
            </div>
            <p>Quatro etapas, do plano à máquina comprada à vista.</p>
          </div>
          <ol className="steps-grid" data-reveal>
            {consortiumSteps.map((step, index) => (
              <li key={step.title} className="step">
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="steps-note" data-reveal>
            A contemplação não tem data garantida. Por isso o plano é montado com você: valor da carta,
            prazo e estratégia de lance pensados para a sua operação.
          </p>
        </section>

        <section className="comparison section-shell" id="comparativo">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Consórcio ou financiamento?</p>
              <h2>A escolha certa depende do seu momento.</h2>
            </div>
            <p>Cada caminho tem vantagens. Veja as diferenças lado a lado.</p>
          </div>
          <div className="comparison-table-wrap" data-reveal>
            <table className="comparison-table">
              <caption className="sr-only">Comparativo entre consórcio e financiamento</caption>
              <thead>
                <tr>
                  <th scope="col"><span className="sr-only">Critério</span></th>
                  <th scope="col" className="is-featured">Consórcio</th>
                  <th scope="col">Financiamento</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td className="is-featured">{row.consortium}</td>
                    <td>{row.financing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="comparison-note" data-reveal>
            <Pendente>Se você precisa da máquina imediatamente, o consórcio pode não ser o melhor caminho, e a Isabelly vai te dizer isso.</Pendente>
          </p>
        </section>

        <section className="band" ref={bandRef} aria-labelledby="band-title">
          <img className="band-image" src={faixaPhoto} alt="" loading="lazy" decoding="async" />
          <div className="band-content section-shell" data-reveal>
            <p className="eyebrow">Flexibilidade</p>
            <h2 id="band-title">Parcelas no ritmo da sua operação.</h2>
            <p>
              Mensal, semestral ou anual: o plano acompanha o fluxo de caixa de quem vive de produção,
              de safra, de obra ou de frete.
            </p>
          </div>
        </section>

        <section className="purchase section-shell">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">O que você pode comprar</p>
              <h2>Uma carta de crédito, muitas possibilidades.</h2>
            </div>
            <p>De concessionária, revenda ou particular, nova ou seminova, com nota fiscal.</p>
          </div>
          <div className="purchase-grid">
            {purchaseOptions.map((option, index) => (
              <div key={option.title} data-reveal data-delay={index}>
                <article className="purchase-card">
                  <div className="purchase-image">
                    {option.image ? (
                      <img src={option.image} alt="" loading="lazy" decoding="async" />
                    ) : (
                      <div className="image-placeholder"><Pendente>Foto a definir</Pendente></div>
                    )}
                  </div>
                  <div className="purchase-content">
                    <h3>{option.title}</h3>
                    <p>{option.text}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <p className="image-disclaimer">Imagens meramente ilustrativas.</p>
        </section>

        <section className="about section-shell" id="isabelly">
          <div className="about-photo" data-reveal="left">
            <img src={isabellyPhoto} alt="Isabelly Rufino no Grupo Capital" width="640" height="640" loading="lazy" decoding="async" />
          </div>
          <div className="about-copy" data-reveal="right">
            <p className="eyebrow">Quem cuida do seu plano</p>
            <blockquote>
              <p>“Você não fala com uma central. Fala comigo.”</p>
            </blockquote>
            <p>
              Sou Isabelly Rufino, consultora de consórcio do Grupo Capital. Meu trabalho é entender a sua
              operação, montar o plano junto com você e acompanhar cada etapa com transparência, sem
              promessas que eu não posso cumprir.
            </p>
            <div className="video-slot">
              <span className="video-play" aria-hidden="true">▶</span>
              <span><Pendente>Vídeo de apresentação (30 a 60 s) a gravar</Pendente></span>
            </div>
            <a className="text-link" href={instagramLink} target="_blank" rel="noreferrer">
              <InstagramIcon /> Acompanhe no Instagram
            </a>
          </div>
        </section>

        <section className="service section-shell">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">O atendimento</p>
              <h2>Do primeiro contato à assinatura.</h2>
            </div>
            <p>Quase tudo à distância. Só a assinatura do contrato é presencial.</p>
          </div>
          <ol className="service-timeline" data-reveal>
            {serviceSteps.map((step, index) => (
              <li key={step.title}>
                <span className="service-dot" aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="safety section-shell">
          <div className="safety-panel" data-reveal>
            <div className="safety-intro">
              <p className="eyebrow">Segurança</p>
              <h2>Como saber se é sério.</h2>
              <p>
                Consórcio é um produto regulado. Estas três verificações valem para qualquer proposta,
                inclusive a nossa.
              </p>
            </div>
            <div className="safety-list">
              {safetyPoints.map((point, index) => (
                <div key={point.title} className="safety-item">
                  <span className="safety-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
              <p className="safety-admin">
                Administradora dos grupos: <Pendente>razão social da Alpha, CNPJ e nº de autorização do Banco Central</Pendente>
              </p>
            </div>
          </div>
        </section>

        <section className="faq section-shell" id="duvidas">
          <div className="faq-layout">
            <div className="faq-aside" data-reveal>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2>As perguntas que todo cliente faz.</h2>
              <p>Respostas diretas. Se a sua não estiver aqui, pergunte no WhatsApp.</p>
            </div>
            <div className="faq-list" data-reveal>
              {frequentlyAskedQuestions.map((item, index) => {
                const isOpen = openQuestion === index;
                return (
                  <div className={isOpen ? 'faq-item is-open' : 'faq-item'} key={item.question}>
                    <h3>
                      <button
                        type="button"
                        className="faq-question"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => setOpenQuestion(isOpen ? null : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-sign" aria-hidden="true" />
                      </button>
                    </h3>
                    <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="simulation section-shell" id="simulacao">
          <div className="simulation-panel" data-reveal>
            <div className="simulation-intro">
              <p className="eyebrow">Simulação</p>
              <h2>Vamos planejar a sua próxima máquina?</h2>
              <p>
                Conte o que você procura. A mensagem chega pronta no WhatsApp da Isabelly, e ela responde
                com as opções para o seu caso.
              </p>
              <div className="simulation-signature">
                <img src={isabellyPhoto} alt="" width="56" height="56" loading="lazy" />
                <div>
                  <strong>Isabelly Rufino</strong>
                  <span>Consultora de consórcio</span>
                </div>
              </div>
            </div>
            <SimulationForm />
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-monogram" aria-hidden="true">IR</span>
            <div>
              <strong>Isabelly Rufino</strong>
              <span>Consultora de consórcio · Grupo Capital</span>
            </div>
          </div>
          <div className="footer-links">
            <a href={whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
            <a href={instagramLink} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
          </div>
        </div>
        <p className="footer-legal">
          Consórcio administrado por <Pendente>[razão social da administradora], CNPJ [00.000.000/0000-00]</Pendente>,
          autorizada e fiscalizada pelo Banco Central do Brasil, conforme a Lei 11.795/2008. Comercialização:
          Grupo Capital, <Pendente>CNPJ [00.000.000/0000-00]</Pendente>. A contemplação ocorre por sorteio ou lance e
          não tem data garantida. Contratação sujeita a análise de crédito e às regras do grupo. Imagens meramente
          ilustrativas.
        </p>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com Isabelly pelo WhatsApp">
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
