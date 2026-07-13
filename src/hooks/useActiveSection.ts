import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of ids) {
      const element = document.getElementById(id);
      if (!element) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          }
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, [ids]);

  return activeId;
}
