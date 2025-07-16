import React from 'react';

export function PricingSection() {
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
            <div className="text-green-200 text-sm font-medium box-border leading-5 w-fit border border-zinc-800 mx-auto p-[1.5px] rounded-lg border-solid">
              <div className="items-center bg-zinc-900/50 box-border flex px-2 py-1 rounded-full">
                <img src="https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-10.svg" alt="Icon" className="box-border h-4 w-[17px]" />
                <span className="box-border block ml-1">Pricing</span>
              </div>
            </div>
            <h2 className="text-white text-3xl box-border leading-9 max-w-screen-md text-center w-[91.6667%] mt-4 mx-auto font-euclid_0c3530 md:text-5xl md:leading-[60px]">
              Choose Your Plan
            </h2>
            <p className="box-border max-w-lg text-center w-[90%] mt-4 mx-auto">
              Select the perfect plan for your video creation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 blur-3xl opacity-40 -z-10 rounded-3xl"></div>
            {/* Starter Plan */}
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Starter</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹199</span>
                  <span className="text-zinc-400 ml-1">/month</span>
                </div>
                <p className="text-zinc-400 mb-4">5 videos per month</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>5 video generations/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic tools access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>480p video quality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Community support</span>
                  </li>
                </ul>
                <a href="/signup" className="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Start Free
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">4 Tools</p>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Standard</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹499</span>
                  <span className="text-zinc-400 ml-1">/month</span>
                </div>
                <p className="text-zinc-400 mb-4">25 videos per month</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>25 video generations/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Most tools access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>1080p video quality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom branding</span>
                  </li>
                </ul>
                <a href="/signup" className="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Choose Standard
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">16 Tools</p>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-zinc-800/50 to-zinc-800/80 rounded-xl border border-green-500/50 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-green-500 text-xs font-bold text-black px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Pro</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹999</span>
                  <span className="text-zinc-400 ml-1">/month</span>
                </div>
                <p className="text-zinc-400 mb-4">100 videos per month</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>100 video generations/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>All tools access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>4K video quality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>API access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Bulk processing</span>
                  </li>
                </ul>
                <a href="/signup" className="block text-center bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-3 px-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                  Choose Pro
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">All Tools Included</p>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2">Enterprise</h3>
                <div className="flex items-end mb-4">
                  <span className="text-white text-3xl font-bold">₹2499</span>
                  <span className="text-zinc-400 ml-1">/month</span>
                </div>
                <p className="text-zinc-400 mb-4">Unlimited per month</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited video generations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>All tools access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>4K video quality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority processing</span>
                  </li>
                </ul>
                <a href="/signup" className="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Choose Enterprise
                </a>
                <p className="text-center text-zinc-500 text-sm mt-3">All Tools Included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
