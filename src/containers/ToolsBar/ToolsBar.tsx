import { FC } from 'react';
import './ToolsBar.css';

const tools = ['explore', 'search', 'git', 'debugger'];

export const ToolsBar: FC = () => {
  return (
    <div className="tools-bar-wrapper">
      {tools.map((tool) => (
        <img width={32} height={32} key={tool} src={`icons/${tool}.svg`} alt="" />
      ))}
    </div>
  );
};
