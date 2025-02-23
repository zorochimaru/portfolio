import * as motion from 'motion/react-client';
import { useReducer } from 'react';
import './App.css';
import { CodePanel, Footer, OutputPanel, Terminal, ToolsBar } from './containers';

interface State {
  message: string;
}

const reducer = (state: State, action: { type: string; payload: string }): State => {
  switch (action.type) {
    case 'RUN_METHOD':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { message: '' });

  return (
    <motion.div
      className="flex flex-col h-screen overflow-hidden"
      initial={{ opacity: 0, translateY: '100vh' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="title-header">
        <h1>Rasim Karimli Portfolio</h1>
      </div>

      <main className="flex flex-1 min-h-0 ">
        <ToolsBar />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-3 overflow-hidden">
            <CodePanel dispatch={dispatch} />
            <OutputPanel message={state.message} />
          </div>
          <div className="flex-1">
            <Terminal />
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default App;
