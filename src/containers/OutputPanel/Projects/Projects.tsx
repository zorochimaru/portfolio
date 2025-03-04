import { Variants } from 'motion/react';
import * as motion from 'motion/react-client';

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
    logo: 'logos/simehub.png',
    screenshot: 'screenshots/simehub.jpg',
    link: 'https://simehub.sime.com/',
  },
  {
    name: 'YourHD Employee Platform',
    description: 'Employee management platform for Hastings Deering.',
    logo: 'logos/yourhd.png',
    screenshot: 'screenshots/yourhd.jpg',
    link: 'https://yourhd.hastingsdeering.com.au/',
  },
  {
    name: 'myTSL Employee Platform',
    description: 'Employee management platform for myTSL.',
    logo: 'logos/tsl.png',
    screenshot: 'screenshots/tsl.jpg',
    link: 'https://mytsl.tractors.com.sg/',
  },
  {
    name: 'GFO Employee Platform',
    description: 'Employee management platform for Ground Force Online.',
    logo: 'logos/gfo.png',
    screenshot: 'screenshots/gfo.jpg',
    link: 'https://gfo.terracat.co.nz/',
  },
  {
    name: 'Gamesummit Jury Voting',
    description: 'Jury voting app for Gamesummit event.',
    logo: 'logos/gamesummit.png',
    screenshot: 'screenshots/gamesummit.jpg',
    link: 'https://gamesummit-jury.web.app/',
  },
  {
    name: 'SNB Mobile App',
    description: 'Mobile banking app for Saudi National Bank.',
    logo: 'logos/snb.png',
    screenshot: 'screenshots/snb.jpg',
  },
  {
    name: 'Lacera Ceramic Studio',
    description: 'Management system for products & orders.',
    logo: 'logos/lacera.png',
    screenshot: 'screenshots/lacera.jpg',
    link: 'https://lacera.az/',
  },
  {
    name: 'Child Adoption Platform',
    description: 'A platform for child adoption in Azerbaijan.',
    logo: 'logos/adoption.png',
    screenshot: 'screenshots/adoption.png',
    link: 'https://adoption.mlspp.gov.az/app/',
  },
];

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.3, duration: 0.6 },
  }),
  tap: { scale: 0.8 },
  hover: { scale: 1.05 },
};

export const Projects = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <motion.a
          key={index}
          href={project.link}
          target="_blank"
          variants={variants}
          className="relative bg-gray-900 p-5 rounded-2xl shadow-lg overflow-hidden group"
          initial="hidden"
          animate="visible"
          whileTap="tap"
          whileHover="hover"
          custom={index}
        >
          <img
            src={project.logo}
            alt={project.name}
            className="w-32 h-16 object-left object-contain"
          />

          <div className="mt-4">
            <h3 className="text-lg mb-2 font-bold text-white">{project.name}</h3>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>

          <motion.img
            src={project.screenshot}
            alt={`${project.name} Screenshot`}
            className="absolute top-0 left-0 w-full h-full object-cover  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.a>
      ))}
    </div>
  );
};
