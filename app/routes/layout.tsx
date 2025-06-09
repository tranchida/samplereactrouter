import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router";
import { Link, Outlet } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {

    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      }
    }, []);
  
    const toggleDarkMode = () => {
      setIsDark(!isDark);
      if (!isDark) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    };

    return (
        <div className="w-full min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-200">
        <Toaster />
        <nav className="bg-blue-500 dark:bg-blue-900 shadow-md">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14">
              <div className="flex items-center">
                <Link to="/">
                  <div className="flex items-center space-x-2">
                    <svg className="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z" fill="#00DC82" />
                    </svg>
                    <span className="text-white text-2xl font-bold">VueJS Sample</span>
                  </div>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <button onClick={toggleDarkMode} className="p-2 rounded-lg text-white hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-200">
                  {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  )}
                </button>
                <nav>
                <NavLink
                  to="/"
                  className={({ isActive }) => `text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${ isActive ? 'text-blue-600 dark:text-blue-300 font-semibold' : ''}`}
                  
                >
                  Home
                </NavLink>
                <NavLink
                  to="/admin"
                  className={({ isActive }) => `text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${ isActive ? 'text-blue-600 dark:text-blue-300 font-semibold' : ''}`}
                >
                  Admin
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${ isActive ? 'text-blue-600 dark:text-blue-300 font-semibold' : ''}`}
                >
                  About
                </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Outlet/>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 mt-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                © 2025 SampleNextJS. Tous droits réservés.
              </div>
              <div className="flex space-x-4">
                <a href="https://x.com/gtranchida" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  <span className="sr-only">X</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 300 271">
                    <path fillRule="evenodd" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://github.com/tranchida/nuxttest" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}