import { useReducer } from 'react';
import { Title } from './components';
import { CodePanel, Footer, OutputPanel, Terminal, ToolsBar } from './containers';
import { Method } from './enums';

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

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Title />
      <main className="flex flex-1 min-h-0 ">
        <ToolsBar />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-3 overflow-hidden">
            <CodePanel dispatch={dispatch} />

            <OutputPanel message={state.message} />
          </div>

          <Terminal />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
