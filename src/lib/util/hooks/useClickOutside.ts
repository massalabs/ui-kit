import { useEffect, RefObject } from 'react';

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      const element = ref.current;
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
