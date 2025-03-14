import * as motion from 'motion/react-client';
interface Experience {
  company: string;
  position: string;
  dates: string;
  link?: string;
}
const experience: Experience[] = [
  {
    company: 'AltexSoft',
    position: 'FullStack Developer',
    dates: '2022 - 2025',
    link: 'https://www.linkedin.com/company/altexsoft/',
  },
  {
    company: 'Lacera Ceramic Studio',
    position: 'FullStack Developer',
    dates: '2024',
    link: 'https://lacera.az/',
  },
  {
    company: 'GeeksForLess',
    position: 'Frontend Developer',
    dates: '2020 - 2021',
    link: 'https://www.linkedin.com/company/geeksforless/',
  },
  {
    company: 'AISTGroup',
    position: 'Frontend Developer',
    dates: '2019 - 2022',
    link: 'https://www.linkedin.com/company/aistgroup/',
  },
  {
    company: 'BPA Solutions',
    position: 'Frontend Developer',
    dates: '2019 - 2020',
  },
  { company: 'Region Plus', position: 'Content Manager', dates: '2013 - 2018' },
];

export const CalculateExperience = () => {
  return (
    <>
      <h2 className="lg:hidden text-7xl font-bold text-cyan-300 text-center uppercase font-[Oswald]">
        My Experience
      </h2>
      <div className="text-center min-h-full p-10 my-auto grid lg:overflow-y-auto lg:overflow-x-hidden scrollbar">
        <div className="relative flex flex-col items-center">
          <motion.div
            className="absolute w-1 bg-blue-500"
            initial={{ height: '0%' }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ top: 0, bottom: 0 }}
          />

          {experience.map((item, index) => (
            <motion.a
              href={item.link}
              target="_blank"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.5, duration: 0.8 }}
              key={index}
              className="relative w-full mx-5 text-center mb-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-bold">{item.company}</h3>
              <p className="text-sm">{item.position}</p>
              <p className="text-xs text-gray-400">{item.dates}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};
