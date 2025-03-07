import { useAnimations, useGLTF } from '@react-three/drei';
import { Canvas, ObjectMap } from '@react-three/fiber';
import { FC, useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';
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
    <section className="skill-container">
      <div ref={ref}>
        <img src={`${import.meta.env.BASE_URL}/images/${fileName}`} alt="" />
        <h2 className="text-5xl font-bold text-cyan-300 uppercase font-[Oswald]">{`${name}`}</h2>
      </div>
    </section>
  );
}

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
      <primitive object={gltf.scene} position={[1, -2, -1.5]} rotation-y={-1.2} />
    </>
  );
};

export const SoftSkills = () => {
  const gltf = useGLTF(`https://pub-4b5fac57f5074023bb9e348919bf61f4.r2.dev/rex.glb`);

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
            <section key="dinosaur" className="skill-container relative">
              <h2 className="absolute top-0 2xl:top-1/7 z-10 left-4 text-9xl font-bold text-cyan-300 uppercase font-[Oswald]">
                look at <br />
                this <br />
              </h2>
              <h2 className="absolute 2xl:top-1/2 left-4 text-5xl 2xl:text-7xl font-bold text-cyan-300 uppercase font-[Oswald]">
                dinosaur🦖
              </h2>
              <Canvas>
                <Rex gltf={gltf} />
              </Canvas>
            </section>
          ),
        )}
      </div>
    </>
  );
};
