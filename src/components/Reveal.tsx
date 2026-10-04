import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function Reveal({ children, className = '', delay, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as 'div';
  const delayClass = delay ? ` reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal${delayClass}${visible ? ' is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
