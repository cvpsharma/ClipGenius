import React from 'react';

export function FAQSection() {
  return (
    <article className="bg-gradient-to-br from-zinc-900 to-zinc-800 box-border w-full border border-zinc-700 px-4 rounded-3xl border-solid md:px-8 my-16 shadow-lg">
      <div className="relative box-border w-full border-l border-r border-solid border-white/10">
        <div className="absolute items-center box-border gap-x-8 grid grid-cols-none h-full gap-y-8 w-full z-0 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <section className="absolute content-between box-border grid col-end-[span_2] col-start-[span_2] grid-cols-[repeat(2,minmax(0px,1fr))] h-full justify-between w-full z-0">
            <div className="bg-white/30 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900 outline outline-8 w-1 my-8 rounded-full"></div>
            <div className="self-end bg-white/30 box-border h-1 justify-self-end outline-zinc-900 outline outline-8 w-1 -mx-0.5 my-8 rounded-full"></div>
            <div className="bg-white/30 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900 outline outline-8 w-1 my-8 rounded-full"></div>
            <div className="self-end bg-white/30 box-border h-1 justify-self-end outline-zinc-900 outline outline-8 w-1 -mx-0.5 my-8 rounded-full"></div>
          </section>
        </div>
        <div className="relative box-border w-[95%] z-10 mx-auto py-12 md:w-[66.6667%] md:py-24">
          <div className="box-border mb-14">
            <div className="box-border">
              <div className="text-green-200 text-sm font-medium items-center bg-zinc-900 box-border flex leading-5 w-fit border border-zinc-800 mx-auto px-3.5 py-1.5 rounded-lg border-solid">
                <img src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-21.svg" alt="Icon" className="box-border h-4 w-[17px]" />
                <span className="box-border block ml-1">FAQs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}