/* ============================================================
   Contenido del taller — inyectado 100% por JavaScript.
   El HTML fuente no contiene texto de las preguntas: así, una
   copia cruda de la página o un "ver código fuente" no entrega
   el enunciado en texto plano.
   ============================================================ */

const TALLER = {
  hero: {
    title: "Psicología del Usuario y Leyes del Diseño",
    lede: "Taller para resolver en parejas, a mano, en hoja de examen. Si es posible, usen colores y regla para los diagramas y wireframes.",
    meta: [
      "4 bloques",
      "10 puntos",
      "Trabajo en pareja",
      "Entrega en hoja de examen"
    ]
  },
  blocks: [
    {
      index: "Bloque 1",
      title: "Psicología del Usuario y Leyes del Diseño",
      questions: [
        {
          tag: "Concepto",
          html: `
            <p><strong>1. La Psicología en el Diseño:</strong> ¿Cómo interviene la psicología en el diseño digital?
            Explica con un ejemplo concreto la relación entre lo que el cerebro espera (modelo mental) y lo que el
            software muestra (feedback visual).</p>
          `
        },
        {
          tag: "Definiciones",
          html: `
            <p><strong>2. Leyes Universales de UX</strong> (definición y ejemplo):</p>
            <ul>
              <li><strong>Ley de Hick:</strong> relación entre número de opciones y tiempo de decisión.</li>
              <li><strong>Ley de Fitts:</strong> importancia del tamaño y distancia de los botones.</li>
              <li><strong>Ley de Jakob Nielsen:</strong> por qué los usuarios esperan que tu app funcione como las que ya usan.</li>
              <li><strong>Ley de Miller:</strong> capacidad de memoria del usuario — el número mágico 7±2.</li>
            </ul>
          `
        },
        {
          tag: "Definición + dibujo",
          html: `
            <p><strong>3. Principios de Gestalt:</strong> Define qué son estos principios de organización visual y
            dibuja un ejemplo aplicado a una interfaz (ej. cómo agrupamos elementos por proximidad o semejanza).</p>
          `
        }
      ]
    },
    {
      index: "Bloque 2",
      title: "Experiencia, Interfaz y Metodología",
      questions: [
        {
          tag: "Definición + ejemplos",
          html: `
            <p><strong>4. UX (User Experience):</strong> Define el concepto y describe 3 ejemplos reales que
            <u>no</u> tengan que ver con software (ej. el diseño de un hospital, un parque de diversiones o una
            botella de salsa).</p>
          `
        },
        {
          tag: "Definición + comparación",
          html: `
            <p><strong>5. UI (User Interface):</strong> Define qué es y qué elementos la componen (botones,
            tipografía, espacios, color). Explica brevemente la diferencia fundamental entre UX y UI.</p>
          `
        },
        {
          tag: "Metodología + caso real",
          html: `
            <p><strong>6. Design Thinking:</strong> Define qué es y describe sus 5 etapas (Empatía, Definición,
            Ideación, Prototipado, Testeo).</p>
            <div class="sub">Adicional: investiguen y expliquen cómo se aplicó esta metodología en el caso de los
            <strong>Kit Yamoyo</strong> (distribución de medicinas en África).</div>
          `
        }
      ]
    },
    {
      index: "Bloque 3",
      title: "Lenguaje Técnico y Arquitectura",
      questions: [
        {
          tag: "Glosario",
          html: `
            <p><strong>7. Glosario de Desarrollo UX:</strong> Define los siguientes términos:</p>
            <ul class="row row-cols-2 g-1 mb-0" style="list-style:none; padding-left:0;">
              <li>System State</li><li>Accesibilidad</li>
              <li>Affordance</li><li>Responsividad</li>
              <li>Micro-interacciones</li><li>Design System</li>
              <li>Heurística</li><li>Sitemap</li>
              <li>Wireframe</li><li>Mockup</li>
              <li>Fricción</li>
            </ul>
          `
        },
        {
          tag: "Diagrama",
          html: `
            <p><strong>8. User Flow (Flujo de Usuario):</strong> Define qué es y genera un diagrama de flujo para
            una acción común (ej. "Pedir una pizza") usando la simbología técnica:</p>
            <div class="sub">
              Óvalo → Inicio / Fin &nbsp;·&nbsp; Rectángulo → Acción &nbsp;·&nbsp; Diamante → Decisión
            </div>
          `
        }
      ]
    },
    {
      index: "Bloque 4",
      title: "Aplicación y Diseño Práctico (Manual)",
      questions: [
        {
          tag: "Diseño manual + reflexión",
          html: `
            <p><strong>9. Reto de Accesibilidad:</strong> Crea el <em>User Flow</em> y el <em>Wireframe</em>
            (esqueleto visual) para un cajero automático diseñado específicamente para una persona de 80 años que
            nunca ha usado uno.</p>
            <div class="sub">
              Adicional, respondan:
              <ul class="mb-0 mt-1">
                <li>¿Qué tamaño de fuente y de botones eligieron, y por qué (relaciónenlo con la Ley de Fitts)?</li>
                <li>¿Cuántas opciones muestran por pantalla, y por qué (relaciónenlo con la Ley de Hick y la Ley de Miller)?</li>
                <li>¿Qué mecanismo de ayuda o rescate incluyeron si el usuario se equivoca o se siente perdido?</li>
                <li>¿Qué elemento del diseño reduce la ansiedad de alguien sin experiencia previa con cajeros?</li>
              </ul>
            </div>
          `
        },
        {
          tag: "Diseño manual + justificación",
          html: `
            <p><strong>10. Diseño de Interfaz SIGA:</strong> Diseña a mano la interfaz de una app móvil para
            consultar las notas del sistema SIGA, representando los siguientes estados:</p>
            <div class="sub">
              Loading (cargando) &nbsp;·&nbsp; Empty State (no hay notas) &nbsp;·&nbsp;
              Success / Data State (carga correctamente) &nbsp;·&nbsp; Error State (error de carga)
            </div>
            <p class="mt-2 mb-0">En un párrafo, respondan: ¿qué principios o leyes del Bloque 1 usaron para
            justificar sus diseños (Gestalt, Miller, Fitts, Jakob, etc.)?</p>
          `
        }
      ]
    }
  ],
  footer: {
    note: "Daniel Díaz Tibatá · Creado para mis estudiantes favoritos",
    count: null // se calcula en runtime
  }
};

