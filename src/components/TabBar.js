import React from 'react';
import HomeIcon from '~icons/HomeIcon';

const TabBar = () => {
  return (
    <div className="fixed bottom-[16px] left-0 right-0 bg-[#ebe1f1] mx-4 p-4 z-40 flex items-center justify-around rounded-lg">
      <div className="flex items-center flex-col">
        <HomeIcon className="text-fuchsia-900" />
        <span>Home</span>
      </div>
      <div className="flex items-center flex-col">
        <HomeIcon className="text-fuchsia-900" />
        <span>Home</span>
      </div>
      <div className="flex items-center flex-col">
        <HomeIcon className="text-fuchsia-900" />
        <span>Home</span>
      </div>
      <div className="flex items-center flex-col">
        <HomeIcon className="text-fuchsia-900" />
        <span>Home</span>
      </div>
    </div>
  );
};

export default TabBar;
