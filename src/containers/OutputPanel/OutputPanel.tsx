import { AnimatePresence, Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { FC, useRef } from 'react';
import { Tab } from '../../components';
import { Method } from '../../enums';

import { useIsMobile, useResizablePanel } from '../../hooks';
import { CalculateExperience } from './CalculateExperience/CalculateExperience';
import { Introduce } from './Introduce/Introduce';
import { Projects } from './Projects/Projects';
import { SoftSkills } from './SoftSkills/SoftSkills';
import { Stack } from './Stack/Stack';

const outputPanelVariants: Variants = {
  hidden: { opacity: 0, translateX: '100vh' },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.3, delay: 0.5 } },
};

export const OutputPanel: FC<{ message: Method }> = ({ message }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  useResizablePanel(panelRef);

  return (
    <motion.div
      ref={panelRef}
      variants={outputPanelVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full lg:w-1/3"
    >
      <div className="resize-handle absolute border-3 border-gray-600 -left-1 top-0 bottom-0  cursor-ew-resize bg-transparent"></div>
      <div className="hidden lg:flex bg-dark-bg2">
        <Tab title="Output" />
      </div>

      {isMobile ? (
        <div className="h-full flex flex-col gap-10 overflow-y-auto overflow-x-hidden scrollbar">
          <Introduce />
          <Stack />
          <CalculateExperience />
          <Projects />
          <SoftSkills />
        </div>
      ) : (
        <div className="h-[calc(100%-40px)] flex lg:justify-center flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {message === Method.introduce && <Introduce />}
            {message === Method.showStack && <Stack />}
            {message === Method.calculateExperience && <CalculateExperience />}
            {message === Method.projects && <Projects />}
            {message === Method.softSkills && <SoftSkills />}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};