function renderTaller() {
  document.getElementById('hero-title').textContent = TALLER.hero.title;
  document.getElementById('hero-lede').textContent = TALLER.hero.lede;

  const metaEl = document.getElementById('hero-meta');
  TALLER.hero.meta.forEach(m => {
    const li = document.createElement('li');
    li.className = 'eyebrow mb-0';
    li.style.letterSpacing = '.05em';
    li.textContent = m;
    metaEl.appendChild(li);
  });

  const container = document.getElementById('blocks-container');
  let totalQuestions = 0;

  TALLER.blocks.forEach(block => {
    totalQuestions += block.questions.length;

    const section = document.createElement('section');
    section.className = 'block';

    const inner = document.createElement('div');
    inner.className = 'container';

    const header = document.createElement('div');
    header.className = 'protected no-select mb-4';
    header.innerHTML = `
      <div class="block-index">${block.index}</div>
      <h2 class="block-title">${block.title}</h2>
    `;
    inner.appendChild(header);

    const row = document.createElement('div');
    row.className = 'row g-4 protected no-select';

    block.questions.forEach((q, i) => {
      const col = document.createElement('div');
      col.className = 'col-12 col-lg-6';
      col.innerHTML = `
        <div class="qcard">
          <span class="qnum">${(i + 1).toString().padStart(2, '0')}</span>
          <div class="tag">${q.tag}</div>
          <div class="qtext">${q.html}</div>
        </div>
      `;
      row.appendChild(col);
    });

    inner.appendChild(row);
    section.appendChild(inner);
    container.appendChild(section);
  });

  document.getElementById('footer-note').textContent = TALLER.footer.note;
  document.getElementById('footer-count').textContent = `${totalQuestions} preguntas · ${TALLER.blocks.length} bloques`;

  const veil = document.getElementById('loading-veil');
  if (veil) veil.classList.add('hide');
}

document.addEventListener('DOMContentLoaded', renderTaller);
