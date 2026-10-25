import { useEffect, useState } from 'react';
import isabellyPhoto from './assets/pagina/isabelly.webp';
import isabellyAvatar from './assets/pagina/isabelly-160.webp';
import linhaAmarelaPhoto from './assets/pagina/linha-amarela.webp';
import linhaAmarelaPhotoSmall from './assets/pagina/linha-amarela-560.webp';
import agroPhoto from './assets/pagina/agro.webp';
import agroPhotoSmall from './assets/pagina/agro-400.webp';
import HeroMedia from './components/HeroMedia.jsx';
import Pending from './components/Pending.jsx';
import SimulationForm from './components/SimulationForm.jsx';
import { InstagramIcon, MenuIcon, StepIcon, WhatsAppIcon } from './components/Icons.jsx';
import {
  aboutWhatsappMessage,
  acquisitionPaths,
  acquisitionWhatsappMessage,
  buildWhatsappLink,
  company,
  consortiumSteps,
  faqWhatsappMessage,
  frequentlyAskedQuestions,
  heroFacts,
  heroWhatsappMessage,
  instagramLink,
  paymentRhythms,
  purchaseCategories,
  safetyPoints,
  serviceCommitments,
  whatsappGreeting,
} from './content.js';

const whatsappLink = buildWhatsappLink(whatsappGreeting);

// Vídeo de apresentação opcional: salve `isabelly-apresentacao.mp4` em src/assets/pagina/.
const introVideo = Object.values(
  import.meta.glob('./assets/pagina/isabelly-apresentacao.mp4', { eager: true, import: 'default' }),
)[0];

