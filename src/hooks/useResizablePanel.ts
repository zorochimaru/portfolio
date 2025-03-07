import { RefObject, useEffect } from 'react';

export const useResizablePanel = (panelRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const panel = panelRef.current;
    const handle = panel?.querySelector('.resize-handle');

    if (!panel || !handle) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const startX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      const startWidth = panel.offsetWidth;

      const onMove = (moveEvent: MouseEvent | TouchEvent) => {
        const clientX =
          moveEvent instanceof MouseEvent ? moveEvent.clientX : moveEvent.touches[0].clientX;
        const newWidth = startWidth - (clientX - startX);
        panel.style.width = `${newWidth}px`;
      };

      const onUp = () => {
        document.removeEventListener('mousemove', onMove as EventListener);
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('touchmove', onMove as EventListener);
        document.removeEventListener('touchend', onUp);
      };

      document.addEventListener('mousemove', onMove as EventListener);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onMove as EventListener, { passive: false });
      document.addEventListener('touchend', onUp);
    };

    handle.addEventListener('mousedown', onPointerDown as EventListener);
    handle.addEventListener('touchstart', onPointerDown as EventListener, { passive: false });

    return () => {
      handle.removeEventListener('mousedown', onPointerDown as EventListener);
      handle.removeEventListener('touchstart', onPointerDown as EventListener);
    };
  }, [panelRef]);
};
