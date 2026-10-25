import { useEffect, useState } from 'react';
import isabellyPhoto from './assets/pagina/isabelly.webp';
import linhaAmarelaPhoto from './assets/pagina/linha-amarela.webp';
import agroPhoto from './assets/pagina/agro.webp';
import HeroMedia from './components/HeroMedia.jsx';
import Pending from './components/Pending.jsx';
import SimulationForm from './components/SimulationForm.jsx';
import { InstagramIcon, MenuIcon, StepIcon, WhatsAppIcon } from './components/Icons.jsx';
import {
  buildWhatsappLink,
  company,
  comparisonRows,
  consortiumSteps,
  frequentlyAskedQuestions,
  heroFacts,
  instagramLink,
  paymentRhythms,
  purchaseCategories,
  safetyPoints,
  serviceCommitments,
  serviceSteps,
  whatsappGreeting,
} from './content.js';

const whatsappLink = buildWhatsappLink(whatsappGreeting);

// Vídeo de apresentação opcional: salve `isabelly-apresentacao.mp4` em src/assets/pagina/.
const introVideo = Object.values(
  import.meta.glob('./assets/pagina/isabelly-apresentacao.mp4', { eager: true, import: 'default' }),
)[0];

const navLinks = [
  ['#como-funciona', 'Como funciona'],
  ['#comparativo', 'Consórcio x financiamento'],
  ['#isabelly', 'Sobre a Isabelly'],
  ['#duvidas', 'Dúvidas'],
];

const { administradora } = company;
const administradoraText = administradora.nome
  ? `${administradora.nome}, CNPJ ${administradora.cnpj}, autorizada pelo Banco Central do Brasil (nº ${administradora.autorizacaoBacen})`
  : null;

function useRevealOnScroll() {
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
}

// Esconde o WhatsApp flutuante no topo (o cabeçalho já tem o botão), no formulário
// e no rodapé, para não cobrir campos e não competir com a chamada principal.
function useFloatingButtonHidden() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const targets = ['inicio', 'simulacao', 'rodape'].map((id) => document.getElementById(id)).filter(Boolean);
    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target)));
      setHidden(visible.size > 0);
    }, { threshold: 0.05 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return hidden;
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Isabelly Rufino — voltar ao início">
        <span className="brand-monogram" aria-hidden="true">IR</span>
        <span className="brand-divider" aria-hidden="true" />
        <span className="brand-text">
          <span className="brand-name">Isabelly Rufino</span>
          <span className="brand-role">Crédito para máquinas · Grupo Capital</span>
        </span>
      </a>
      <nav className={menuOpen ? 'header-nav is-open' : 'header-nav'} id="menu-principal" aria-label="Seções da página">
        {navLinks.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="header-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
        <WhatsAppIcon /> <span>Falar no WhatsApp</span>
      </a>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="menu-principal"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon open={menuOpen} />
      </button>
    </header>
  );
}

