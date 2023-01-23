import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid"
function Nav () {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
              <a className="ml-3 text-xl" href="#about">Niche Stitch Co.</a>
            </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#skills" className="mr-5 text-white hover:text-slate-400">Patterns</a>
            <a href="#projects" className="mr-5 text-white hover:text-slate-400">Shop</a>
          </nav>
          <a href="#contact" className="inline-flex text-white items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            More
            <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
            </div>
         
        </header>
    )
};

export default Nav;