import { FC } from 'react';

export const Tab: FC<{ title: string; active?: boolean; img?: string }> = ({
  title,
  img,
  active,
}) => {
  return (
    <div
      className={`${active ? 'bg-(--primary-dark-bg)' : 'bg-(--secondary-bg-2)'} px-3 py-2 flex gap-2 items-center`}
    >
      {img && <img width={16} height={16} src={img} alt="" />}
      <span>{title}</span>
      {active && <img width={12} height={12} src="/icons/close.svg" alt="" />}
    </div>
  );
};
