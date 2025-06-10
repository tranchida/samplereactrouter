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
                    <img src="/rr_lockup_light.svg" alt="logo" className="w-45" />
                    <span className="text-white text-2xl font-bold">Sample</span>
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
                  to="/queues"
                  className={({ isActive }) => `text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${ isActive ? 'text-blue-600 dark:text-blue-300 font-semibold' : ''}`}
                >
                  Queues
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