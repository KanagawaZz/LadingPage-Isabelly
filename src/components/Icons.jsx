export function InstagramIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 3.8A11.55 11.55 0 0 0 12 0.4C5.62.4.43 5.59.43 11.97c0 2.03.53 4.02 1.54 5.77L.33 23.6l6-1.57a11.55 11.55 0 0 0 5.67 1.46h.01c6.38 0 11.56-5.19 11.56-11.57 0-3.1-1.2-6-3.37-8.12Zm-8.2 17.71h-.01a9.58 9.58 0 0 1-4.88-1.34l-.35-.21-3.56.93.95-3.47-.23-.36a9.57 9.57 0 0 1-1.47-5.08c0-5.27 4.29-9.56 9.57-9.56 2.55 0 4.95 1 6.76 2.81a9.51 9.51 0 0 1 2.8 6.77c0 5.27-4.29 9.56-9.58 9.56Zm5.25-7.17c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.73.92-.9 1.1-.16.2-.33.22-.62.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.52.3-.48.86-1.59.1-.2.05-.37-.03-.52-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.54c-.19 0-.5.07-.76.37-.26.29-1 .98-1 2.4 0 1.42 1.03 2.8 1.17 2.99.15.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.62.69.22 1.32.19 1.82.12.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

// Ícones de traço das etapas do consórcio
const stepPaths = {
  plan: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M9 8.5h6M9 12h6M9 15.5h3.5" />
    </>
  ),
  group: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="16.5" cy="10" r="2.4" />
      <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6M14.5 14.7c2.6-.4 4.9.9 5.8 4.3" />
    </>
  ),
  draw: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12.2 2.5 2.5 4.9-5.2" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15.5" r="4" />
      <path d="m10.9 12.6 8.6-8.6M16.5 7l2.5 2.5M14 9.5l1.8 1.8" />
    </>
  ),
};

export function StepIcon({ name }) {
  return (
    <svg className="step-icon" viewBox="0 0 24 24" aria-hidden="true">
      {stepPaths[name]}
    </svg>
  );
}

export function MenuIcon({ open }) {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export function PlayPauseIcon({ playing }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="media-icon">
      {playing ? <path d="M8 5h3v14H8zM13 5h3v14h-3z" /> : <path d="M8 5v14l11-7z" />}
    </svg>
  );
}
