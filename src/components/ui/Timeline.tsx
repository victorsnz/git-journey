import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TimelineItem {
  id: string;
  content: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-[13px] top-2 bottom-2 w-px bg-border" />
      <div className="space-y-0">
        {items.map((item, index) => (
          <TimelineNode key={item.id} index={index}>
            {item.content}
          </TimelineNode>
        ))}
      </div>
    </div>
  );
}

function TimelineNode({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute -left-10 top-[7px] size-2 rounded-full bg-accent ring-[3px] ring-background" />
        {children}
      </motion.div>
    </div>
  );
}
