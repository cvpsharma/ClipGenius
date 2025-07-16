import React from 'react';

export function ToolBundlesSection() {
  return (
    <section className="relative text-stone-300 bg-gradient-to-br from-[#0a0a0f] to-[#101020] box-border w-full border border-zinc-700/50 my-16 px-4 rounded-3xl border-solid md:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
      <div className="relative box-border w-full border-l border-r border-solid border-white/10">
        <div className="absolute items-center box-border gap-x-8 grid grid-cols-none h-full gap-y-8 w-full z-0 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <section className="absolute content-between box-border grid col-end-[span_2] col-start-[span_2] grid-cols-[repeat(2,minmax(0px,1fr))] h-full justify-between w-full z-0">
            <div className="bg-white/30 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900 outline outline-8 w-1 my-8 rounded-full"></div>
            <div className="self-end bg-white/30 box-border h-1 justify-self-end outline-zinc-900 outline outline-8 w-1 -mx-0.5 my-8 rounded-full"></div>
            <div className="bg-white/30 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900 outline outline-8 w-1 my-8 rounded-full"></div>
            <div className="self-end bg-white/30 box-border h-1 justify-self-end outline-zinc-900 outline outline-8 w-1 -mx-0.5 my-8 rounded-full"></div>
          </section>
        </div>
        <div className="relative box-border z-20 mx-auto py-12 md:py-24">
          <div className="box-border">
            <h2 className="text-white text-3xl box-border leading-9 max-w-screen-md text-center w-[91.6667%] mt-4 mx-auto font-euclid_0c3530 md:text-4xl md:leading-[48px]">
              Or Buy Tool Bundles
            </h2>
            <p className="box-border max-w-lg text-center w-[90%] mt-4 mx-auto">
              Perfect for occasional creators who don't need a subscription
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 blur-3xl opacity-40 -z-10 rounded-3xl"></div>
            {/* Core Tools Bundle */}
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Core Tools Bundle</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹99</span>
                  <span className="text-zinc-400 ml-1">one-time</span>
                </div>
                <p className="text-zinc-400 mb-6">Essential video creation tools</p>
                <a href="/bundles/core" className="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-500/20">
                  Buy Bundle
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">5 Tools</p>
              </div>
            </div>

            {/* Social & Avatar Bundle */}
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Social & Avatar Bundle</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹149</span>
                  <span className="text-zinc-400 ml-1">one-time</span>
                </div>
                <p className="text-zinc-400 mb-6">Social media focused tools</p>
                <a href="/bundles/social" className="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Buy Bundle
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">7 Tools</p>
              </div>
            </div>

            {/* Viral Content Bundle */}
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Viral Content Bundle</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹199</span>
                  <span className="text-zinc-400 ml-1">one-time</span>
                </div>
                <p className="text-zinc-400 mb-6">Trending content generators</p>
                <a href="/bundles/viral" className="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Buy Bundle
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">10 Tools</p>
              </div>
            </div>

            {/* Educational Bundle */}
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Educational Bundle</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹129</span>
                  <span className="text-zinc-400 ml-1">one-time</span>
                </div>
                <p className="text-zinc-400 mb-6">Learning and tutorial tools</p>
                <a href="/bundles/educational" className="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Buy Bundle
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">4 Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
