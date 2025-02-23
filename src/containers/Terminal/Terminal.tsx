import * as motion from 'motion/react-client';
import { FC } from 'react';

const text = 'Click on method names to see output 👆👆👆';

export const Terminal: FC = () => {
  return (
    <div className="border-t-1 min-h-[200px] px-4 py-3 border-gray-600">
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
    </div>
  );
};
