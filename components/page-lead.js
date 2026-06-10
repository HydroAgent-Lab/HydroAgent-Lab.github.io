export function PageLead({ eyebrow, title, text, facts = [] }) {
  return (
    <section className="page-lead">
      <div className="page-lead-main">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-lead-side">
        <p>{text}</p>
        {facts.length ? (
          <div className="page-lead-facts">
            {facts.map((fact) => (
              <article key={fact.label} className="page-lead-fact">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
