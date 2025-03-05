import { motion } from 'motion/react';
import { FC, useRef, useState } from 'react';

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
  const minHeight = 100;
  const maxHeight = 300;
  const [height, setHeight] = useState(150);
  const startYRef = useRef(0);
  const startHeightRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    startYRef.current = e.clientY;
    startHeightRef.current = height;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newHeight = startHeightRef.current - (e.clientY - startYRef.current);
    setHeight(Math.max(minHeight, Math.min(maxHeight, newHeight)));
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <motion.div
      variants={terminalVariants}
      initial="hidden"
      animate="visible"
      className="relative border w-full border-gray-400 border-t-1 resize-y md:min-h-[110px] min-h-[150px] px-4 py-3"
      style={{ height }}
    >
      <div
        className="absolute top-0 left-0 w-full h-2 bg-gray-600 cursor-ns-resize"
        onMouseDown={handleMouseDown}
      />
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
