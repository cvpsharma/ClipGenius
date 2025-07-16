import React from 'react';
import { toolsData } from '../data/toolsData';

export function ToolsSection() {
  return (
    <article className="relative text-stone-300 bg-gradient-to-br from-zinc-900 to-zinc-800 box-border w-full border border-zinc-700 my-4 px-4 rounded-3xl border-solid md:px-8 h-full shadow-lg">
      <div className="relative box-border w-full border-l border-r border-solid border-white/10">
        <div className="absolute items-center box-border gap-x-8 grid grid-cols-none h-full gap-y-8 w-full z-0 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <section className="absolute content-between box-border grid col-end-[span_2] col-start-[span_2] grid-cols-[repeat(2,minmax(0px,1fr))] h-full justify-between w-full z-0">
            <div className="bg-white/30 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900 outline outline-8 w-1 my-4 rounded-full md:my-8"></div>
            <div className="self-end bg-white/30 box-border h-1 justify-self-end outline-zinc-900 outline outline-8 w-1 -mx-0.5 my-4 rounded-full md:my-8"></div>
            <div className="bg-white/30 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900 outline outline-8 w-1 my-4 rounded-full md:my-8"></div>
            <div className="self-end bg-white/30 box-border h-1 justify-self-end outline-zinc-900 outline outline-8 w-1 -mx-0.5 my-4 rounded-full md:my-8"></div>
          </section>
        </div>
        <div className="relative box-border z-20 mx-auto py-12 md:py-24">
          <div className="box-border">
            <div className="text-green-200 text-sm font-medium box-border leading-5 w-fit border border-zinc-800 mx-auto p-[1.5px] rounded-lg border-solid">
              <div className="items-center bg-zinc-900/50 box-border flex px-2 py-1 rounded-full">
                <img src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-10.svg" alt="Icon" className="box-border h-4 w-[17px]" />
                <span className="box-border block ml-1">Tools</span>
              </div>
            </div>
            <h2 className="text-white text-3xl box-border leading-9 max-w-screen-md text-center w-[91.6667%] mt-4 mx-auto font-euclid_0c3530 md:text-5xl md:leading-[48px]">
              <a href="/tools" className="text-3xl box-border leading-9 md:text-5xl md:leading-[48px]">Free AI Video Tools</a>
            </h2>
            <p className="box-border max-w-lg text-center w-[90%] mt-4 mx-auto">
              Pick the right tool, provide your input, and you'll create a video in no time - customize it however you want.
            </p>
          </div>
          <div className="bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,rgba(229,229,247,0)_1.5px,rgba(229,229,247,0)_6px)] box-border opacity-80 w-full my-12 border-b border-t border-solid border-white/10">
            <div className="bg-zinc-900 box-border grid grid-cols-[repeat(1,minmax(0px,1fr))] w-[90%] mx-auto border-l border-r border-solid border-white/10 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:w-9/12">
              {toolsData.map((tool) => (
                <div key={tool.id} className={tool.containerClass}>
                  <div className="bg-zinc-900 box-border flex flex-col h-full p-6 rounded-lg">
                    <div className="relative box-border w-10">
                      <img src={tool.icon} alt="Icon" className="text-white box-border h-5 w-5 mr-3" />
                    </div>
                    <div className="box-border h-full">
                      <a href={tool.href} className="box-border">
                        <h4 className="text-white text-lg font-medium box-border leading-7 mt-4 mb-2">{tool.title}</h4>
                      </a>
                      <p className="text-sm box-border leading-5">{tool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="/tools" className="relative text-white text-sm font-medium items-center bg-[radial-gradient(89.39%_89.39%_at_50%_50%,rgba(16,18,21,0.1)_0px,rgba(255,255,255,0.15)_100%)] box-border flex h-fit leading-5 w-fit border mx-auto px-5 py-2 rounded-xl border-solid border-white/10">
            See all tools
            <img src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-12.svg" alt="Icon" className="box-border h-[17px] w-4 ml-2" />
          </a>
        </div>
      </div>
    </article>
  );
}
