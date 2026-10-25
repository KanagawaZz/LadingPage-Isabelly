// Marca o que ainda depende de confirmação. Em desenvolvimento (npm run dev) aparece
// destacado; no build de produção mostra apenas o texto alternativo (`fallback`).
function Pending({ children, fallback = null }) {
  if (!import.meta.env.DEV) return fallback;
  return <mark className="pending" title="Pendente de confirmação">{children}</mark>;
}

export default Pending;
