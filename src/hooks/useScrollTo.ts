"use client";

import { useCallback } from "react";

export function useScrollTo() {
  const scrollTo = useCallback((elementId: string) => {
    // Se for vazio ou "#", volta ao topo
    if (!elementId || elementId === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100; // Altura do header fixo + margem
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return scrollTo;
}
