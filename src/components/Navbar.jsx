import Link from "next/link"

export default function Navbar() {
  return (
    <div>
        <nav className="block w-full max-w-screen px-4 py-2 mx-auto text-white bg-slate-900 shadow-md  lg:px-8 lg:py-6 ">
            <div className="container flex flex-wrap items-center justify-around mx-auto text-gray-100">
                <Link
                href="/"
                className="mr-4 text-3xl block cursor-pointer py-1.5text-gray-200 font-semibold hover:text-emerald-500 duration-200"
                >
                Fabian Tenzara
                </Link>
                <div className="hidden lg:block">
                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="flex items-center p-1 font-semibold text-xl gap-x-2 text-gray-200 hover:text-cyan-600 duration-200">
                    <Link href="/projects" className="flex items-center">
                        Projects
                    </Link>
                    </li>
                    <li className="flex items-center p-1 font-semibold text-xl gap-x-2 text-gray-200 hover:text-cyan-600 duration-200">
                    <a href="/#about" className="flex items-center">
                        About
                    </a>
                    </li>
                    <li>
                    <Link href="https://drive.google.com/file/d/1F7wRzJn0qRMLgwPqb7eXERc8YiaxR6HB/view" className="flex items-center">
                        <div className="flex items-center p-2.5 font-semibold text-xl gap-x-2 text-gray-200 border border-white rounded-md hover:text-cyan-600 hover:bg-black hover:border-cyan-800 duration-200">
                            Resume
                        </div>
                    </Link>
                    </li>
                </ul>
                </div>
                <button
                className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                type="button"
                >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                </span>
                </button>
            </div>
        </nav>
    </div>
  )
}
