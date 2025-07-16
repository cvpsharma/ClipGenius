import React from 'react';
import { footerData } from '../data/footerData';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f]/90 backdrop-blur-xl box-border w-full border-zinc-800/50 border-t border-solid mt-16">
      <section className="text-sm box-border leading-5 max-w-screen-2xl mx-auto px-4 py-16 md:px-16">
        <div className="box-border gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-16 md:gap-x-0 md:grid-cols-[repeat(6,minmax(0px,1fr))] md:gap-y-0">
          <div className="text-zinc-400 box-border col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]">
            <div className="box-border flex flex-col">
              <h3 className="text-white text-base font-semibold box-border leading-6 mb-2">Solutions</h3>
              {footerData.solutions.map((link) => (
                <a key={link.id} href={link.href} className="box-border block mt-4">
                  {link.label}
                </a>
              ))}
              <h3 className="text-white text-base font-semibold box-border leading-6 mt-4 pt-4 pb-2">Products</h3>
              {footerData.products.map((link) => (
                <a key={link.id} href={link.href} className="box-border block mt-4">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-zinc-400 items-start box-border flex flex-col col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]">
            <h3 className="text-white text-base font-semibold box-border leading-6 mb-2">
              <a href="/tools" className="box-border">Free AI Video Tools</a>
            </h3>
            {footerData.tools.map((link) => (
              <a key={link.id} href={link.href} className="box-border block mt-4">
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-zinc-400 items-start box-border flex flex-col col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]">
            {footerData.additionalTools.map((link) => (
              <a key={link.id} href={link.href} className={link.id === 'ai-ad-generator' ? "box-border block" : "box-border block mt-4"}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="bg-[linear-gradient(to_right_top,rgba(255,255,255,0)_25%,rgba(255,255,255,0.25),rgba(255,255,255,0)_75%)] box-border h-px mt-8"></div>
        <div className="items-center box-border flex flex-col-reverse justify-between mt-8 md:flex-row">
          <div className="items-center box-border gap-x-8 flex gap-y-8 mt-8 md:mt-0">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 font-bold text-2xl">ClipGenius</div>
            <p className="text-slate-300 box-border">
              Made with 💚 by
              <a href="https://twitter.com/tibo_maker" className="box-border underline ml-1">Tibo</a>
            </p>
          </div>
          <div className="box-border">
            <a href="/terms" className="text-green-200 box-border underline underline-offset-2 hover:text-green-300 transition-colors duration-200">Terms of Service</a>
            <a href="/policy" className="text-green-200 box-border underline underline-offset-2 ml-3 hover:text-green-300 transition-colors duration-200">Privacy Policy</a>
          </div>
        </div>
      </section>
    </footer>
  );
}
