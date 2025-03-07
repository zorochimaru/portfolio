import { FC, useState } from 'react';
import { useTerminalCommandContext } from '../../HOC';

const tools = ['explore', 'search', 'git', 'debugger'];

const lofiAudio = new Audio(`https://streams.fluxfm.de/Chillhop/mp3-128/streams.fluxfm.de/`);

export const ToolsBar: FC = () => {
  const [paused, setPaused] = useState(true);
  const { resetAndSetCommand } = useTerminalCommandContext();

  const togglePlayer = () => {
    if (lofiAudio.paused) {
      lofiAudio.play();
      resetAndSetCommand('playing chill music 🎙️');
      setPaused(false);
    } else {
      lofiAudio.pause();
      resetAndSetCommand('paused ⏸️');
      setPaused(true);
    }
  };

  return (
    <div className="flex items-center flex-col shrink-0 gap-6 py-6 w-12 bg-[var(--secondary-bg-2)]">
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
