import { useAnimations, useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { FC, useEffect, useRef } from 'react';
import { Mesh } from 'three';
import './SoftSkills.css';

const softSkills = [
  { name: '🗣️ Communication', fileName: 'communication.svg' },
  { name: '🧩 Problem-Solving', fileName: 'problem-solving.svg' },
  { name: '⏰ Time Management', fileName: 'time.svg' },
  { name: '🤝 Teamwork', fileName: 'team.svg' },
  { name: '🧠 Critical Thinking', fileName: 'think.svg' },
  { name: '🎨 Creativity', fileName: '' },
];

function Image({ name, fileName }: { name: string; fileName: string }) {
  const ref = useRef(null);

  return (
    <section className="skill-container h-[50vh] lg:h-full">
      <div ref={ref}>
        <img src={`${import.meta.env.BASE_URL}/images/${fileName}`} alt={name} />
        <h2 className="text-5xl font-bold text-cyan-300 uppercase font-[Oswald]">{name}</h2>
      </div>
    </section>
  );
}

const Rex: FC = () => {
  const { animations, scene } = useGLTF(
    'https://pub-4b5fac57f5074023bb9e348919bf61f4.r2.dev/rex.glb',
  );
  const { actions } = useAnimations(animations, scene);
  const { gl } = useThree();

  useEffect(() => {
    const action = actions.Roar;
    action?.play();

    return () => {
      action?.stop();

      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });

      gl.dispose();
    };
  }, [actions, scene, gl]);

  return (
    <>
      <ambientLight />
      <directionalLight color="red" intensity={1} position={[5, 5, 5]} />
      <primitive object={scene} position={[1, -2, -1.5]} rotation-y={-1.2} />
    </>
  );
};

export const SoftSkills = () => {
  return (
    <>
      <h2 className="lg:hidden text-7xl font-bold text-cyan-300 text-center uppercase font-[Oswald]">
        Soft Skills
      </h2>
      <div className="soft-skills-container lg:overflow-y-auto lg:overflow-x-hidden scrollbar">
        {softSkills.map((image) =>
          image.fileName ? (
            <Image key={image.name} name={image.name} fileName={image.fileName} />
          ) : (
            <section
              key="dinosaur"
              className="skill-container relative mt-[20vh] h-[80vh] lg:mt-0 lg:h-full"
            >
              <h2 className="absolute top-0 text-8xl xl:text-9xl z-10 left-4 font-bold text-cyan-300 uppercase font-[Oswald]">
                look at <br />
                this <br />
              </h2>
              <h2 className="absolute  left-4 text-5xl font-bold text-cyan-300 uppercase font-[Oswald]">
                dinosaur🦖
              </h2>
              <Canvas>
                <Rex />
              </Canvas>
            </section>
          ),
        )}
      </div>
    </>
  );
};
