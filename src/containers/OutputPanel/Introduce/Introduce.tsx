import { motion, Variants } from 'motion/react';

const outputContentVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const Introduce = () => {
  return (
    <motion.div
      key="modal"
      variants={outputContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="text-white text-center min-h-full p-10 my-auto grid place-items-center lg:overflow-y-auto lg:overflow-x-hidden scrollbar"
    >
      <div className="flex flex-col items-center">
        <a href="https://www.linkedin.com/in/rasim-karimli/" target="_blank" className="mb-5">
          <img
            src={`${import.meta.env.BASE_URL}/images/profile.webp`}
            alt="profile"
            className="rounded-full max-w-42 max-h-42 md:max-w-72 md:max-h-72 object-cover"
          />
        </a>
        <a href="https://www.linkedin.com/in/rasim-karimli/" target="_blank">
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-300 text-center uppercase font-[Oswald]">
            Hi, I'm Rasim Karimli!
          </h1>
        </a>
        <p className="text-xl mt-6 text-gray-300">
          I'm a full-stack developer with a passion for building web applications.
        </p>

        <p className="text-xl mt-6 text-gray-300">Thanks for checking out my portfolio!</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/rasim-karimli/" target="_blank" className="mt-4">
            <img
              src={`${import.meta.env.BASE_URL}/images/linkedin.webp`}
              alt="linkedin"
              style={{ width: '32px' }}
            />
          </a>
          <a href="https://github.com/zorochimaru" target="_blank" className="mt-4">
            <img
              src={`${import.meta.env.BASE_URL}/images/github.svg`}
              alt="linkedin"
              style={{ width: '32px' }}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
