import Image from 'next/image'
import Topbar from './components/Topbar'

export default function Home() {
  return (
    <>
      {/* ── Ribbon ── */}
      <div className="ribbon">
        <span className="ribbon-main">
          <span className="pulse" />
          Nuevo programa de diagnóstico operativo
        </span>
        <span className="ribbon-cta">
          — agendá una sesión gratuita.&nbsp;<a href="#">Reservar →</a>
        </span>
      </div>

      {/* ── Topbar ── */}
      <Topbar />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">

            {/* Left: copy */}
            <div className="hero-left">
              <div className="hero-rating">
                <div className="avs">
                  <span className="av">A</span>
                  <span className="av">M</span>
                  <span className="av">J</span>
                </div>
                <span className="stars">★★★★★</span>
                <span className="sep" />
                <span>Calificado por <em className="serif" style={{ color: "var(--ink)" }}>42 dueños de negocios</em></span>
              </div>

              <h1>
                Soluciones digitales para <span className="serif">organizar, optimizar<br />y controlar</span> operaciones empresariales
              </h1>

              <p className="sub">
                Conectamos <em>adquisición, operaciones y comunicación</em> en una sola capa de tecnología. Dashboards reales, flujos automatizados, sistemas que gestionan donde más importa.
              </p>

              <div className="ctas">
                <a className="btn primary lg" href="#">Agendar diagnóstico <span className="arrow">→</span></a>
                <a className="btn secondary lg" href="#">Ver capacidades</a>
                <span className="note">Sin compromiso, 30 minutos</span>
              </div>
            </div>

            {/* Right: portrait + floating cards */}
            <div className="hero-right">
              <div className="portrait-slot">
                <Image
                  src="/portrait.png"
                  alt="Alejandro, fundador de Pegasus Pixels"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              </div>

              {/* Floating workflow cards */}
              <div className="float-card fc-1" aria-hidden="true">
                <div className="ic">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                </div>
                <div className="fc-text">
                  <span className="lbl">Lead identificado</span>
                  <span className="val">Industrias Río Claro</span>
                </div>
              </div>

              <div className="float-card fc-2" aria-hidden="true">
                <div className="ic sun">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 17l4-4 4 4 5-7 5 7" />
                  </svg>
                </div>
                <div className="fc-text">
                  <span className="lbl">Lead score</span>
                  <span className="val">87<span className="num">/100</span></span>
                </div>
              </div>

              <div className="float-card fc-3" aria-hidden="true">
                <div className="ic">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 6h16v11H7l-3 3V6z" /><path d="M8 11h8M8 14h5" />
                  </svg>
                </div>
                <div className="fc-text">
                  <span className="lbl">Respuesta sugerida</span>
                  <span className="val">Borrador listo</span>
                </div>
                <span className="fc-pulse" />
              </div>

              <div className="float-card fc-4" aria-hidden="true">
                <div className="ic">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" />
                  </svg>
                </div>
                <div className="fc-text">
                  <span className="lbl">Reunión agendada</span>
                  <span className="val">Jue 23 · 15:00</span>
                </div>
              </div>

              <div className="float-card fc-5" aria-hidden="true">
                <div className="ic">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2v6M12 22v-6M2 12h6M22 12h-6M4.9 4.9l4.2 4.2M19.1 19.1l-4.2-4.2" />
                  </svg>
                </div>
                <div className="fc-text">
                  <span className="lbl">Sincronizando · CRM</span>
                  <span className="val">HubSpot · OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="hero-trust">
            <span className="label">Integra con el stack que ya usás</span>
            <div className="logos">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h18v14H3z" /><path d="M3 9h18" /></svg>
                Stripe
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16v16H4z" /><path d="M9 4v16M15 4v16" /></svg>
                Notion
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16v12H7l-3 3V6z" /></svg>
                WhatsApp
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 8l9 6 9-6" /></svg>
                Gmail
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /></svg>
                HubSpot
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12c0-4 3-7 8-7s8 3 8 7-3 7-8 7c-2 0-3-.4-4-1l-3 1 1-3c-1-1-2-2-2-4z" /></svg>
                Meta Ads
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="8" height="8" /><rect x="13" y="3" width="8" height="8" /><rect x="3" y="13" width="8" height="8" /><rect x="13" y="13" width="8" height="8" /></svg>
                Zapier
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem → Promise ── */}
      <section className="problem">
        <div className="wrap">
          <div className="kicker">Una nota antes de empezar</div>
          <h2>
            No diseñamos páginas.<br />
            <em>Diseñamos la forma en que un negocio funciona por dentro.</em>
          </h2>
          <p className="lede">
            Las pantallas, los embudos, los dashboards y las automatizaciones son la superficie visible de un sistema operativo más grande — el que decide cuánto tiempo se pierde cada semana, cuántos clientes se enfrían en una bandeja, cuántas decisiones se toman a ciegas.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat">
              <div className="v">18<span className="u">hrs</span></div>
              <div className="cap">recuperadas por semana en promedio.</div>
            </div>
            <div className="stat">
              <div className="v">2.3<span className="u">×</span></div>
              <div className="cap">más conversiones desde un embudo conectado.</div>
            </div>
            <div className="stat">
              <div className="v">−64<span className="u">%</span></div>
              <div className="cap">menos errores operativos en el primer mes.</div>
            </div>
            <div className="stat">
              <div className="v">6<span className="u">sem</span></div>
              <div className="cap">para tener el sistema funcionando en producción.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="workflow">
        <div className="wrap">
          <div className="head">
            <div className="kicker">El sistema, paso a paso</div>
            <h2>Un solo flujo,<br />de la primera<br />conversación al cliente.</h2>
            <p className="sub">El sistema entero está construido alrededor de un loop simple. Desde identificar un lead hasta cerrar el negocio, todo vive en una sola capa.</p>
          </div>

          <div className="workflow-track">
            {/* Stage 1 */}
            <div className="stage">
              <div className="stage-visual">
                <div className="grid-bg" />
                <div className="mini-card s1-c1">
                  <span className="av" />
                  <div>
                    <div className="lbl">Lead encontrado</div>
                    <div className="val">Hugo Jenkinson</div>
                  </div>
                </div>
                <div className="mini-card s1-c2">
                  <span className="av b" />
                  <div>
                    <div className="lbl">Mobile validado</div>
                    <div className="val">+34 627 ···</div>
                  </div>
                </div>
                <div className="mini-card s1-c3">
                  <span className="av c" />
                  <div>
                    <div className="lbl">ICP match</div>
                    <div className="val">92<span style={{ color: "var(--ink-3)", fontWeight: 400 }}>/100</span></div>
                  </div>
                </div>
              </div>
              <div className="stage-meta">
                <div className="n">Etapa uno</div>
                <h3>Encontramos a <em>las personas correctas</em>.</h3>
                <p>Sistemas de adquisición que filtran por ICP e intención real. Sitios, anuncios, scoring y enriquecimiento — todo conectado al CRM desde el primer minuto.</p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="stage">
              <div className="stage-visual">
                <div className="grid-bg" />
                <div className="timeline-line" />
                <div className="mini-card s2-c1">
                  <span className="ic-tiny sun">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 17l4-4 4 4 5-7 5 7" /></svg>
                  </span>
                  <div>
                    <div className="lbl">Pipeline</div>
                    <div className="val">238 activos</div>
                  </div>
                </div>
                <div className="mini-card s2-c2">
                  <span className="ic-tiny">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  </span>
                  <div>
                    <div className="lbl">Tiempo respuesta</div>
                    <div className="val">2.4 min</div>
                  </div>
                </div>
                <div className="mini-card s2-c3">
                  <span className="ic-tiny">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="8" height="8" /><rect x="13" y="3" width="8" height="8" /><rect x="3" y="13" width="8" height="8" /><rect x="13" y="13" width="8" height="8" /></svg>
                  </span>
                  <div>
                    <div className="lbl">Dashboard</div>
                    <div className="val">En vivo</div>
                  </div>
                </div>
              </div>
              <div className="stage-meta">
                <div className="n">Etapa dos</div>
                <h3>Hacemos visible <em>lo que en realidad pasa</em>.</h3>
                <p>Dashboards que conectan ventas, inventario y comunicación. Una sola vista del negocio — sin abrir cinco pestañas para entender cómo van los días.</p>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="stage">
              <div className="stage-visual">
                <div className="grid-bg" />
                <div className="mini-card s3-c1" style={{ flexDirection: "column", alignItems: "flex-start", gap: 6, minWidth: 180 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span className="av b" />
                    <div>
                      <div className="lbl">Mensaje borrador</div>
                      <div className="val" style={{ fontSize: 13 }}>Industrias Río Claro</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.35, paddingTop: 6, borderTop: "1px dashed rgba(0,0,0,0.08)", width: "100%" }}>
                    &ldquo;Hola, gracias por tu mensaje sobre la <em className="serif" style={{ color: "var(--ink)" }}>línea industrial</em>...&rdquo;
                  </div>
                </div>
                <div className="mini-card s3-c2">
                  <span className="ic-tiny sun">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></svg>
                  </span>
                  <div>
                    <div className="lbl">Reunión agendada</div>
                    <div className="val">Jue 23 · 15:00</div>
                  </div>
                </div>
              </div>
              <div className="stage-meta">
                <div className="n">Etapa tres</div>
                <h3>Mantenemos <em>las conversaciones vivas</em>.</h3>
                <p>Bandeja centralizada de WhatsApp, Email e Instagram con borradores y seguimiento automático. Nada se enfría en una pestaña olvidada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Engine / Pillars ── */}
      <section className="engine">
        <div className="wrap">
          <div className="head">
            <div className="kicker">El motor, tres oficios</div>
            <h2>Todo bajo<br />una sola capa.</h2>
            <p className="sub">Cada proyecto activa uno, dos o los tres pilares. La marca los presenta como capas del mismo sistema, no como SKUs sueltos.</p>
          </div>

          <div className="pillars">
            <article className="pillar">
              <div className="num-line">
                <span className="n">Pilar uno</span>
                <span className="tag">Adquisición</span>
              </div>
              <h3>Cómo entran <em>los clientes</em> que valen la pena.</h3>
              <p>Sitios, embudos publicitarios, lead generation, automatización de marketing. La capa pública que decide cuántas conversaciones reales empiezan cada semana.</p>
              <div className="list">
                <div className="li"><span>Sitio web + landing</span><span className="v">Live</span></div>
                <div className="li"><span>Embudos publicitarios</span><span className="v">Meta · Google</span></div>
                <div className="li"><span>Lead scoring</span><span className="v">Automatizado</span></div>
                <div className="li"><span>CRM unificado</span><span className="v">HubSpot · Pipedrive</span></div>
              </div>
            </article>

            <article className="pillar">
              <div className="num-line">
                <span className="n">Pilar dos</span>
                <span className="tag">Operaciones</span>
              </div>
              <h3>Cómo se ve <em>lo que en realidad pasa</em>.</h3>
              <p>Aplicaciones internas, dashboards, flujos de trabajo, integración con POS. El sistema nervioso que mantiene a la empresa funcionando con visibilidad.</p>
              <div className="list">
                <div className="li"><span>Dashboard operativo</span><span className="v">Live</span></div>
                <div className="li"><span>Apps internas a medida</span><span className="v">A pedido</span></div>
                <div className="li"><span>Integración POS</span><span className="v">Square · Lightspeed</span></div>
                <div className="li"><span>Sincronización inventario</span><span className="v">Tiempo real</span></div>
              </div>
            </article>

            <article className="pillar">
              <div className="num-line">
                <span className="n">Pilar tres</span>
                <span className="tag">Comunicación</span>
              </div>
              <h3>Cómo se mantienen <em>las conversaciones vivas</em>.</h3>
              <p>Mensajería, seguimiento automatizado, comunicación centralizada entre equipos y canales. Todo en una sola bandeja.</p>
              <div className="list">
                <div className="li"><span>Bandeja unificada</span><span className="v">WhatsApp · Email · IG</span></div>
                <div className="li"><span>Borradores automáticos</span><span className="v">Por canal</span></div>
                <div className="li"><span>Seguimiento automático</span><span className="v">Por canal</span></div>
                <div className="li"><span>Notas y CRM sync</span><span className="v">Bidireccional</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="testimonial">
        <div className="wrap">
          <div className="inner">
            <div className="kicker">Lo que dicen los clientes</div>
            <blockquote>
              &ldquo;Nos ordenaron <em>las operaciones enteras</em> en seis semanas. Dejamos de adivinar.&rdquo;
            </blockquote>
            <div className="attribution">
              <div className="av">M</div>
              <div className="meta">
                <div className="name">Mariana Salgado</div>
                <div className="role">Directora general · Industrias Río Claro</div>
              </div>
              <div className="verified">Cliente verificado · 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="usecases">
        <div className="wrap">
          <div className="head">
            <div className="kicker">Para distintos tipos de negocio</div>
            <h2>Construido para<br />cómo operás hoy.</h2>
            <p className="sub">Cada motion del negocio recibe el sistema en una configuración distinta. Cinco motions, una sola capa de tecnología.</p>
          </div>

          <div className="uc-grid">
            <div className="uc uc-1 tall">
              <div>
                <div className="uc-label">Caso destacado</div>
                <h3 style={{ color: "var(--bg)", marginTop: 20 }}>
                  Cómo Industrias Río Claro pasó de <em>cinco hojas de cálculo</em> a un solo dashboard.
                </h3>
                <a className="arrow-link" href="#" style={{ marginTop: 28 }}>
                  Leer el caso completo{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="mini-chart">
                <svg viewBox="0 0 360 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="uc1-g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.86 0.18 92 / .5)" />
                      <stop offset="100%" stopColor="oklch(0.86 0.18 92 / 0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0 96 C 50 90, 90 84, 140 70 S 220 56, 260 44 S 320 22, 360 14 L 360 120 L 0 120 Z" fill="url(#uc1-g)" />
                  <path d="M0 96 C 50 90, 90 84, 140 70 S 220 56, 260 44 S 320 22, 360 14" fill="none" stroke="oklch(0.86 0.18 92)" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="360" cy="14" r="4" fill="oklch(0.86 0.18 92)" />
                </svg>
              </div>
              <div className="deco" />
            </div>

            <div className="uc uc-2">
              <div className="uc-label">Comercios físicos</div>
              <div>
                <h3>POS + dashboard,<br /><em>en una semana</em>.</h3>
              </div>
              <a className="arrow-link" href="#">
                Ver setup{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>

            <div className="uc uc-3">
              <div className="uc-label">Servicios profesionales</div>
              <div>
                <h3>Lead-to-meeting <em>automatizado</em>.</h3>
              </div>
              <a className="arrow-link" href="#">
                Ver setup{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>

            <div className="uc uc-4">
              <div className="uc-label">E-commerce</div>
              <div>
                <h3>Inventario, ads y CRM <em>conectados</em>.</h3>
              </div>
              <a className="arrow-link" href="#">
                Ver setup{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>

            <div className="uc uc-5">
              <div className="uc-label">Restaurantes y hotelería</div>
              <div>
                <h3>Menú digital + reservas <em>en una capa</em>.</h3>
              </div>
              <a className="arrow-link" href="#">
                Ver setup{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="closing">
        <div className="wrap">
          <div className="closing-inner">
            <h2>
              Diseñamos<br />
              <em>la forma</em><br />
              en que un negocio<br />
              funciona por dentro.
            </h2>
            <p className="sub">Treinta minutos para entender cómo funcionan tus días. Si no te sirve, te decimos qué sí.</p>
            <div className="ctas">
              <a className="btn primary lg" href="#">Agendar diagnóstico <span className="arrow">→</span></a>
              <a className="btn secondary lg" href="#">hello@pegasuspixels.com</a>
              <span className="note">Sin tarjeta · sin compromiso</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="brand-col">
              <div className="brand">
                <span className="mark">P</span>
                <span>Pegasus Pixels</span>
              </div>
              <p>Sistemas de tecnología para negocios reales. Por Alejandro, desde 2024.</p>
            </div>

            <div className="col">
              <h5>Sistema</h5>
              <ul>
                <li><a href="#">Adquisición</a></li>
                <li><a href="#">Operaciones</a></li>
                <li><a href="#">Comunicación</a></li>
                <li><a href="#">Diagnóstico</a></li>
              </ul>
            </div>

            <div className="col">
              <h5>Casos</h5>
              <ul>
                <li><a href="#">Industria</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">E-commerce</a></li>
                <li><a href="#">Hotelería</a></li>
              </ul>
            </div>

            <div className="col">
              <h5>Contacto</h5>
              <ul>
                <li><a href="#">hello@pegasuspixels.com</a></li>
                <li><a href="#">+1 301 257 4500</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="bottom">
            <span>© 2026 Pegasus Pixels. Diseñado y operado por Alejandro.</span>
            <span className="status">Todos los sistemas operativos</span>
          </div>
        </div>
      </footer>
    </>
  );
}
