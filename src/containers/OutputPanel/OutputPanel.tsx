import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { FC } from 'react';
import { Tab } from '../../components';

const stackImages = [
  'angular',
  'react',
  'nodeJs',
  'firebase',
  'express',
  'sequelize',
  'mongoose',
  'typesense',
  'contentful',
  'material',
  'mui',
  'bootstrap',
  'tailwind',
  'ant',
];

export const OutputPanel: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="border-s-1 border-gray-600 flex-1">
      <div className="flex bg-(--dark-bg2)">
        <Tab title="Output" />
      </div>
      <AnimatePresence mode="wait">
        <div style={{ maxHeight: 'calc(100% - 40px)' }} className="overflow-auto">
          <div className="flex flex-wrap gap-10 items-center py-10 justify-center px-5">
            {message === 'showStack' &&
              stackImages.map((stack, i) => (
                <motion.img
                  key={i}
                  style={{ maxWidth: '200px', maxHeight: '150px' }}
                  src={`images/${stack}.png`}
                  alt=""
                  initial={{ y: 10, opacity: 0 }}
                  animate={'active'}
                  variants={{ active: { opacity: 1, transition: { delay: i * 0.5 } } }}
                  exit={{ y: -10, opacity: 0 }}
                />
              ))}
            {message === 'introduce' && <p>Hi, I'm Rasim Karimli</p>}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};
