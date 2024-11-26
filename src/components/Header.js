
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { GoMail } from "react-icons/go";

const Header = ({ changePage }) => {

  return (
    <>
      <header className="bg-[#121212] top-0 left-0 h-screen hidden lg:block">
        <div className=" md:w-1/4 lg:w-1/5 xl:w-1/6 min-w-[300px] border-zinc-900 border-r h-screen">
          <div className="relative text-center py-16 bg-gradient-to-r from-green-400 via-teal-500 to-green-700 text-white">
            <h1 className="text-4xl sm:text-3xl lg:text-3xl font-extrabold tracking-wide uppercase">
              Hawoly Ba
            </h1>
            <span className="block mt-4 text-lg sm:text-xl text-gray-200 font-medium">
              Développeuse Web
            </span>

            <div className="absolute inset-0 pointer-events-none">
              <div className="w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-50 absolute top-10 left-10 animate-pulse"></div>
              <div className="w-32 h-32 bg-teal-400 rounded-full blur-3xl opacity-50 absolute bottom-10 right-10 animate-pulse"></div>
            </div>
          </div>

          {/* <div className="w-full h-48 bg-emerald-500 flex flex-col items-center justify-center">
          <h1 className="uppercase text-lg">Hawoly Ba</h1>
          <h2>Développeuse Web</h2>
        </div> */}
          <div className="py-8 px-4 flex flex-col">
            <ul>
              <li onClick={() => changePage('about')} className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
                <a href="#about" >
                  <div className="flex items-center">
                    <IoChatbubblesOutline style={{ color: '#14d9a2', fontSize: 18 }} />
                    <span className="ml-3 font-thin">À propos</span>
                  </div>
                </a>
              </li>
              <li onClick={() => changePage('portfolio')} className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
                <a href="#portfolio" >
                  <div className="flex items-center">
                    <MdOutlineDesignServices style={{ color: '#14d9a2', fontSize: 18 }} />
                    <span className="ml-3 font-thin">Portfolio</span>
                  </div>
                </a>
              </li>
              <li onClick={() => changePage('skills')} className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
                <a href="#skills" >
                  <div className="flex items-center">
                    <AiOutlineStrikethrough style={{ color: '#14d9a2', fontSize: 18 }} />
                    <span className="ml-3 font-thin">Compétences</span>
                  </div>
                </a>
              </li>
              <li onClick={() => changePage('contact')} className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
                <a href="#contact">
                  <div className="flex items-center">
                    <GoMail style={{ color: '#14d9a2', fontSize: 18 }} />
                    <span className="ml-3 font-thin">Contact</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <header className="block items-center lg:hidden absolute z-20 p-4 text-xs">
        <ul className="flex gap-4">
          <li onClick={() => changePage('about')} className="p-2 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
            <a href="#about" >
              <div className="flex items-center">
                <IoChatbubblesOutline style={{ color: '#14d9a2', fontSize: 18 }} />
                <span className="ml-3 font-thin">À propos</span>
              </div>
            </a>
          </li>
          <li onClick={() => changePage('portfolio')} className="p-2 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
            <a href="#portfolio" >
              <div className="flex items-center">
                <MdOutlineDesignServices style={{ color: '#14d9a2', fontSize: 18 }} />
                <span className="ml-3 font-thin">Portfolio</span>
              </div>
            </a>
          </li>
          <li onClick={() => changePage('skills')} className="p-2 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
            <a href="#skills" >
              <div className="flex items-center">
                <AiOutlineStrikethrough style={{ color: '#14d9a2', fontSize: 18 }} />
                <span className="ml-3 font-thin">Compétences</span>
              </div>
            </a>
          </li>
          <li onClick={() => changePage('contact')} className="p-2 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800 cursor-pointer">
            <a href="#contact">
              <div className="flex items-center">
                <GoMail style={{ color: '#14d9a2', fontSize: 18 }} />
                <span className="ml-3 font-thin">Contact</span>
              </div>
            </a>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header