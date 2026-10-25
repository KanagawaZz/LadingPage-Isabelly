# Registro de decisões

## Posicionamento (atualizado em 25/10/2026)

- A página vende **consórcio de máquinas pesadas**, não máquinas. A Isabelly é consultora do Grupo Capital; os grupos são administrados pela Alpha.
- Diretrizes de conteúdo: o produto é chamado de consórcio com clareza, a contemplação não tem data garantida e a contratação é sujeita a análise.
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

1. Topo: imagem ou vídeo de fundo, título, cartão da Isabelly e três destaques
2. Como funciona (4 etapas, com ícones) e chamada para a simulação
3. Consórcio x financiamento (tabela no desktop, cartões no celular)
4. Parcelas no ritmo da sua operação (mensal, semestral, anual)
5. O que a carta de crédito pode comprar (cada categoria pré-seleciona a simulação)
6. Quem cuida do seu plano (Isabelly, compromissos e vídeo opcional)
7. O atendimento (etapas reais, com assinatura presencial)
8. Segurança: como saber se é sério
9. Dúvidas frequentes
10. Simulação em 5 etapas, que abre o WhatsApp com a mensagem pronta
11. Rodapé com avisos legais

## Organização do código

- `src/content.js`: textos, dados legais (`company`) e opções do formulário.
- `src/components/`: `HeroMedia` (imagem/vídeo do topo), `SimulationForm`, `Icons`, `Pending`.
- `Pending`: pendências aparecem destacadas só no `npm run dev`. No build de produção, a página mostra um texto neutro no lugar.

## Pendências (destacadas no modo de desenvolvimento)

- Razão social, CNPJ e número de autorização no Banco Central da administradora (Alpha): preencher `company` em `src/content.js`.
- CNPJ do Grupo Capital (mesmo lugar) e logo em arquivo.
- Confirmar com a Isabelly: resposta da FAQ "Posso usar minha máquina ou meu veículo no negócio?", a frase "o consórcio pode não ser o melhor caminho" e os três compromissos da seção "Quem cuida do seu plano".
- Confirmar se o reajuste da carta e das parcelas e a análise da administradora antes da liberação seguem o contrato da Alpha (textos em `src/content.js`).
- Esclarecer o que é a "entrada mínima de 20%" no contrato (lance? antecipação de parcelas?). Até lá, a página não fala em entrada.
- Vídeo de fundo do topo (`hero.mp4`, 8 a 10 s) e vídeo de apresentação (`isabelly-apresentacao.mp4`, 30 a 45 s). Especificações em `src/assets/maquinas/LEIA-ME.txt`.
- Foto em alta resolução da Isabelly (a atual tem 640 × 640) e fotos dela em entregas e eventos.
- Fotos de máquinas próprias ou com licença de uso, para substituir as provisórias (topo e seção de equipamentos) antes de publicar. Falta também uma foto de caminhão; hoje a categoria aparece só em texto.
- Domínio: depois de definido, trocar `/og.jpg` em `index.html` pela URL completa.
- Black Friday: sem oferta definida, a página vai ao ar sem campanha.
