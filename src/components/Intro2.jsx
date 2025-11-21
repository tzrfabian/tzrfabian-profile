import image from '../../public/img_pic.jpg'
import Image from "next/image";

export default function Intro2() {
  return (
    <div className='animate-fadeslidedown overflow-x-hidden'>
    <section id="about" className="lg:mt-48 mt-16 mb-10 rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-between items-center max-w-5xl mx-auto">
        <div className="max-md:text-center">
            <h2 className="md:text-4xl text-slate-100 text-4xl font-semibold md:!leading-[50px] mb-1">
            About Me 👾
            </h2>
              <hr className="border-gray-500 mb-4"/>

            {/* Mobile image - only visible on small screens */}
            <div className='block md:hidden mb-4'>
                <Image
                src={image}
                alt="picture"
                className="w-48 mx-auto my-3 bg-gray-500 rounded-full transition-transform transform hover:scale-105 duration-300"
                />
            </div>
            
            <p className="text-gray-400 text-lg">
            {"My fullname is Muhammad Habib Fabian Tenzara, you can call me Fabian. I am a person who can work in a team and like to try things that new for me, because the knowledge will definitely be useful someday, I am also interested in technological developments, especially such as computer components, video games, console, and mobile phones."}
            </p>
            
            {/* Work Experience */}
            <div className="mt-8 text-left">
              <h3 className="text-2xl text-slate-100 font-semibold mb-2">Work Experience</h3>
              <hr className="border-gray-500 mb-4"/>
              <div className="space-y-4 text-gray-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">Internal Developer — PT Agrodana Futures</div>
                    <div className="text-sm text-gray-400">Dec 2024 - Present</div>
                  </div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                    <li>Develop and maintain internal tools and automation to support trading operations.</li>
                    <li>Integrate internal systems and external APIs for better data flow and reporting.</li>
                    <li>Implement dashboards and monitoring to track system health and KPIs.</li>
                    <li>Improve developer workflows by building scripts and CI/CD automation.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">DevOps Intern — PT Phintraco Consulting</div>
                    <div className="text-sm text-gray-400">Feb 2022 - Feb 2023</div>
                  </div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                    <li>Maintained and improved CI/CD pipelines to streamline deployments.</li>
                    <li>Worked on infrastructure automation and configuration management.</li>
                    <li>Set up monitoring and alerting to improve reliability and visibility.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className='hidden md:block'>
            <Image
            src={image}
            alt="picture"
            className="w-60 mx-auto my-3 bg-gray-500 rounded-full transition-transform transform hover:scale-105 duration-300"
            />
        </div>
        </div>
    </section>
    </div>
  )
}
