import React, { useState } from 'react';
import { navigationData } from '../data/navigationData';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 box-border flex justify-center max-w-screen-2xl w-full z-[99] px-4 md:px-20 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="relative items-center box-border flex h-20 justify-between w-full px-4">
          <a href="/" className="box-border block flex items-center">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 font-bold text-2xl">ClipGenius</div>
          </a>
        <div className="items-center box-border gap-x-8 flex justify-end gap-y-8">
          <div className={`${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'} absolute text-stone-300 font-medium [align-items:normal] bg-[#0a0a0f]/95 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(75,85,99,0.1)_0px_25px_50px_-12px] box-border gap-x-6 block flex-col flex-wrap justify-end min-h-0 min-w-0 gap-y-6 origin-[100%_0%] w-full z-20 p-6 left-0 top-full transition-all duration-300 ease-in-out md:relative md:items-center md:bg-transparent md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] md:gap-x-0 md:flex md:flex-row md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:gap-y-0 md:transform-none md:visible md:w-auto md:p-0`}>
            <div className="box-border min-h-0 min-w-0 invisible ml-0 pr-0 md:min-h-[auto] md:min-w-[auto] md:visible md:ml-8 md:pr-4">
              <ul className="text-base [align-items:normal] box-border gap-x-8 block tracking-[0.4px] leading-6 list-none gap-y-8 pl-0 md:text-sm md:items-center md:flex md:tracking-[0.35px] md:leading-5">
                {navigationData.map((item) => (
                  <li key={item.id} className={item.className}>
                    <a href={item.href} className="text-base box-border tracking-[0.4px] leading-6 decoration-gray-500 hover:text-white transition-colors duration-200 md:text-sm md:tracking-[0.35px] md:leading-5">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button 
            aria-label="menu" 
            className="relative bg-transparent block min-h-[auto] min-w-[auto] text-center -mr-6 p-6 md:hidden md:min-h-0 md:min-w-0"
            onClick={toggleMobileMenu}
          >
            <div className={`bg-sky-50 box-border h-0.5 w-5 m-auto rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1' : ''}`}></div>
            <div className={`bg-sky-50 box-border h-0.5 w-5 mt-1.5 mb-auto mx-auto rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`bg-sky-50 box-border h-0.5 w-5 mt-1.5 mb-auto mx-auto rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
      </div>
    </div>
  );
}