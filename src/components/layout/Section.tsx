import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  variant?: "hero" | "default";
}

export function Section({ id, children, variant = "default" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={
        variant === "hero"
          ? "max-w-3xl mx-auto px-8 min-h-screen flex flex-col justify-center"
          : "max-w-3xl mx-auto px-8 py-28"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
