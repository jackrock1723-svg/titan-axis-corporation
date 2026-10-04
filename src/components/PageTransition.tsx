import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const keyRef = useRef(pathname);

  useEffect(() => {
    keyRef.current = pathname;
  }, [pathname]);

  return (
    <div key={keyRef.current} className="page-enter">
      {children}
    </div>
  );
}
