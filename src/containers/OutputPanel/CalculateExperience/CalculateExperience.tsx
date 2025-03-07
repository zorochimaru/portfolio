import * as motion from 'motion/react-client';
interface Experience {
  company: string;
  position: string;
  dates: string;
  link?: string;
}
const experience: Experience[] = [
  { company: 'Region Plus', position: 'Content Manager', dates: '2013 - 2018' },
  {
    company: 'BPA Solutions',
    position: 'Frontend Developer (HTML, CSS, JS)',
    dates: '2019 - 2020',
  },
  {
    company: 'AISTGroup',
    position: 'Frontend Developer (Angular, React)',
    dates: '2019 - 2022',
    link: 'https://www.linkedin.com/company/aistgroup/',
  },
  {
    company: 'GeeksForLess',
    position: 'Frontend Developer (Angular, Cordova)',
    dates: '2020 - 2021',
    link: 'https://www.linkedin.com/company/geeksforless/',
  },
  {
    company: 'Lacera Ceramic Studio',
    position: 'FullStack Developer (Angular, Firebase)',
    dates: '2024',
    link: 'https://lacera.az/',
  },
  {
    company: 'AltexSoft',
    position: 'FullStack Developer (Angular, Firebase, NodeJs)',
    dates: '2022 - 2025',
    link: 'https://www.linkedin.com/company/altexsoft/',
  },
];

export const CalculateExperience = () => {
  return (
    <div className="relative flex flex-col items-center p-6 overflow-y-auto overflow-x-hidden scrollbar">
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
  );
};
