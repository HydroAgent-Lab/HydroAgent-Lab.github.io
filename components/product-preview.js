export function ProductPreview({ content }) {
  const preview = content.home.productPreview;

  return (
    <section className="product-preview">
      <div className="product-preview-copy">
        <p className="eyebrow">{preview.eyebrow}</p>
        <h2>{preview.title}</h2>
        <p>{preview.text}</p>
      </div>

      <div className="preview-frame" aria-hidden="true">
        <div className="preview-main">
          <div className="preview-toolbar">
            <div className="preview-toolbar-copy">
              <strong>{preview.topbar.title}</strong>
              <span>{preview.topbar.status}</span>
            </div>
            <div className="preview-toolbar-actions">
              <span className="preview-toolbar-pill">Review</span>
              <span className="preview-toolbar-pill ghost">v4</span>
            </div>
          </div>

          <div className="preview-stage">
            <div className="preview-chart">
              <div className="preview-chart-header">
                <span>{preview.modules[0].label}</span>
                <strong>{preview.modules[0].title}</strong>
                <p>{preview.modules[0].text}</p>
              </div>
              <div className="preview-chart-line one" />
              <div className="preview-chart-line two" />
              <div className="preview-chart-line three" />
            </div>

            <div className="preview-kpi-stack">
              {preview.kpis.map((kpi) => (
                <article key={kpi.label} className="preview-kpi-card">
                  <span>{kpi.label}</span>
                  <strong>{kpi.value}</strong>
                  <p>{kpi.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="preview-module-grid">
            {preview.modules.slice(1).map((module) => (
              <article key={module.title} className="preview-module-card">
                <span>{module.label}</span>
                <strong>{module.title}</strong>
                <p>{module.text}</p>
              </article>
            ))}
          </div>

          <div className="preview-bottom">
            <div className="preview-log-list">
              {preview.logs.map((log) => (
                <div key={log} className="preview-log">
                  <span>{log}</span>
                </div>
              ))}
            </div>
            <div className="preview-stack">
              {preview.panels.map((panel) => (
                <article key={panel.label} className="preview-card">
                  <span>{panel.label}</span>
                  <strong>{panel.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