function App() {
  const [openQuestion, setOpenQuestion] = useState(0);
  const [presetMachineType, setPresetMachineType] = useState(null);
  const floatingHidden = useFloatingButtonHidden();
  useRevealOnScroll();

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />

      <main id="conteudo">
        <section className="hero" id="inicio">
          <HeroMedia />
          <div className="hero-inner section-shell">
            <div className="hero-copy" data-reveal="left">
              <p className="eyebrow">Crédito para máquinas e equipamentos</p>
              <h1>Crédito para a sua próxima máquina, com <em>um bom plano</em>.</h1>
              <p className="hero-text">
                Carta de crédito por consórcio para construção, agronegócio e transporte, sem juros de
                financiamento, com os custos apresentados desde a simulação e uma estratégia montada para a sua
                operação.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#simulacao">Planejar meu próximo passo</a>
                <a className="text-link" href="#como-funciona">Entenda como funciona <span aria-hidden="true">→</span></a>
              </div>
            </div>

            <figure className="hero-person" data-reveal="right">
              <img src={isabellyPhoto} alt="Isabelly Rufino, consultora do Grupo Capital" width="640" height="640" />
              <figcaption>
                <span className="hero-person-name">Isabelly Rufino</span>
                <span className="hero-person-role">Consultora · Grupo Capital</span>
              </figcaption>
            </figure>
          </div>

          <div className="section-shell">
            <dl className="hero-facts" data-reveal>
              {heroFacts.map((fact) => (
                <div key={fact.title}>
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="steps section-shell" id="como-funciona">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Passo a passo</p>
              <h2>Como funciona a sua carta de crédito.</h2>
            </div>
            <p>A carta de crédito vem de um consórcio. São quatro etapas, do plano à compra da máquina.</p>
          </div>
          <ol className="steps-grid" data-reveal>
            {consortiumSteps.map((step, index) => (
              <li key={step.title} className="step">
                <div className="step-top">
                  <StepIcon name={step.icon} />
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="steps-cta" data-reveal>
            <p>
              Não é aquele consórcio de pagar por anos esperando o sorteio: valor da carta, prazo e estratégia de
              lance são planejados para tentar antecipar a contemplação. Mesmo assim, não há data garantida, e você
              sabe disso antes de assinar.
            </p>
            <a className="text-link" href="#simulacao">Montar o meu plano com a Isabelly <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="comparison section-shell" id="comparativo">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Consórcio ou financiamento?</p>
              <h2>A escolha certa depende do seu momento.</h2>
            </div>
            <p>Cada caminho tem custos e vantagens. Veja as diferenças lado a lado.</p>
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
                    <td className="is-featured" data-label="Consórcio">{row.consortium}</td>
                    <td data-label="Financiamento">{row.financing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="comparison-note" data-reveal>
            O custo total depende das condições de cada proposta. Compare o custo efetivo das opções antes de
            decidir. Se você precisa da máquina imediatamente, o consórcio pode não ser o melhor caminho, e a
            Isabelly vai te dizer isso.
          </p>
        </section>

        <section className="rhythm" aria-labelledby="rhythm-title">
          <div className="section-shell rhythm-inner">
            <div className="rhythm-intro" data-reveal>
              <p className="eyebrow">Flexibilidade</p>
              <h2 id="rhythm-title">Parcelas no ritmo da sua operação.</h2>
            </div>
            <div className="rhythm-list" data-reveal>
              {paymentRhythms.map((rhythm) => (
                <div key={rhythm.title} className="rhythm-item">
                  <h3>{rhythm.title}</h3>
                  <p>{rhythm.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="purchase section-shell" id="equipamentos">
          <div className="purchase-layout">
            <div className="purchase-visual" data-reveal="left">
              <img className="purchase-photo-main" src={linhaAmarelaPhoto} alt="" loading="lazy" decoding="async" />
              <img className="purchase-photo-inset" src={agroPhoto} alt="" loading="lazy" decoding="async" />
              <p className="image-disclaimer">Imagens meramente ilustrativas.</p>
            </div>
            <div className="purchase-content" data-reveal="right">
              <p className="eyebrow">O que a carta de crédito pode comprar</p>
              <h2>Uma carta de crédito, muitas possibilidades.</h2>
              <p className="purchase-lead">
                Máquinas novas ou seminovas, de concessionária, revenda ou particular, com nota fiscal e conforme as
                regras do grupo.
              </p>
              <ul className="purchase-list">
                {purchaseCategories.map((category, index) => (
                  <li key={category.title}>
                    <span className="purchase-index">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.text}</p>
                    </div>
                    <a
                      className="purchase-action"
                      href="#simulacao"
                      onClick={() => setPresetMachineType({ value: category.machineType })}
                      aria-label={`Simular consórcio para ${category.title.toLowerCase()}`}
                    >
                      Simular <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
            <p className="about-name">
              <strong>Isabelly Rufino</strong>
              <span>Consultora · Grupo Capital</span>
            </p>
            <p className="about-text">
              Meu trabalho é entender a sua operação, montar o plano junto com você e acompanhar cada etapa com
              transparência.
            </p>
            <ul className="about-commitments">
              {serviceCommitments.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {introVideo ? (
              <video className="about-video" src={introVideo} controls preload="none" poster={isabellyPhoto}>
                Vídeo de apresentação da Isabelly Rufino.
              </video>
            ) : (
              <Pending>Vídeo de apresentação (30 a 45 s): salvar como src/assets/pagina/isabelly-apresentacao.mp4</Pending>
            )}
            <a className="text-link about-instagram" href={instagramLink} target="_blank" rel="noreferrer">
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
                Consórcio é um produto regulado. Estas três verificações valem para qualquer proposta, inclusive a
                nossa.
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
                {administradoraText ? `Administradora dos grupos: ${administradoraText}.` : (
                  <Pending fallback="Os dados da administradora dos grupos (razão social, CNPJ e autorização do Banco Central) constam na proposta e no contrato.">
                    Administradora: preencher razão social, CNPJ e nº de autorização do Banco Central em src/content.js
                  </Pending>
                )}
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
                      {Array.isArray(item.answer) ? (
                        item.answer.map(([label, text]) => <p key={label}><strong>{label}:</strong> {text}</p>)
                      ) : (
                        <p>{item.answer}</p>
                      )}
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
              <h2>Vamos planejar o seu próximo passo?</h2>
              <p>
                Cinco perguntas rápidas. No final, a mensagem abre pronta no seu WhatsApp, para você revisar e
                enviar à Isabelly.
              </p>
              <div className="simulation-signature">
                <img src={isabellyPhoto} alt="" width="56" height="56" loading="lazy" />
                <div>
                  <strong>Isabelly Rufino</strong>
                  <span>Consultora · Grupo Capital</span>
                </div>
              </div>
            </div>
            <SimulationForm presetMachineType={presetMachineType} />
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell" id="rodape">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-monogram" aria-hidden="true">IR</span>
            <div>
              <strong>Isabelly Rufino</strong>
              <span>Consultora · Grupo Capital</span>
            </div>
          </div>
          <div className="footer-links">
            <a href={whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
            <a href={instagramLink} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
          </div>
        </div>
        <p className="footer-legal">
          Consórcio administrado por{' '}
          {administradoraText ?? (
            <Pending fallback="administradora indicada na proposta e no contrato">razão social, CNPJ e autorização da administradora</Pending>
          )}
          . Comercialização: Grupo Capital
          {company.grupoCapitalCnpj ? `, CNPJ ${company.grupoCapitalCnpj}` : <Pending>, CNPJ do Grupo Capital</Pending>}. O
          consórcio é regido pela Lei 11.795/2008 e fiscalizado pelo Banco Central do Brasil. A contemplação ocorre
          por sorteio ou lance e não tem data garantida. Contratação sujeita a análise de crédito e às regras do
          grupo. Imagens meramente ilustrativas.
        </p>
      </footer>

      <a
        className={floatingHidden ? 'floating-whatsapp is-hidden' : 'floating-whatsapp'}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Isabelly pelo WhatsApp"
        tabIndex={floatingHidden ? -1 : undefined}
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
