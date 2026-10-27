# Registro de decisões

## Posicionamento (atualizado em 25/10/2026)

- A página vende **consórcio de máquinas pesadas**, não máquinas. A Isabelly é consultora do Grupo Capital; os grupos são administrados pela Alpha.
- Diretrizes de conteúdo: o produto é chamado de consórcio com clareza, a contemplação não tem data garantida e a contratação é sujeita a análise.
- Comunicação comercial centrada em "crédito para aquisição de máquinas" e "carta de crédito" (pedido da Isabelly). A expressão "na modalidade consórcio" continua no topo da página, no passo a passo, na primeira pergunta das dúvidas frequentes, na seção de segurança e no rodapé. A forma de liberação (contemplação por sorteio ou lance, sem data garantida) aparece na seção "Possibilidades".
- A página não apresenta estoque de máquinas, não oferece modalidades além do consórcio e só traz números e informações confirmados. Fotos de máquinas são ilustrativas e devem ser próprias ou licenciadas.
- Público principal: mineração (sobretudo Pará), além de agro, obra e transporte. Tráfego pago.
- Tom: formal e próximo. Números de taxa e parcela ficam como "consulte" (resposta 6.3 do roteiro).

## Decisões aprovadas

- Stack: React + Vite + CSS puro. Mobile-first.
- Cores: azul-marinho com verde-limão (aprovado pela Isabelly).
- Número do WhatsApp: +55 65 8131-3761.
- A Isabelly aparece em destaque (topo, seção "Quem cuida do seu plano" e formulário).

- "Sem juros" sempre como "sem juros de financiamento", citando os demais custos (taxa de administração, fundo de reserva, seguros). O comparativo não afirma que um caminho é sempre mais barato.

## Estrutura

A ordem segue: proposta → possibilidades → parcelas → o que comprar → como funciona → quem atende → segurança → dúvidas → simulação.

1. Topo: imagem ou vídeo de fundo, título, aviso da modalidade, botão de WhatsApp, cartão da Isabelly e três destaques
2. Opções de crédito: 3 blocos + WhatsApp
3. Parcelas no ritmo da sua operação (mensal, semestral, anual)
4. Quais máquinas você pode adquirir? (cada categoria pré-seleciona a simulação)
5. Como funciona: 4 etapas, já incluindo o atendimento (conversa e simulação, análise e assinatura, contemplação, uso do crédito). A antiga seção "O atendimento" foi unida a esta, porque repetia uma lista parecida.
6. Quem cuida do seu plano (Isabelly, compromissos, vídeo opcional + WhatsApp)
7. Segurança: entenda as condições antes de contratar
8. Dúvidas frequentes (+ WhatsApp)
9. Simulação em 5 etapas, com confirmação e link de reserva para o WhatsApp
10. Rodapé com avisos legais

Cada ponto de contato do WhatsApp tem sua própria mensagem inicial (em `src/content.js`) e um atributo `data-cta`, para medir os cliques quando houver uma ferramenta de análise.

## Tipografia (26/10/2026)

- Newsreader nos títulos e elementos editoriais (citação, nomes, números das etapas, monograma "IR" em itálico) e DM Sans no texto, na navegação, nos botões e no formulário.
- Substituiu Cormorant + Allura: a Cormorant era fina demais sobre a foto e no celular, tinha o acento do "ê" deslocado e, junto com a caligrafia Allura, puxava a marca para moda e beleza.
- Escala em tokens no início de `src/styles.css`. **Regra: todo `font-size` usa um token** (`--text-display`, `--text-h2`, `--text-quote`, `--text-serif-title`, `--text-serif-label`, `--text-serif-number`, `--text-lead`, `--text-h3`, `--text-body`, `--text-ui`, `--text-small`, `--text-eyebrow`, `--text-input`). A única exceção é o monograma "IR", que é logotipo. As variações de celular ficam nos próprios tokens (bloco `:root` da media query de 760px), não em cada componente.
- Pesos: Newsreader 500 nos títulos e números, 600 nos nomes e destaques; DM Sans 400 no texto, 600 em links e rótulos do formulário, 700 nos botões e rótulos em caixa alta.
- "sua próxima máquina" fica na mesma linha no desktop e em celulares a partir de 385px.

## Desempenho

- Fontes hospedadas no próprio projeto (`public/fonts`), sem chamadas ao Google, recortadas com fontTools para os pesos e caracteres usados: 118 KB no total (os arquivos originais tinham 257 KB). Detalhes em `public/fonts/LEIA-ME.txt`.
- Fontes de reserva ajustadas (Georgia/Arial) para o texto não "pular" na troca.
- Pré-carga das três fontes e da foto do topo; imagens menores para o celular (`srcset`).
- Lighthouse (build de produção, 26/10/2026): celular 94 de desempenho (LCP 3,0 s, CLS 0), desktop 99–100. Com a Cormorant era 98 no celular; a diferença é o custo da nova fonte numa rede 4G lenta simulada.

## Organização do código

- `src/content.js`: textos, dados legais (`company`) e opções do formulário.
- `src/components/`: `HeroMedia` (imagem/vídeo do topo), `SimulationForm`, `Icons`, `Pending`.
- `Pending`: pendências aparecem destacadas só no `npm run dev`. No build de produção, a página mostra um texto neutro no lugar.

## Pendências (destacadas no modo de desenvolvimento)

- Razão social, CNPJ e número de autorização no Banco Central da administradora (Alpha): preencher `company` em `src/content.js`.
- CNPJ do Grupo Capital (mesmo lugar) e logo em arquivo.
- Confirmar com a Isabelly: resposta da FAQ "Posso usar minha máquina ou meu veículo no negócio?" e os três compromissos da seção "Quem cuida do seu plano".
- Confirmar se a simulação mostra todos os custos (taxa de administração, fundo de reserva, seguros), como diz o destaque "Você conhece todos os custos na simulação" no topo.
- Confirmar se há restrições para o uso da carta (idade máxima da máquina, tipos de bem aceitos, garantias exigidas na liberação).
- Confirmar se as parcelas mensais, semestrais e anuais valem para todos os planos ou só para alguns (a página diz "A periodicidade disponível depende do plano escolhido").
- Confirmar os critérios da administradora para cliente com nome negativado (adesão e liberação do crédito).
- Primeira tela: título, subtítulo e botões sem "consórcio"; a linha "Carta de crédito na modalidade consórcio…" fica logo acima do botão principal, para ser vista antes do primeiro clique, inclusive no celular.
- Confirmar se o reajuste da carta e das parcelas e a análise da administradora antes da liberação seguem o contrato da Alpha (textos em `src/content.js`).
- Esclarecer o que é a "entrada mínima de 20%" no contrato (lance? antecipação de parcelas?). Até lá, a página não fala em entrada.
- Vídeo de fundo do topo (`hero.mp4`, 8 a 10 s) e vídeo de apresentação (`isabelly-apresentacao.mp4`, 30 a 45 s). Especificações em `src/assets/maquinas/LEIA-ME.txt`.
- Foto em alta resolução da Isabelly (a atual tem 640 × 640) e fotos dela em entregas e eventos.
- Fotos de máquinas próprias ou com licença de uso, para substituir as provisórias (topo e seção de equipamentos) antes de publicar. Falta também uma foto de caminhão; hoje a categoria aparece só em texto.
- Domínio: depois de definido, trocar `/og.jpg` em `index.html` pela URL completa.
- Black Friday: sem oferta definida, a página vai ao ar sem campanha.
