import { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { Loading } from '../../../components';
import { usePreloadImages } from '../../../hooks';

const stackList = [
  { img: 'angular.webp', url: 'https://angular.io/' },
  { img: 'react.webp', url: 'https://reactjs.org/' },
  { img: 'nodeJs.webp', url: 'https://nodejs.org/' },
  { img: 'firebase.webp', url: 'https://firebase.google.com/' },
  { img: 'express.webp', url: 'https://expressjs.com/' },
  { img: 'sequelize.webp', url: 'https://sequelize.org/' },
  { img: 'mongoose.webp', url: 'https://mongoosejs.com/' },
  { img: 'typesense.webp', url: 'https://typesense.org/' },
  { img: 'contentful.webp', url: 'https://www.contentful.com/' },
  { img: 'redux.svg', url: 'https://redux.js.org/' },
  { img: 'material.webp', url: 'https://material.angular.io/' },
  { img: 'mui.webp', url: 'https://mui.com/' },
  { img: 'bootstrap.webp', url: 'https://getbootstrap.com/' },
  { img: 'tailwind.webp', url: 'https://tailwindcss.com/' },
  { img: 'ant.webp', url: 'https://ant.design/' },
];

const list: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3, // Stagger children by .3 seconds
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: { delay: index * 0.3 },
  }),
  tap: { scale: 0.8 },
  hover: { scale: 1.2 },
};

export const Stack = () => {
  const loaded = usePreloadImages(
    stackList.map((item) => `${import.meta.env.BASE_URL}/images/${item.img}`),
  );

  return (
    <>
      {loaded ? (
        <>
          <h2 className="lg:hidden text-7xl font-bold text-cyan-300 text-center uppercase font-[Oswald]">
            My Stack
          </h2>
          <motion.div
            variants={list}
            className="grid @sm:grid-cols-1 @md:grid-cols-2 @2xl:grid-cols-3 gap-15 p-4 items-center lg:overflow-y-auto lg:overflow-x-hidden scrollbar"
          >
            {stackList.map((item, index) => (
              <motion.a
                key={item.img}
                variants={variants}
                initial="hidden"
                animate="visible"
                whileTap="tap"
                whileHover="hover"
                custom={index}
                href={item.url}
                target="_blank"
              >
                <img
                  className="max-w-[200px] min-w-[100px] w-full object-contain max-h-[150px] mx-auto"
                  src={`${import.meta.env.BASE_URL}/images/${item.img}`}
                />
              </motion.a>
            ))}
          </motion.div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
