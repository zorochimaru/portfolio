import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, ObjectMap } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three-stdlib';
export const Background: FC<{
  gltf: GLTF & ObjectMap;
}> = ({ gltf }) => {
  return (
    <>
      <primitive object={gltf.scene} />;
    </>
  );
};

export const About = () => {
  const gltf = useGLTF(`https://pub-4b5fac57f5074023bb9e348919bf61f4.r2.dev/stars.glb`);

  return (
    <>
      <div className="h-full relative flex bg-(--primary-dark-bg) overflow-y-auto scrollbar">
        <div className="absolute w-full h-full">
          <Canvas>
            {gltf && <Background gltf={gltf} />}

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate
              autoRotateSpeed={0.6}
              minDistance={1.5}
              maxDistance={1.5}
            />
          </Canvas>
        </div>
        <div className="z-1 p-6 text-white text-center flex flex-col justify-center my-auto">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="mb-4 text-xl w-2/3 mx-auto">
            As an experienced Frontend Developer, I create user-friendly web applications by
            combining technical expertise with problem-solving and collaboration skills. I focus on
            intuitive interfaces, bridging functionality and aesthetics while maintaining clean,
            efficient code. Adaptable to evolving technologies, I ensure modern solutions and
            streamlined workflows. My strong time management and teamwork foster innovation, while a
            proactive mindset helps tackle challenges effectively.
          </p>

          <p className="text-xl">
            Always eager to learn and grow, I strive to create impactful digital experiences that
            align with user needs and business goals.
          </p>

          <p className="text-xl mt-4">
            This project is based on React, Tailwind, Motion and a little bit of Three.js
          </p>
        </div>
      </div>
    </>
  );
};
