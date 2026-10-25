import { useEffect, useRef, useState } from 'react';
import {
  buildWhatsappLink,
  frequencyOptions,
  goals,
  initialRanges,
  machineTypes,
  termOptions,
  valueRanges,
} from '../content.js';
import { WhatsAppIcon } from './Icons.jsx';

const steps = ['Objetivo', 'Equipamento', 'Valores', 'Plano', 'Contato'];
const frequencyPlural = { Mensal: 'mensais', Semestral: 'semestrais', Anual: 'anuais' };

const emptyForm = {
  goal: '',
  machineType: '',
  machine: '',
  condition: 'Nova',
  value: '',
  initial: '',
  term: 'Médio',
  frequency: 'Mensal',
  name: '',
  city: '',
  consent: false,
};

// Campos obrigatórios de cada etapa e a mensagem exibida quando faltam.
const requirements = [
  [['goal', 'Escolha o seu objetivo para continuar.']],
  [['machineType', 'Escolha o tipo de equipamento para continuar.']],
  [],
  [],
  [['name', 'Informe o seu nome.'], ['consent', 'Confirme a autorização de contato.']],
];

function buildSimulationMessage(form) {
  const machine = form.machine.trim() ? `${form.machineType} (${form.machine.trim()})` : form.machineType;
  const lines = [
    'Olá, Isabelly. Gostaria de simular uma carta de crédito para máquinas.',
    '',
    `Nome: ${form.name.trim()}`,
    form.city.trim() ? `Cidade: ${form.city.trim()}` : null,
    `Objetivo: ${form.goal}`,
    `Equipamento: ${machine}, ${form.condition.toLowerCase()}`,
    form.value ? `Valor aproximado: ${form.value}` : null,
    form.initial ? `Disponível para investir no início: ${form.initial}` : null,
    `Prazo: ${form.term.toLowerCase()} · Parcelas: ${form.frequency.toLowerCase()}`,
  ];
  return lines.filter((line) => line !== null).join('\n');
}

