import { useAnimations, useGLTF } from '@react-three/drei';
import { Canvas, ObjectMap } from '@react-three/fiber';
import { motion, Variants } from 'motion/react';
import { FC, useEffect, useState } from 'react';
import { GLTF } from 'three-stdlib';

const softSkills = [
  '🗣️ Communication',
  '🧩 Problem-Solving',
  '⏰ Time Management',
  '🔄 Adaptability',
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
  tap: { scale: 0.8 },
  hover: { scale: 1.2 },
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
  const gltf = useGLTF(`${import.meta.env.BASE_URL}/models/rex.glb`);
  const [activeSkill, setActiveSkill] = useState<(typeof softSkills)[number]>(softSkills[0]);

  return (
    <div className="flex flex-col text-center gap-4 py-6 h-full">
      <ul className="flex flex-col gap-3 px-6">
        {softSkills.map((skill, index) => (
          <motion.li
            key={skill}
            onClick={() => setActiveSkill(skill)}
            className={`p-2 px-4 rounded-lg active:bg-gray-700 hover:bg-gray-600 text-white shadow-md cursor-pointer ${activeSkill === skill ? 'bg-blue-500' : 'bg-gray-800'}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            whileTap="tap"
            whileHover="hover"
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={softSkills.length}
        className="justify-self-stretch h-full"
      >
        {activeSkill === '🗣️ Communication' && (
          <img
            className="w-full object-contain  px-6"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXJlcDVldmw0ZmRodWljY2p6cHpxOHBod2JmajJyaG92cWtuZ2VxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYNnQhGGs4CxtYI/giphy.gif"
            alt=""
          />
        )}
        {activeSkill === '🧩 Problem-Solving' && (
          <img
            className="w-full object-contain  px-6"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdwNWVjZmV1N2JuY2g5Z2tzdGxlYjhxeGV4ZXl6ZTVndXJpbnVoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UKkes2qN2T70s/giphy.gif"
            alt=""
          />
        )}
        {activeSkill === '⏰ Time Management' && (
          <img
            className="w-full object-contain  px-6"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWw1OGlxYmw0c2xtZnFjNzZuaG96MWtuNHpxa3I2bGl0dnJlaW5xMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BN2IEmYKDuA9FHXIaU/giphy.gif"
            alt=""
          />
        )}
        {activeSkill === '🔄 Adaptability' && (
          <img
            className="w-full object-contain  px-6"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTE5aWs5emh3ZGJ5OHNyOWN2NTB4eHo1cnFjdTZrdnpwZDd3NGZnNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4Epa600oZezUsAxO/giphy.gif"
            alt=""
          />
        )}
        {activeSkill === '🤝 Teamwork' && (
          <img
            className="w-full object-contain  px-6"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndoenJsb2g4OGk4YThiODAxZWR2dnF0cWJoMWVoMmZnN2ZrdTVteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/69C0SN1hBWPxomo86v/giphy.gif"
            alt=""
          />
        )}
        {activeSkill === '🧠 Critical Thinking' && (
          <img
            className="w-full object-contain  px-6"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXBlZmttdmd6emxrMXloMHc2cnhiMmZpNDBiMzhnMDdnODMwdWRuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ohdY5OaQmUmVW/giphy.gif"
            alt=""
          />
        )}
        {activeSkill === '🎨 Creativity' && (
          <Canvas>
            <Rex gltf={gltf} />
          </Canvas>
        )}
      </motion.div>
    </div>
  );
};
