import { createContext, ReactNode, useContext, useState } from 'react';

interface TerminalCommandContextType {
  command: string;
  setCommand: (value: string) => void;
}

const TerminalCommandContext = createContext<TerminalCommandContextType | null>(null);

export const useTerminalCommandContext = () => {
  const context = useContext(TerminalCommandContext);
  if (!context) {
    throw new Error(
      'useTerminalCommandContext должен использоваться внутри TerminalCommandProvider',
    );
  }

  const resetAndSetCommand = (newValue: string) => {
    context.setCommand('.');
    setTimeout(() => {
      context.setCommand(newValue);
    }, 500);
  };

  return { ...context, resetAndSetCommand };
};

export const TerminalCommandProvider = ({ children }: { children: ReactNode }) => {
  const [command, setCommand] = useState('');

  return (
    <TerminalCommandContext.Provider value={{ command, setCommand }}>
      {children}
    </TerminalCommandContext.Provider>
  );
};
