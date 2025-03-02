import * as motion from 'motion/react-client';
import { FC } from 'react';

const text = 'Click on method names to see output 👆👆👆';

const terminalVariants = {
  hidden: { opacity: 0, translateY: '100vh' },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
  },
};

export const Terminal: FC = () => {
  return (
    <motion.div
      variants={terminalVariants}
      initial="hidden"
      animate="visible"
      className="border-t-1 min-h-[200px] px-4 py-3 border-gray-600"
    >
      <div className="flex gap-3">
        <span>
          <u>Terminal</u>
        </span>
        <span>Problems</span>
        <span>Output</span>
        <span>Ports</span>
      </div>

      <div className="mt-6">
        <span style={{ marginRight: '10px' }}>$</span>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
