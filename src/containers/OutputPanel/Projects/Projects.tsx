import { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { Loading } from '../../../components';
import { usePreloadImages } from '../../../hooks';
import './Projects.css';

interface Project {
  name: string;
  description: string;
  logo: string;
  screenshot: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: 'SimeHUB Employee Platform',
    description: 'Employee management platform for SimeHUB.',
    logo: 'simehub.webp',
    screenshot: 'simehub.webp',
    link: 'https://simehub.sime.com/',
  },
  {
    name: 'YourHD Employee Platform',
    description: 'Employee management platform for Hastings Deering.',
    logo: 'yourhd.webp',
    screenshot: 'yourhd.webp',
    link: 'https://yourhd.hastingsdeering.com.au/',
  },
  {
    name: 'myTSL Employee Platform',
    description: 'Employee management platform for myTSL.',
    logo: 'tsl.webp',
    screenshot: 'tsl.webp',
    link: 'https://mytsl.tractors.com.sg/',
  },
  {
    name: 'GFO Employee Platform',
    description: 'Employee management platform for Ground Force Online.',
    logo: 'gfo.webp',
    screenshot: 'gfo.webp',
    link: 'https://gfo.terracat.co.nz/',
  },
  {
    name: 'Gamesummit Jury Voting',
    description: 'Jury voting app for Gamesummit event.',
    logo: 'gamesummit.webp',
    screenshot: 'gamesummit.webp',
    link: 'https://gamesummit-jury.web.app/',
  },
  {
    name: 'SNB Mobile App',
    description: 'Mobile banking app for Saudi National Bank.',
    logo: 'snb.webp',
    screenshot: 'snb.webp',
  },
  {
    name: 'Lacera Ceramic Studio',
    description: 'Management system for products & orders.',
    logo: 'lacera.webp',
    screenshot: 'lacera.webp',
    link: 'https://lacera.az/',
  },
  {
    name: 'Child Adoption Platform',
    description: 'A platform for child adoption in Azerbaijan.',
    logo: 'adoption.webp',
    screenshot: 'adoption.webp',
    link: 'https://adoption.mlspp.gov.az/app/',
  },
];

const variants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.3, duration: 0.6 },
  }),
  tap: { scale: 0.8 },
  hover: { scale: 1.05 },
};

export const Projects = () => {
  const loaded = usePreloadImages(
    projects.map((project) => `${import.meta.env.BASE_URL}/logos/${project.logo}`),
  );
  return (
    <>
      {loaded ? (
        <>
          <h2 className="lg:hidden text-7xl font-bold text-cyan-300 text-center uppercase font-[Oswald]">
            Projects
          </h2>
          <div className="projects-container lg:overflow-y-auto lg:overflow-x-hidden scrollbar">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  variants={variants}
                  className="relative bg-gray-900 p-5 rounded-2xl shadow-lg  group"
                  initial="hidden"
                  animate="visible"
                  whileTap="tap"
                  whileHover="hover"
                  custom={index}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}/logos/${project.logo}`}
                    alt={project.name}
                    className="w-32 h-16 object-left object-contain"
                  />

                  <div className="mt-4">
                    <h3 className="text-lg mb-2 font-bold text-white">{project.name}</h3>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>

                  <motion.img
                    src={`${import.meta.env.BASE_URL}/screenshots/${project.screenshot}`}
                    alt={`${project.name} Screenshot`}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
