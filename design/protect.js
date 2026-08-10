/* ============================================================
   Capa de protección anti-copia.
   Nota honesta: esto disuade la copia casual (Ctrl+C, seleccionar
   y arrastrar, clic derecho > copiar, "ver código fuente" trivial).
   No es seguridad real: cualquiera con DevTools puede leer el DOM
   renderizado. El objetivo es forzar fricción suficiente para que
   el estudiante lea la pregunta en pantalla en vez de pegarla en
   un chatbot en dos segundos.
   ============================================================ */

(function () {
  const block = (e) => { e.preventDefault(); return false; };

  // Bloquea copiar, cortar y pegar
  document.addEventListener('copy', block);
  document.addEventListener('cut', block);
  document.addEventListener('paste', block);

  // Bloquea selección de texto y arrastre
  document.addEventListener('selectstart', block);
  document.addEventListener('dragstart', block);

  // Bloquea menú contextual (clic derecho)
  document.addEventListener('contextmenu', block);

  // Bloquea atajos de teclado típicos de copiar / inspeccionar
  document.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    const ctrlOrCmd = e.ctrlKey || e.metaKey;

    const isCopyCombo = ctrlOrCmd && ['c', 'x', 'a', 's', 'p', 'u'].includes(k);
    const isDevtoolsCombo =
      k === 'f12' ||
      (ctrlOrCmd && e.shiftKey && ['i', 'j', 'c'].includes(k));

    if (isCopyCombo || isDevtoolsCombo) {
      e.preventDefault();
      return false;
    }
  });

  // Limpia cualquier selección residual (p.ej. tras un intento con mouse)
  document.addEventListener('mouseup', () => {
    const sel = window.getSelection ? window.getSelection() : null;
    if (sel) sel.removeAllRanges();
  });
})();
