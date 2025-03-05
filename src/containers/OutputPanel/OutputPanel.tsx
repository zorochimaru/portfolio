import { AnimatePresence, Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { FC, Suspense } from 'react';
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
  return (
    <motion.div
      variants={outputPanelVariants}
      initial="hidden"
      animate="visible"
      className="border-s-1 border-gray-600 flex-1"
    >
      <div className="flex bg-(--dark-bg2)">
        <Tab title="Output" />
      </div>
      <div className="container">
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
