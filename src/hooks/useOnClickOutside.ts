import { useEffect, useRef } from 'react';

type Callback = () => void;

export function useOnClickOutside(callback: Callback) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) callback();
    };

    document.addEventListener('mousedown', handleClick, true);
    return () => document.removeEventListener('mousedown', handleClick, true);
  }, [callback]);

  return ref;
}