function OptionGroup({ legend, name, options, value, onChange, variant = 'chip', error }) {
  return (
    <fieldset className="option-group" aria-describedby={error ? `${name}-error` : undefined}>
      <legend>{legend}</legend>
      <div className={`option-list option-list-${variant}`}>
        {options.map((option) => (
          <label key={option} className={value === option ? `option option-${variant} is-selected` : `option option-${variant}`}>
            <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {error && <p className="field-error" id={`${name}-error`}>{error}</p>}
    </fieldset>
  );
}

function SelectField({ label, hint, value, options, onChange, placeholder = 'Selecione' }) {
  return (
    <label className="field">
      <span>{label}{hint && <small> {hint}</small>}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function SimulationForm({ presetMachineType }) {
  const [form, setForm] = useState(emptyForm);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const headingRef = useRef(null);
  const hasNavigated = useRef(false);

  const update = (field) => (value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  // Categoria escolhida na seção "O que a carta pode comprar"
  useEffect(() => {
    if (presetMachineType) update('machineType')(presetMachineType.value);
  }, [presetMachineType]);

  // Leva o foco ao título da etapa ao avançar ou voltar (leitores de tela e teclado).
  useEffect(() => {
    if (hasNavigated.current) headingRef.current?.focus();
  }, [step]);

  const goTo = (nextStep) => {
    hasNavigated.current = true;
    setStep(nextStep);
  };

  const validate = (stepIndex) => {
    const missing = {};
    requirements[stepIndex].forEach(([field, message]) => {
      const value = form[field];
      if (typeof value === 'string' ? !value.trim() : !value) missing[field] = message;
    });
    setErrors(missing);
    return Object.keys(missing).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate(step)) return;
    if (step < steps.length - 1) {
      goTo(step + 1);
      return;
    }
    window.open(buildWhatsappLink(buildSimulationMessage(form)), '_blank', 'noopener');
  };

  const summary = [
    ['Objetivo', form.goal, 0],
    ['Equipamento', `${form.machineType}${form.machine.trim() ? ` (${form.machine.trim()})` : ''}, ${form.condition.toLowerCase()}`, 1],
    ['Valores', [form.value, form.initial && `início: ${form.initial}`].filter(Boolean).join(' · ') || 'Não informado', 2],
    ['Plano', `Prazo ${form.term.toLowerCase()}, parcelas ${frequencyPlural[form.frequency]}`, 3],
  ];

  return (
    <form className="simulation-form" onSubmit={handleSubmit} noValidate>
      <div className="form-progress">
        <p className="form-progress-label" aria-live="polite">
          Etapa {step + 1} de {steps.length}: <strong>{steps[step]}</strong>
        </p>
        <ol className="form-progress-bar" aria-hidden="true">
          {steps.map((name, index) => (
            <li key={name} className={index <= step ? 'is-done' : undefined} />
          ))}
        </ol>
      </div>

      <h3 className="form-step-title" ref={headingRef} tabIndex={-1}>
        {[
          'O que você quer conquistar?',
          'Qual equipamento você procura?',
          'Quanto você pretende investir?',
          'Como prefere pagar?',
          'Para quem a Isabelly vai responder?',
        ][step]}
      </h3>

      {step === 0 && (
        <OptionGroup legend="Objetivo" name="goal" variant="card" options={goals} value={form.goal} onChange={update('goal')} error={errors.goal} />
      )}

      {step === 1 && (
        <div className="form-stack">
          <OptionGroup legend="Tipo de equipamento" name="machineType" variant="card" options={machineTypes} value={form.machineType} onChange={update('machineType')} error={errors.machineType} />
          <label className="field">
            <span>Qual máquina? <small>(opcional)</small></span>
            <input type="text" placeholder="Ex.: escavadeira 20 t" value={form.machine} onChange={(event) => update('machine')(event.target.value)} />
          </label>
          <OptionGroup legend="Nova ou seminova?" name="condition" options={['Nova', 'Seminova']} value={form.condition} onChange={update('condition')} />
        </div>
      )}

      {step === 2 && (
        <div className="form-stack">
          <SelectField label="Valor aproximado do equipamento" hint="(opcional)" value={form.value} options={valueRanges} onChange={update('value')} />
          <SelectField label="Disponível para investir no início" hint="(opcional)" value={form.initial} options={initialRanges} onChange={update('initial')} />
          <p className="form-hint">Um valor inicial pode ser usado como lance para tentar antecipar a contemplação, conforme as regras do grupo.</p>
        </div>
      )}

      {step === 3 && (
        <div className="form-stack">
          <OptionGroup legend="Prazo do plano" name="term" options={termOptions} value={form.term} onChange={update('term')} />
          <OptionGroup legend="Parcelas" name="frequency" options={frequencyOptions} value={form.frequency} onChange={update('frequency')} />
        </div>
      )}

      {step === 4 && (
        <div className="form-stack">
          <dl className="form-summary">
            {summary.map(([label, value, target]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
                <button type="button" className="form-edit" onClick={() => goTo(target)} aria-label={`Editar ${label.toLowerCase()}`}>
                  Editar
                </button>
              </div>
            ))}
          </dl>
          <div className="form-grid">
            <label className="field">
              <span>Seu nome</span>
              <input
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(event) => update('name')(event.target.value)}
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
            </label>
            <label className="field">
              <span>Cidade e estado <small>(opcional)</small></span>
              <input type="text" autoComplete="address-level2" placeholder="Ex.: Marabá (PA)" value={form.city} onChange={(event) => update('city')(event.target.value)} />
            </label>
          </div>
          <label className="consent">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => update('consent')(event.target.checked)}
              aria-invalid={errors.consent ? 'true' : undefined}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <span>Autorizo o contato da Isabelly pelo WhatsApp. Meus dados são usados apenas para este atendimento.</span>
          </label>
          {errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}
        </div>
      )}

      <div className="form-actions">
        {step > 0 && (
          <button type="button" className="button button-ghost" onClick={() => goTo(step - 1)}>
            Voltar
          </button>
        )}
        <button type="submit" className="button button-primary">
          {step < steps.length - 1 ? 'Continuar' : <><WhatsAppIcon /> Abrir no WhatsApp</>}
        </button>
      </div>
      <p className="form-note">
        {step < steps.length - 1
          ? 'Simulação sem compromisso. Nenhum dado é enviado antes da última etapa.'
          : 'A mensagem abre no seu WhatsApp para você revisar e enviar. Contratação sujeita a análise de crédito e às regras do grupo.'}
      </p>
    </form>
  );
}

export default SimulationForm;
