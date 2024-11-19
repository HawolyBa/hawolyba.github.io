
import Link from 'next/link'


const Header = () => {

  return (
    <header className="top-0 left-0 fixed hidden lg:block">
      <div className=" md:w-1/4 lg:w-1/5 xl:w-1/6 min-w-[300px] border-zinc-900 border-r h-screen">
        <div className="relative text-center py-16 bg-gradient-to-r from-green-400 via-teal-500 to-green-700 text-white">
          <h1 className="text-4xl sm:text-3xl lg:text-3xl font-extrabold tracking-wide uppercase">
            Hawoly Ba
          </h1>
          <span className="block mt-4 text-lg sm:text-xl text-gray-200 font-medium">
            Développeuse Web
          </span>

          {/* Décorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-50 absolute top-10 left-10 animate-pulse"></div>
            <div className="w-32 h-32 bg-teal-400 rounded-full blur-3xl opacity-50 absolute bottom-10 right-10 animate-pulse"></div>
          </div>
        </div>

        {/* <div className="w-full h-48 bg-emerald-500 flex flex-col items-center justify-center">
          <h1 className="uppercase text-lg">Hawoly Ba</h1>
          <h2>Développeuse Web</h2>
        </div> */}
        <div className="py-8 px-4 flex flex-col h-full">
          <ul>
            <li className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800">
              <Link href="#about">
                {/* <MessageOutlined style={{ color: '#14d9a2' }} /> */}
                <span className="ml-3 font-thin">À propos</span>
              </Link>
            </li>
            <li className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800">
              <Link href="#portfolio">
                {/* <ReadOutlined style={{ color: '#14d9a2' }} /> */}
                <span className="ml-3 font-thin">Portfolio</span>
              </Link>
            </li>
            <li className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800">
              <Link href="#skills">
                {/* <StrikethroughOutlined style={{ color: '#14d9a2' }} /> */}
                <span className="ml-3 font-thin">Compétences</span>
              </Link>
            </li>
            <li className="p-4 mb-4 flex items-center justify-center rounded-lg shadow-2xl border-emerald-800 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-emerald-300 hover:text-zinc-800">
              <Link href="#contact">
                {/* <MailOutlined style={{ color: '#14d9a2' }} /> */}
                <span className="ml-3 font-thin">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header