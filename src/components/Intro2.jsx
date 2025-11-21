import image from '../../public/img_pic.jpg'
import Image from "next/image";
import ExpEdu from './ExpEduSection';

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

        </div>
        <div className='hidden md:block'>
            <Image
            src={image}
            alt="picture"
            className="w-60 mx-auto my-3 bg-gray-500 rounded-full transition-transform transform hover:scale-105 duration-300"
            />
        </div>
        {/* Border */}
          <ExpEdu/>
        </div>
    </section>
    </div>
  )
}
