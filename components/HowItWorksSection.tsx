import React from 'react';

export function HowItWorksSection() {
  return (
    <section className="box-border w-full mt-4 scroll-m-20 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl p-6 shadow-lg">
      <div className="box-border mb-14">
        <div className="text-green-200 text-sm font-medium items-center bg-zinc-900 box-border flex leading-5 w-fit border border-zinc-800 mx-auto px-3.5 py-1.5 rounded-lg border-solid">
          <img src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-3.svg" alt="Icon" className="box-border h-4 w-[17px]" />
          <span className="box-border block ml-1">How it works</span>
        </div>
        <h2 className="text-transparent text-3xl bg-clip-text bg-[linear-gradient(rgb(255,255,255),rgb(153,153,153))] box-border leading-[37.5px] max-w-screen-md text-center w-[91.6667%] mt-4 mx-auto font-euclid_0c3530 md:text-5xl md:leading-[60px]">Four Easy Steps To Create & Share Your Story</h2>
      </div>
      <div className="box-border mt-8"></div>
      <div className="items-center box-border flex flex-col mt-8 mx-auto py-8">
        <div className="text-white font-bold text-2xl">ClipGenius</div>
        <p className="text-slate-300 box-border mt-4">Your shortcut to effortless video storytelling.</p>
        <div className="items-start box-border gap-x-2 flex flex-col justify-start gap-y-2 mt-4">
          <div className="text-neutral-900 bg-[linear-gradient(rgb(168,255,200),rgb(75,222,129))] shadow-[rgba(255,255,255,0.14)_0px_0px_0px_4px,rgb(75,222,129)_0px_0px_0px_1px] box-border flex w-fit border border-green-400 p-[1.5px] rounded-xl border-solid">
            <a href="/login" className="relative font-semibold bg-[linear-gradient(rgba(75,222,129,0.314),rgb(168,255,200)_50%,rgb(75,222,129))] box-border block h-fit px-5 py-2 rounded-xl">Create videos now</a>
          </div>
          <div className="text-white/60 text-xs italic box-border hidden leading-4">No credit card required</div>
        </div>
      </div>
    </section>
  );
}