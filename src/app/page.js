import Link from "next/link";
import image from '../../public/img_pic.jpg'
import Image from "next/image";

export default function Home() {
  return (
<div>
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
          I am very interested in Web & API development.
        </p>
        <p className="text-gray-400 text-xl">
        Currently, I am actively learning to hone my skills in Javascript & TypeScript programming languages.
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

  <section className="py-2 rounded-md px-4">
  <div className="max-w-5xl mx-auto text-center lg:text-left">
    <div className="flex flex-col items-center">
      <h4 className="text-white font-semibold mb-3 text-xl">You can reach me at:</h4>
      <ul className="flex flex-row gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li>
          <Link href="https://github.com/tzrfabian" target="_blank" rel="noopener noreferrer" className="flex items-center text-center">
            <div className="flex items-center p-2.5 font-semibold text-sm text-gray-200 border border-white rounded-md hover:text-cyan-600 hover:bg-black hover:border-cyan-800 hover:translate-y-1 duration-200">
              <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              {"GitHub"}
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/fabiantenzara/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <div className="flex items-center p-2.5 font-semibold text-sm text-gray-200 border border-white rounded-md hover:text-cyan-600 hover:bg-black hover:border-cyan-800 hover:translate-y-1 duration-200">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2574f5" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            {"LinkedIn"}
          </div>
          </Link>
        </li>
        <li>
          <Link href="mailto:fabiantenzara@gmail.com" className="flex items-center">
          <div className="flex items-center p-2.5 font-semibold text-sm text-gray-200 border border-white rounded-md hover:text-cyan-600 hover:bg-black hover:border-cyan-800 hover:translate-y-1 duration-200">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="1.33em" height="1em" viewBox="0 0 256 193"><path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
            </svg>
            {"E-Mail"}
          </div>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</section>

  <section id="about" className="mt-40 mb-20 rounded-md px-4 py-12">
    <div className="grid md:grid-cols-2 justify-between items-center max-w-5xl mx-auto">
      <div className="max-md:text-center">
        <h2 className="md:text-4xl text-slate-100 text-4xl font-semibold md:!leading-[50px] mb-1">
          About Me 👾
        </h2>

        <hr className="border-gray-500 mb-4"/>
        
        <p className="text-gray-400 text-xl">
        {"My fullname is Muhammad Habib Fabian Tenzara, you can call me Fabian. I am a computer science graduate from Bina Nusantara University. I previously had an internship experience as a DevOps Engineer for 1 year. And I have just graduated from Hacktiv8's Full Stack Javascript intensive Bootcamp program and am looking to pursue a career as a Software/Web Developer."}
        </p>
      </div>
      <div>
        <Image
          src={image}
          alt="picture"
          className="w-60 mx-auto my-3 bg-gray-500 rounded-full"
        />
      </div>
    </div>
  </section>
</div>

  );
}
