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
  const gltf = useGLTF(`${import.meta.env.BASE_URL}/models/stars.glb`);

  return (
    <>
      <div className="relative h-full flex bg-(--primary-dark-bg) overflow-y-auto scrollbar">
        <div className="absolute inset-0">
          <Canvas>
            <Background gltf={gltf} />
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
        <div className="p-6 text-white text-center flex flex-col justify-center my-auto">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="mb-4 text-xl w-1/2 mx-auto">
            As an experienced Frontend Developer, I combine technical expertise with strong
            problem-solving and collaboration skills to create seamless, user-friendly web
            applications. With a keen eye for design and a deep understanding of user experience, I
            bridge the gap between functionality and aesthetics, ensuring engaging and intuitive
            interfaces. My ability to adapt to evolving technologies and industry trends allows me
            to deliver modern, efficient solutions while maintaining clean, maintainable code. I
            thrive in team environments, fostering open communication and knowledge sharing to drive
            innovation and improve workflows. With strong time management and project coordination
            skills, I efficiently handle multiple tasks while maintaining high-quality standards. My
            proactive approach to problem-solving and continuous learning mindset enables me to
            tackle challenges effectively and contribute meaningfully to any development team.
          </p>
          <h2 className="text-xl font-semibold mb-2">Key strengths:</h2>
          <ul className="list-disc list-inside mb-4 text-xl">
            <li>Effective communication & teamwork</li>
            <li>Critical thinking & problem-solving</li>
            <li>Adaptability & fast learning</li>
            <li>User-centric mindset & attention to detail</li>
            <li>Time management & project organization</li>
          </ul>
          <p className="text-xl">
            Always eager to learn and grow, I strive to create impactful digital experiences that
            align with user needs and business goals.
          </p>
        </div>
      </div>
    </>
  );
};
