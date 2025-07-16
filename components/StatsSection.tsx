import React from 'react';
import { statsData } from '../data/statsData';

export function StatsSection() {
  return (
    <article className="bg-gradient-to-br from-[#0a0a0f] to-[#101020] box-border border border-zinc-700/50 mt-4 pb-8 px-4 rounded-3xl border-solid md:px-8 h-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
      <div className="relative bg-zinc-900 box-border h-8 z-20 border-b border-l border-r border-solid border-white/10 md:h-10"></div>
      <section className="bg-white/0 box-border grid grid-cols-none -mt-3 py-8 rounded-b-2xl border-b border-l border-r border-solid border-white/10 md:grid-cols-[repeat(4,minmax(0px,1fr))] md:pt-10">
        {statsData.map((stat, index) => (
          <div key={stat.id} className={index === 0 ? "box-border text-center mx-8 px-0 py-10 md:mx-0 md:px-10 md:py-4" : "box-border text-center mx-8 px-0 py-10 border-l-0 border-t border-solid border-white/10 md:mx-0 md:px-10 md:py-4 md:border-t-0 md:border-l"}>
            <h2 className="text-transparent text-4xl font-bold bg-clip-text bg-[linear-gradient(to_left,rgb(90,232,143)_25%,rgb(120,205,249)_60%)] box-border leading-9 font-euclid_0c3530">{stat.value}</h2>
            <p className="text-slate-300 text-sm box-border leading-5 mt-2">{stat.description}</p>
          </div>
        ))}
      </section>
    </article>
  );
}