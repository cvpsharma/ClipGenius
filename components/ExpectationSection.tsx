import React from 'react';

export function ExpectationSection() {
  return (
    <div className="text-stone-300 bg-gradient-to-br from-zinc-900 to-zinc-800 box-border w-full border border-zinc-700 mt-4 px-4 rounded-3xl border-solid md:px-8 h-full shadow-lg">
      <div className="relative box-border -z-30 py-12 rounded-b-3xl border-b border-l border-r border-solid border-white/10">
        <div className="text-green-200 text-sm font-medium items-center bg-zinc-900 box-border flex leading-5 w-fit border border-zinc-800 mx-auto px-3.5 py-1.5 rounded-lg border-solid">
          <img src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-2.svg" alt="Icon" className="box-border h-4 w-4" />
          <span className="box-border block ml-1">What to Expect</span>
        </div>
      </div>
      <div className="box-border">
        <div className="box-border py-12"></div>
        <div className="box-border gap-x-4 grid grid-cols-none gap-y-4 mt-12 mb-28 md:grid-cols-[repeat(4,minmax(0px,1fr))]"></div>
        <div className="items-center box-border flex flex-col mx-auto py-12 rounded-t-3xl border-l border-r border-t border-solid border-white/10 md:py-28">
          <p className="text-slate-300 box-border max-w-lg text-center w-[95%] mt-5 mx-auto">Your shortcut to effortless video storytelling</p>
          <div className="items-start box-border gap-x-2 flex flex-col justify-start gap-y-2 mt-5">
            <div className="text-neutral-900 bg-[linear-gradient(rgb(168,255,200),rgb(75,222,129))] shadow-[rgba(255,255,255,0.14)_0px_0px_0px_4px,rgb(75,222,129)_0px_0px_0px_1px] box-border flex w-fit border border-green-400 p-[1.5px] rounded-xl border-solid">
              <a href="/login" className="relative font-semibold bg-[linear-gradient(rgba(75,222,129,0.314),rgb(168,255,200)_50%,rgb(75,222,129))] box-border block h-fit px-5 py-2 rounded-xl">Create videos now</a>
            </div>
            <div className="text-white/60 text-xs italic box-border hidden leading-4">No credit card required</div>
          </div>
        </div>
      </div>
    </div>
  );
}