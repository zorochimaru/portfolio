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
      className="text-white text-center p-10 my-auto flex flex-col items-center"
    >
      <a href="https://www.linkedin.com/in/rasim-karimli/" target="_blank" className="mb-5">
        <img
          src={`${import.meta.env.BASE_URL}/images/profile.webp`}
          alt="profile"
          className="rounded-full w-36 h-36"
        />
      </a>
      <a href="https://www.linkedin.com/in/rasim-karimli/" target="_blank">
        <h1 className="text-2xl font-extrabold text-blue-500">Hello, I'm Rasim Karimli!</h1>
      </a>
      <p className="text-xl mt-6 text-gray-300">
        I'm a full-stack developer with a passion for building web applications.
      </p>

      <p className="text-xl mt-6 text-gray-300">
        I'm always looking to learn new technologies and improve my skills. Feel free to reach out
        to me if you have any questions or would like to collaborate on a project!
      </p>
      <p className="text-xl mt-6 text-gray-300">Thanks for checking out my portfolio!</p>

      <a href="https://www.linkedin.com/in/rasim-karimli/" target="_blank" className="mt-4">
        <img
          src={`${import.meta.env.BASE_URL}/images/linkedin.webp`}
          alt="linkedin"
          style={{ width: '32px' }}
        />
      </a>
    </motion.div>
  );
};
