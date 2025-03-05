import { FC, useState } from 'react';
import { useTerminalCommandContext } from '../../HOC';
import './ToolsBar.css';

const tools = ['explore', 'search', 'git', 'debugger'];

const lofiAudio = new Audio(`https://pub-4b5fac57f5074023bb9e348919bf61f4.r2.dev/lofi.mp3`);

export const ToolsBar: FC = () => {
  const [paused, setPaused] = useState(true);
  const { resetAndSetCommand } = useTerminalCommandContext();

  const togglePlayer = () => {
    if (lofiAudio.paused) {
      lofiAudio.play();
      resetAndSetCommand('playing lofi 🎙️');
      setPaused(false);
    } else {
      lofiAudio.pause();
      resetAndSetCommand('paused lofi ⏸️');
      setPaused(true);
    }
  };

  return (
    <div className="tools-bar-wrapper">
      {tools.map((tool) => (
        <img
          width={32}
          height={32}
          key={tool}
          src={`${import.meta.env.BASE_URL}/icons/${tool}.svg`}
          alt=""
        />
      ))}
      <button type="button" className="cursor-pointer" onClick={togglePlayer}>
        <img
          width={32}
          height={32}
          src={`${import.meta.env.BASE_URL}/icons/${paused ? 'music_note' : 'pause'}.svg`}
          alt=""
        />
      </button>
    </div>
  );
};
