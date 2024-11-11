import image from '../../public/img_pic.jpg'
import Image from "next/image";

export default function Intro2() {
  return (
    <div>
    <section id="about" className="mt-40 mb-20 rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-between items-center max-w-5xl mx-auto">
        <div className="max-md:text-center">
            <h2 className="md:text-4xl text-slate-100 text-4xl font-semibold md:!leading-[50px] mb-1">
            About Me 👾
            </h2>

            <hr className="border-gray-500 mb-4"/>
            
            <p className="text-gray-400 text-lg">
            {"My fullname is Muhammad Habib Fabian Tenzara, you can call me Fabian. I am a computer science graduate from Bina Nusantara University. I previously had an internship experience as a DevOps Engineer for 1 year. And I have just graduated from Hacktiv8's Full Stack Javascript intensive Bootcamp program and am looking to pursue a career as a Software/Web Developer."}
            </p>
        </div>
        <div>
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
