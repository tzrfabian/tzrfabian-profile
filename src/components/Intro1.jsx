import React from 'react'

export default function Intro1() {
  return (
    <div className='animate-slideinright'>
    <section className="lg:mt-28 mt-5 rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-between items-center max-w-5xl mx-auto">
        <div className="max-md:text-center">
            <h2 className="md:text-4xl text-slate-100 text-4xl font-semibold md:!leading-[50px] mb-2">
            Hi there! 👋
            </h2>
            <h2 className="md:text-4xl text-slate-100 text-3xl font-semibold md:!leading-[50px]">
            My Name is Fabian Tenzara
            </h2>
            <p className="text-gray-400 text-xl lg:mt-4 mt-2">
            I am very interested in Web, API & Automation development.
            </p>
            <p className="text-gray-400 text-xl">
            Currently, I am actively learning to hone my skills in JavaScript, TypeScript & Python programming languages.
            </p>
        </div>
        <div>
            <img
            src="https://media.tenor.com/hVRhFeDFW6oAAAAi/anime-wave.gif"
            alt="wave"
            className="w-48 mx-auto my-3"
            />
        </div>
        </div>
    </section>
    </div>
  )
}
