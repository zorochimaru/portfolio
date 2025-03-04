import { FC } from 'react';

export const Tab: FC<{ title: string; img?: string }> = ({ title, img }) => {
  return (
    <div className={`px-3 py-2 flex gap-2 items-center`}>
      {img && <img width={16} height={16} src={`${import.meta.env.BASE_URL}/${img}`} alt="" />}
      <span>{title}</span>
      {<img width={12} height={12} src={`${import.meta.env.BASE_URL}/icons/close.svg`} alt="" />}
    </div>
  );
};
