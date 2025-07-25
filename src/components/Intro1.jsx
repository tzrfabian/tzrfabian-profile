import React from 'react'
import ZackCicakModel from './Zack3dModel'

export default function Intro1() {
  return (
    <div className='animate-slideinright'>
    <section className="mt-28 rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-between items-center max-w-5xl mx-auto">
        <div className="max-md:text-center">
            <h2 className="md:text-4xl text-slate-100 text-4xl font-semibold md:!leading-[50px] mb-2">
            Hi there! 👋
            </h2>
            <h2 className="md:text-4xl text-slate-100 text-4xl font-semibold md:!leading-[50px]">
            My Name is Fabian Tenzara
            </h2>
            <p className="text-gray-400 text-xl">
            I am very interested in Web, API & Automation development.
            </p>
            <p className="text-gray-400 text-xl">
            Currently, I am actively learning to hone my skills in JavaScript, TypeScript & Python programming languages.
            </p>
        </div>
        <div>
            {/* <img
            src="https://media.tenor.com/hVRhFeDFW6oAAAAi/anime-wave.gif"
            alt="wave"
            className="w-48 mx-auto my-3"
            /> */}
            <ZackCicakModel/>
        </div>
        </div>
    </section>
    </div>
  )
}
