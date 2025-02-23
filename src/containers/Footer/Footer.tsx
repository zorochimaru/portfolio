export const Footer = () => {
  return (
    <div className="flex text-xs flex-shrink-0">
      <div className="bg-green-600  py-1 px-3">
        <img src="icons/remote.svg" width={16} height={16} alt="" />
      </div>
      <div className="bg-blue-500 flex-1 py-1 px-4 flex gap-4">
        <div className="flex gap-1 items-center">
          <img src="icons/git-footer.svg" alt="" />
          <span>main*</span>
          <img src="icons/cloud.svg" alt="" />
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 items-center">
            <img src="icons/close-circle.svg" alt="" />
            <span>0</span>
          </div>
          <div className="flex gap-1 items-center">
            <img src="icons/warn.svg" alt="" />
            <span>1</span>
          </div>
          <div className="flex gap-1 items-center">
            <img src="icons/info.svg" alt="" />
            <span>10</span>
          </div>
        </div>
        <img src="icons/notification.svg" className="ml-auto" alt="" />
      </div>
    </div>
  );
};
