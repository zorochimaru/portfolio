import { FC, useState } from 'react';
import './ToolsBar.css';

const tools = ['explore', 'search', 'git', 'debugger'];

const lofiAudio = new Audio(`${import.meta.env.BASE_URL}/audio/lofi.mp3`);

export const ToolsBar: FC = () => {
  const [paused, setPaused] = useState(true);

  const togglePlayer = () => {
    if (lofiAudio.paused) {
      lofiAudio.play();
      setPaused(false);
    } else {
      lofiAudio.pause();
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
