import { useGLTF } from '@react-three/drei';
import { useReducer } from 'react';
import { Title } from './components';
import { CodePanel, Footer, OutputPanel, Terminal, ToolsBar } from './containers';
import { Method } from './enums';
import { TerminalCommandProvider } from './HOC';
import { useIsMobile } from './hooks';
interface State {
  message: Method;
}

const reducer = (state: State, action: { type: string; payload: Method }): State => {
  switch (action.type) {
    case 'RUN_METHOD':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { message: Method.introduce });
  const isMobile = useIsMobile();

  if (!isMobile) {
    useGLTF.preload(`https://pub-4b5fac57f5074023bb9e348919bf61f4.r2.dev/stars.glb`);
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Title />
      <TerminalCommandProvider>
        <main className="flex flex-1 min-h-0 ">
          <ToolsBar />
          <div className="flex flex-1 flex-col">
            <div className="flex flex-3 overflow-hidden">
              <CodePanel message={state.message} dispatch={dispatch} />

              <OutputPanel message={state.message} />
            </div>

            {!isMobile && <Terminal />}
          </div>
        </main>
        <Footer />
      </TerminalCommandProvider>
    </div>
  );
};

export default App;
