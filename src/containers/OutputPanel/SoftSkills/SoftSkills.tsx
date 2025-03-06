import { useAnimations, useGLTF } from '@react-three/drei';
import { Canvas, ObjectMap } from '@react-three/fiber';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { FC, useEffect, useState } from 'react';
import { GLTF } from 'three-stdlib';

const softSkills = [
  '🗣️ Communication',
  '🧩 Problem-Solving',
  '⏰ Time Management',
  '🤝 Teamwork',
  '🧠 Critical Thinking',
  '🎨 Creativity',
] as const;

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: { delay: index * 0.3 },
  }),
  tap: { scale: 0.95 },
  hover: { scale: 1.05 },
};

const skillsVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Rex: FC<{
  gltf: GLTF & ObjectMap;
}> = ({ gltf }) => {
  const animations = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    const action = animations.actions.Roar;
    action?.play();
  }, [animations]);

  return (
    <>
      <ambientLight />
      <directionalLight color="red" intensity={1} position={[5, 5, 5]} />
      <primitive object={gltf.scene} position={[3, -2, -1.5]} rotation-y={-1.2} />
    </>
  );
};

export const SoftSkills = () => {
  const gltf = useGLTF(`https://pub-4b5fac57f5074023bb9e348919bf61f4.r2.dev/rex.glb`);
  const [activeSkill, setActiveSkill] = useState<(typeof softSkills)[number]>('🗣️ Communication');

  return (
    <div className="flex flex-col text-center gap-4 py-6 h-full">
      <div className="flex gap-3 px-10 flex-wrap items-center basis-[100px]">
        {softSkills.map((skill, index) => (
          <motion.button
            key={skill}
            onClick={() => setActiveSkill(skill)}
            className={`p-2 px-4 rounded-lg active:bg-gray-700 hover:bg-gray-600 text-white whitespace-nowrap shadow-md cursor-pointer ${activeSkill === skill ? 'bg-blue-500' : 'bg-gray-800'}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            whileTap="tap"
            whileHover="hover"
            custom={index}
          >
            {skill}
          </motion.button>
        ))}
      </div>
      <div className="justify-self-stretch flex flex-col flex-1">
        <AnimatePresence mode="popLayout">
          {activeSkill === '🗣️ Communication' && (
            <motion.div
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full flex flex-col  px-6"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/communication.svg`}
                className="max-h-[400px] object-contain"
                alt=""
              />
              <p className="mt-4 text-lg">
                I'm a strong communicator, able to effectively convey my ideas and thoughts to
                others.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {activeSkill === '🧩 Problem-Solving' && (
            <motion.div
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full flex flex-col  px-6"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/problem-solving.svg`}
                className="max-h-[400px] object-contain"
                alt=""
              />
              <p className="mt-4 text-lg">
                I'm a creative problem solver, able to think outside the box to find solutions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {activeSkill === '⏰ Time Management' && (
            <motion.div
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full flex flex-col  px-6"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/time.svg`}
                className="max-h-[400px] object-contain"
                alt=""
              />
              <p className="mt-4 text-lg">
                I'm a strong communicator, able to effectively convey my ideas and thoughts to
                others.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {activeSkill === '🤝 Teamwork' && (
            <motion.div
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full flex flex-col  px-6"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/team.svg`}
                className="max-h-[400px] object-contain"
                alt=""
              />
              <p className="mt-4 text-lg">
                I'm a strong communicator, able to effectively convey my ideas and thoughts to
                others.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {activeSkill === '🧠 Critical Thinking' && (
            <motion.div
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full flex flex-col  px-6"
            >
              <img
                src={`${import.meta.env.BASE_URL}/images/think.svg`}
                className="max-h-[400px] object-contain"
                alt=""
              />
              <p className="mt-4 text-lg">
                I'm a strong communicator, able to effectively convey my ideas and thoughts to
                others.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {activeSkill === '🎨 Creativity' && (
          <>
            <h3 className="text-2xl mt-4">JUST LOOK AT THIS DINOSAUR!!!</h3>
            <Canvas>
              <Rex gltf={gltf} />
            </Canvas>
          </>
        )}
      </div>
    </div>
  );
};
