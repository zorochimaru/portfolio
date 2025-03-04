import { Variants, motion } from 'motion/react';

const stackList = [
  { img: 'angular', url: 'https://angular.io/' },
  { img: 'react', url: 'https://reactjs.org/' },
  { img: 'nodeJs', url: 'https://nodejs.org/' },
  { img: 'firebase', url: 'https://firebase.google.com/' },
  { img: 'express', url: 'https://expressjs.com/' },
  { img: 'sequelize', url: 'https://sequelize.org/' },
  { img: 'mongoose', url: 'https://mongoosejs.com/' },
  { img: 'typesense', url: 'https://typesense.org/' },
  { img: 'contentful', url: 'https://www.contentful.com/' },
  { img: 'material', url: 'https://material.angular.io/' },
  { img: 'mui', url: 'https://mui.com/' },
  { img: 'bootstrap', url: 'https://getbootstrap.com/' },
  { img: 'tailwind', url: 'https://tailwindcss.com/' },
  { img: 'ant', url: 'https://ant.design/' },
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
  return (
    <motion.div variants={list} className="grid grid-cols-2 gap-10 p-4 items-center">
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
            className="w-[200px] mx-auto"
            src={`${import.meta.env.BASE_URL}/images/${item.img}.webp`}
          />
        </motion.a>
      ))}
    </motion.div>
  );
};
