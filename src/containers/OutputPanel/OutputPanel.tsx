import { AnimatePresence, Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { FC } from 'react';
import { Tab } from '../../components';
import { Method } from '../../enums';
import { Introduce } from './Introduce/Introduce';
import './OutputPanel.css';
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
        <AnimatePresence mode="popLayout">
          {message === Method.introduce && <Introduce />}
          {message === Method.showStack && <Stack />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
