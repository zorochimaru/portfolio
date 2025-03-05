import { motion, Variants } from 'motion/react';
import { FC } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import { Tab } from '../../components';
import { routes } from '../../constants';
import { Method } from '../../enums';
import './CodePanel.css';
import { About } from './pages/About';
import { HighlightPage } from './pages/Highlight';

interface SenderProps {
  dispatch: (action: { type: string; payload: Method }) => void;
}

const codePanelVariants: Variants = {
  hidden: { opacity: 0, translateX: '-100vh' },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.3 } },
};

export const CodePanel: FC<SenderProps> = ({ dispatch }) => {
  return (
    <BrowserRouter basename="/portfolio">
      <motion.div
        variants={codePanelVariants}
        initial="hidden"
        animate="visible"
        className="editor-wrapper bg-(--dark-bg2)"
      >
        <div className="flex">
          <NavLink
            to={routes.root}
            className={({ isActive }) =>
              isActive ? 'bg-(--primary-dark-bg)' : 'bg-(--secondary-bg-2)'
            }
          >
            <Tab img="images/ts.webp" title="Hello.ts" />
          </NavLink>

          <NavLink
            to={routes.about}
            className={({ isActive }) =>
              isActive ? 'bg-(--primary-dark-bg)' : 'bg-(--secondary-bg-2)'
            }
          >
            <Tab img="images/sass.webp" title="About.scss" />
          </NavLink>
        </div>

        <Routes>
          <Route path={routes.root} element={<HighlightPage dispatch={dispatch} />} />
          <Route path={routes.about} element={<About />} />
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
};