const navLinks = [
  ['#possibilidades', 'Opções de crédito'],
  ['#como-funciona', 'Como funciona'],
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

    // Em grupos (data-reveal="stagger"), cada item entra um pouco depois do anterior.
    revealElements.forEach((element) => {
      if (element.dataset.reveal !== 'stagger') return;
      [...element.children].forEach((child, index) => child.style.setProperty('--reveal-index', index));
    });

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
      <a className="brand" href="#inicio">
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
      <a className="header-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" data-cta="cabecalho-whatsapp">
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
              <h1>Planeje o crédito para conquistar <em>sua próxima máquina</em>.</h1>
              <p className="hero-text">
                Possibilidades de crédito para adquirir máquinas e equipamentos de construção, agronegócio e
                transporte, com planejamento financeiro e orientação personalizada da Isabelly, em todo o Brasil.
              </p>
              <p className="hero-note">
                Carta de crédito na modalidade consórcio: o crédito é liberado na contemplação, por sorteio ou lance.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={buildWhatsappLink(heroWhatsappMessage)} target="_blank" rel="noreferrer" data-cta="topo-whatsapp">
                  <WhatsAppIcon /> Quero avaliar meu crédito
                </a>
                <a className="text-link" href="#possibilidades">Conhecer as possibilidades <span aria-hidden="true">→</span></a>
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
            <dl className="hero-facts" data-reveal="stagger">
              {heroFacts.map((fact) => (
                <div key={fact.title}>
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="paths section-shell" id="possibilidades">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Crédito para aquisição de máquinas</p>
              <h2>Encontre o caminho certo para adquirir sua próxima máquina.</h2>
            </div>
            <p>
              Cada operação tem necessidades diferentes. Conheça as possibilidades e converse com a Isabelly para
              entender qual alternativa faz sentido para o seu negócio.
            </p>
          </div>
          <ul className="paths-grid" data-reveal="stagger">
            {acquisitionPaths.map((path) => (
              <li key={path.title} className="path-card">
                <StepIcon name={path.icon} />
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </li>
            ))}
          </ul>
          <div className="paths-cta" data-reveal>
            <p>Conte qual máquina você procura. A Isabelly responde com as possibilidades para o seu caso.</p>
            <a className="button button-primary" href={buildWhatsappLink(acquisitionWhatsappMessage)} target="_blank" rel="noreferrer" data-cta="possibilidades-whatsapp">
              <WhatsAppIcon /> Quero avaliar minhas possibilidades
            </a>
          </div>
        </section>

        <section className="rhythm" aria-labelledby="rhythm-title">
          <div className="section-shell rhythm-inner">
            <div className="rhythm-intro" data-reveal>
              <p className="eyebrow">Flexibilidade</p>
              <h2 id="rhythm-title">Parcelas no ritmo da sua operação.</h2>
            </div>
            <div className="rhythm-list" data-reveal="stagger">
              {paymentRhythms.map((rhythm) => (
                <div key={rhythm.title} className="rhythm-item">
                  <h3>{rhythm.title}</h3>
                  <p>{rhythm.text}</p>
                </div>
              ))}
              <p className="rhythm-note">A periodicidade disponível depende do plano escolhido.</p>
            </div>
          </div>
        </section>

        <section className="purchase section-shell" id="equipamentos">
          <div className="purchase-layout">
            <div className="purchase-visual" data-reveal="left">
              <img
                className="purchase-photo-main"
                src={linhaAmarelaPhoto}
                srcSet={`${linhaAmarelaPhotoSmall} 560w, ${linhaAmarelaPhoto} 900w`}
                sizes="(max-width: 860px) 90vw, 480px"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <img
                className="purchase-photo-inset"
                src={agroPhoto}
                srcSet={`${agroPhotoSmall} 400w, ${agroPhoto} 900w`}
                sizes="(max-width: 860px) 45vw, 240px"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <p className="image-disclaimer">Imagens meramente ilustrativas.</p>
            </div>
            <div className="purchase-content" data-reveal="right">
              <p className="eyebrow">Máquinas e equipamentos</p>
              <h2>Quais máquinas você pode adquirir?</h2>
              <p className="purchase-lead">
                Máquinas novas ou seminovas, de concessionária, revenda ou particular, com nota fiscal.
              </p>
              <ul className="purchase-list" data-reveal="stagger">
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
                      data-cta="categoria-simular"
                      onClick={() => setPresetMachineType({ value: category.machineType })}
                      aria-label={`Simular carta de crédito para ${category.title.toLowerCase()}`}
                    >
                      Simular <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="purchase-note">Os bens elegíveis dependem das regras e condições do plano contratado.</p>
            </div>
          </div>
        </section>

        <section className="steps section-shell" id="como-funciona">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Como funciona</p>
              <h2>Entenda as etapas para planejar sua aquisição.</h2>
            </div>
            <p>Na modalidade consórcio, a carta de crédito segue quatro etapas. Só a assinatura do contrato é presencial.</p>
          </div>
          <ol className="steps-grid" data-reveal="stagger">
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
              Valor da carta, prazo e estratégia de lance são planejados com você, de acordo com o objetivo e o
              caixa da sua operação.
            </p>
            <a className="text-link" href="#simulacao" data-cta="como-funciona-simular">Montar meu plano com a Isabelly <span aria-hidden="true">→</span></a>
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
              Meu trabalho é entender a sua operação, apresentar as possibilidades e explicar as condições antes de
              qualquer contratação. Você tira suas dúvidas diretamente comigo.
            </p>
            <ul className="about-commitments" data-reveal="stagger">
              {serviceCommitments.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {introVideo ? (
              <video className="about-video" src={introVideo} controls preload="none" poster={isabellyPhoto}>
                Vídeo de apresentação da Isabelly Rufino.
              </video>
            ) : (
              <Pending>Vídeo de apresentação (30 a 45 s): salvar como src/assets/pagina/isabelly-apresentacao.mp4</Pending>
            )}
            <div className="about-actions">
              <a className="button button-primary" href={buildWhatsappLink(aboutWhatsappMessage)} target="_blank" rel="noreferrer" data-cta="isabelly-whatsapp">
                <WhatsAppIcon /> Conversar com a Isabelly
              </a>
              <a className="text-link" href={instagramLink} target="_blank" rel="noreferrer">
                <InstagramIcon /> Acompanhe no Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="safety section-shell">
          <div className="safety-panel" data-reveal>
            <div className="safety-intro">
              <p className="eyebrow">Segurança</p>
              <h2>Entenda as condições antes de contratar.</h2>
              <p>
                A modalidade consórcio é regulada pelo Banco Central. Estas verificações valem para qualquer proposta,
                inclusive a nossa.
              </p>
            </div>
            <div className="safety-list" data-reveal="stagger">
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
                O Grupo Capital faz a comercialização e o atendimento.{' '}
                {administradoraText ? `Os grupos são administrados por ${administradoraText}.` : (
                  <Pending fallback="Os grupos são administrados pela administradora indicada na proposta e no contrato, com razão social e CNPJ. Confira a autorização dela no site do Banco Central.">
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
              <p>Respostas diretas para o que os clientes mais perguntam antes de começar.</p>
              <a className="text-link faq-whatsapp" href={buildWhatsappLink(faqWhatsappMessage)} target="_blank" rel="noreferrer" data-cta="duvidas-whatsapp">
                <WhatsAppIcon /> Tirar minhas dúvidas pelo WhatsApp
              </a>
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
                <img src={isabellyAvatar} alt="" width="56" height="56" loading="lazy" />
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
            <a href={whatsappLink} target="_blank" rel="noreferrer" data-cta="rodape-whatsapp"><WhatsAppIcon /> WhatsApp</a>
            <a href={instagramLink} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
          </div>
        </div>
        <div className="footer-legal">
          <p><strong>Modalidade:</strong> consórcio de bens, regido pela Lei 11.795/2008 e fiscalizado pelo Banco Central do Brasil.</p>
          <p>
            <strong>Administradora dos grupos:</strong>{' '}
            {administradoraText ?? (
              <Pending fallback="indicada na proposta e no contrato">razão social, CNPJ e autorização da administradora</Pending>
            )}
            .
          </p>
          <p>
            <strong>Comercialização e atendimento:</strong> Grupo Capital
            {company.grupoCapitalCnpj ? `, CNPJ ${company.grupoCapitalCnpj}` : <Pending>, CNPJ do Grupo Capital</Pending>}.
          </p>
          <p>
            A contemplação ocorre por sorteio ou lance, conforme as regras do grupo, sem data garantida. Contratação
            sujeita a análise de crédito e às condições do contrato. Imagens meramente ilustrativas.
          </p>
        </div>
      </footer>

      <a
        className={floatingHidden ? 'floating-whatsapp is-hidden' : 'floating-whatsapp'}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Isabelly pelo WhatsApp"
        data-cta="flutuante-whatsapp"
        tabIndex={floatingHidden ? -1 : undefined}
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
