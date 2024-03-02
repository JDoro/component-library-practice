import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Portal({ children }: { children: ReactNode }) {
  const appBody = document.body;
  const element = document.createElement('div');

  useEffect(() => {
    appBody.appendChild(element);
    return () => {
      appBody.removeChild(element);
    };
  }, [appBody, element]);

  return createPortal(children, element);
}
