import React from 'react';

export function BenefitsSection() {
  return (
    <article className="relative text-stone-300 bg-gradient-to-br from-zinc-900 to-zinc-800 box-border w-full border border-zinc-700 my-4 pb-4 px-4 rounded-3xl border-solid md:pb-8 md:px-8 shadow-lg">
      <div className="relative box-border w-full">
        <div className="relative bg-zinc-900 box-border h-12 z-20 rounded-b-2xl border-b border-l border-r border-solid border-white/10 md:h-14"></div>
        <div className="relative box-border z-20 -mt-5 mx-auto">
          <div className="box-border">
            <div className="text-green-200 text-sm font-medium items-center bg-zinc-900 box-border flex leading-5 w-fit border border-zinc-800 mx-auto px-3.5 py-1.5 rounded-lg border-solid">
              <img src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-5.svg" alt="Icon" className="box-border h-4 w-4" />
              <span className="box-border block ml-1">Benefits</span>
            </div>
            <h2 className="text-transparent text-3xl bg-clip-text bg-[linear-gradient(rgb(255,255,255),rgb(153,153,153))] box-border leading-[37.5px] max-w-screen-md text-center w-[91.6667%] mx-auto py-10 font-euclid_0c3530 md:text-5xl md:leading-[60px]">Why Creators Love ClipGenius</h2>
          </div>
          <div className="box-border gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 md:grid-cols-[repeat(2,minmax(0px,1fr))]"></div>
        </div>
      </div>
    </article>
  );
}