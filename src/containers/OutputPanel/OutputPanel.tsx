import { AnimatePresence, Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { FC, Suspense, useEffect, useRef } from 'react';
import { Loading, Tab } from '../../components';
import { Method } from '../../enums';

import { CalculateExperience } from './CalculateExperience/CalculateExperience';
import { Introduce } from './Introduce/Introduce';
import './OutputPanel.css';
import { Projects } from './Projects/Projects';
import { SoftSkills } from './SoftSkills/SoftSkills';
import { Stack } from './Stack/Stack';

const outputPanelVariants: Variants = {
  hidden: { opacity: 0, translateX: '100vh' },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.3, delay: 0.5 } },
};

export const OutputPanel: FC<{ message: Method }> = ({ message }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const handle = panel?.querySelector('.resize-handle');

    const onMouseDown = (e: MouseEvent) => {
      const startX = e.clientX;
      const startWidth = panel?.offsetWidth || 0;

      const onMouseMove = (e: MouseEvent) => {
        if (panel) {
          const newWidth = startWidth - (e.clientX - startX);
          panel.style.width = `${newWidth}px`;
        }
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    handle?.addEventListener('mousedown', onMouseDown as EventListener);

    return () => {
      handle?.removeEventListener('mousedown', onMouseDown as EventListener);
    };
  }, []);

  return (
    <motion.div
      ref={panelRef}
      variants={outputPanelVariants}
      initial="hidden"
      animate="visible"
      className="w-1/3 relative"
    >
      <div className="resize-handle absolute border-3 border-gray-600 left-0 top-0 bottom-0  cursor-ew-resize bg-transparent"></div>
      <div className="flex bg-dark-bg2">
        <Tab title="Output" />
      </div>
      <div className="container overflow-y-auto scrollbar">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="popLayout">
            {message === Method.introduce && <Introduce />}
            {message === Method.showStack && <Stack />}
            {message === Method.calculateExperience && <CalculateExperience />}
            {message === Method.projects && <Projects />}
            {message === Method.softSkills && <SoftSkills />}
          </AnimatePresence>
        </Suspense>
      </div>
    </motion.div>
  );
};
