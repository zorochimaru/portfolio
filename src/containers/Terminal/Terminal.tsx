import { motion } from 'motion/react';
import { FC, useState } from 'react';
import { useTerminalCommandContext } from '../../HOC';

const text = 'Click on method names to see output 👆👆👆';

const terminalVariants = {
  hidden: { opacity: 0, height: '0' },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
  },
};

export const Terminal: FC = () => {
  const { command } = useTerminalCommandContext();
  const [isOpen, setIsOpen] = useState(true);

  const toggleTerminal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTerminal}
        className="absolute top-0 right-10 text-gray-600 cursor-pointer z-1"
      >
        <img
          src={`${import.meta.env.BASE_URL}/icons/${isOpen ? 'expand_circle_down' : 'expand_circle_up'}.svg`}
          alt=""
        />
      </button>
      <motion.div
        variants={terminalVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className={`border-top w-full border-gray-600 border-t-1`}
      >
        <div className="flex justify-between items-center pt-3 px-4">
          <div className="flex gap-3">
            <span>
              <u>Terminal</u>
            </span>
            <span>Problems</span>
            <span>Output</span>
            <span>Ports</span>
          </div>
        </div>

        {isOpen && (
          <>
            <div className="mt-4 px-4">
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
            <p className="px-4 pb-3">
              <span style={{ marginRight: '10px' }}>$</span>
              {command.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
};
