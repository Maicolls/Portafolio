import { useCallback } from "react";

export default function ScrollNextButton({ sections, offset = 0, className = "" }) {
  const handleClick = useCallback(() => {
    const els = sections.map(r => r?.current).filter(Boolean);
    if (!els.length) return;

    // Busca la primera sección que esté por debajo del viewport actual
    const next =
      els
        .map(el => ({ el, top: el.getBoundingClientRect().top }))
        .find(({ top }) => top > 10)        // 10px de tolerancia
      || { el: els[0] };                    // si no hay, vuelve al inicio

    // Scroll con offset (útil si tienes navbar fijo)
    const y = next.el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [sections, offset]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`scroll-btn ${className}`}
      aria-label="Ir a la siguiente sección"
      title="Siguiente sección"
    >
      ↓
    </button>
  );
}
