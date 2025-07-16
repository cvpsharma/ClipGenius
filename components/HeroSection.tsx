import React from 'react';

export function HeroSection() {
  return (
    <section className="relative box-border w-full py-16 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff80] to-[#089bff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <article className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]/60 backdrop-blur-sm border border-zinc-800/50 rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.1)] md:px-8">
        <div className="relative items-start box-border gap-x-12 grid grid-cols-none gap-y-12 w-full px-0 py-[7.5%] border-l border-r border-solid border-white/10 md:gap-x-8 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-8 md:px-8">
          <section className="absolute content-between box-border grid col-end-[span_2] col-start-[span_2] grid-cols-[repeat(2,minmax(0px,1fr))] h-full justify-between w-full z-0">
            <div className="bg-white/50 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900/60 outline outline-8 w-1 my-8 rounded-full md:outline-zinc-900"></div>
            <div className="self-end bg-white/50 box-border h-1 justify-self-end outline-zinc-900/60 outline outline-8 w-1 -mx-0.5 my-8 rounded-full md:outline-zinc-900"></div>
            <div className="bg-white/50 box-border h-1 ml-[-2.5px] mr-[-2.5px] outline-zinc-900/60 outline outline-8 w-1 my-8 rounded-full md:outline-zinc-900"></div>
            <div className="self-end bg-white/50 box-border h-1 justify-self-end outline-zinc-900/60 outline outline-8 w-1 -mx-0.5 my-8 rounded-full md:outline-zinc-900"></div>
          </section>
          <section className="box-border gap-x-0 flex flex-col gap-y-0 mt-12 md:mt-0">
            <div className="box-border">
              <h1 className="text-white text-4xl font-medium box-border leading-[50px] text-center font-euclid_0c3530 md:text-6xl md:leading-[60px] md:text-left">
                Create viral videos in <span className="text-transparent text-4xl bg-clip-text bg-[linear-gradient(to_right,rgb(69,236,130)_0.16%,rgb(112,121,243)_47.81%,rgb(117,206,252)_100%)] box-border leading-[50px] text-center md:text-6xl md:leading-[60px] md:text-left">Minutes</span>
              </h1>
              <p className="text-slate-300 box-border text-center mt-4 mx-auto md:text-left md:mx-0">
                Turn your creative ideas into attention-grabbing TikTok, Instagram, and YouTube stories with just a few clicks. All you need is a story to tell - ClipGenius handles the rest.
              </p>
            </div>
            <div className="box-border flex justify-center mt-8 md:justify-start">
              <div className="items-start box-border gap-x-2 flex flex-col justify-start gap-y-2">
                <div className="text-neutral-900 bg-[linear-gradient(rgb(168,255,200),rgb(75,222,129))] shadow-[rgba(255,255,255,0.14)_0px_0px_0px_4px,rgb(75,222,129)_0px_0px_0px_1px] box-border flex w-fit border border-green-400 p-[1.5px] rounded-xl border-solid">
                  <a href="/login" className="relative font-semibold bg-[linear-gradient(rgba(75,222,129,0.314),rgb(168,255,200)_50%,rgb(75,222,129))] box-border block h-fit px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">Create videos now</a>
                </div>
                <div className="text-white/60 text-xs italic box-border leading-4">No credit card required</div>
              </div>
            </div>
            <div className="box-border flex justify-center mt-8 md:justify-start">
              <article className="items-center box-border flex flex-col mt-2">
                <div className="items-center box-border flex flex-col justify-center">
                  <div className="items-center box-border gap-x-3 flex flex-col gap-y-3 md:items-start">
                    <div className="box-border flex rounded-l-2xl">
                      <img alt="user testimonial" src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-1" className="text-transparent aspect-[auto_40_/_40] shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_2px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border h-10 max-w-full object-cover w-10 rounded-r-sm rounded-l-lg" />
                      <img alt="user testimonial" src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-2" className="text-transparent aspect-[auto_40_/_40] shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_2px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border h-10 max-w-full object-cover w-10 ml-2 rounded-sm" />
                      <img alt="user testimonial" src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-3" className="text-transparent aspect-[auto_40_/_40] shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_2px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border h-10 max-w-full object-cover w-10 ml-2 rounded-sm" />
                      <img alt="user testimonial" src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-4" className="text-transparent aspect-[auto_40_/_40] shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_2px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border h-10 max-w-full object-cover w-10 ml-2 rounded-sm" />
                      <img alt="user testimonial" src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-5" className="text-transparent aspect-[auto_40_/_40] shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_2px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border h-10 max-w-full object-cover w-10 ml-2 rounded-sm" />
                      <img alt="user testimonial" src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-6" className="text-transparent aspect-[auto_40_/_40] shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_2px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border h-10 max-w-full object-cover w-10 ml-2 rounded-r-lg rounded-l-sm" />
                    </div>
                    <div className="text-white/50 text-xs box-border leading-4">And loved by 14,258+ users</div>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <div className="relative items-center box-border flex h-[440px] justify-center max-w-[280px] mx-auto">
            <div className="static aspect-[9_/_16] bg-white/10 box-border hidden transform-none w-[120px] z-20 border overflow-hidden mx-auto rounded-xl border-solid border-white/90 inset-x-auto md:absolute md:block md:rotate-[-12.000012571476546deg] md:w-60 md:-left-1/4 md:right-1/4">
              <div className="box-border h-full w-full">
                <video className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border h-full max-w-full object-cover w-full rounded-[10px]"></video>
              </div>
            </div>
            <div className="relative aspect-[9_/_16] bg-white/10 box-border w-[91.6667%] z-30 border overflow-hidden mx-auto rounded-xl border-solid border-white/90 -top-2.5 md:w-[250px]">
              <div className="box-border h-full w-full">
                <video className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border h-full max-w-full object-cover w-full rounded-[10px]"></video>
              </div>
            </div>
            <div className="static aspect-[9_/_16] bg-white/10 box-border hidden transform-none w-[120px] z-20 border overflow-hidden mx-auto rounded-xl border-solid border-white/90 inset-x-auto md:absolute md:block md:rotate-[12.000012571476546deg] md:w-60 md:left-1/4 md:-right-1/4">
              <div className="box-border h-full w-full">
                <video className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border h-full max-w-full object-cover w-full rounded-[10px]"></video>
              </div>
            </div>
            <div className="absolute bg-[linear-gradient(rgb(190,255,214),rgb(146,218,255))] box-border blur-[55px] h-[85%] w-2/5 z-0 mb-6"></div>
          </div>
        </div>
      </article>
    </section>
  );
}
