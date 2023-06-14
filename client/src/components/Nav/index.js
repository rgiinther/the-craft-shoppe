import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid"
function Nav () {
    return (
        <header className="bg-blue-400 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
              <a className="ml-3 text-xl text-center" href="#about">North Shore Fibre Company</a>
            </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              {/*drop down menu */}
              <label>
                <select className='inline-flex text-white items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                  <option value= "Yarn"> Yarn</option>
                  <option value = "Lace">Lace</option>
                  <option value = "Fingering">Fingering</option>
                  <option value = "DK"> DK</option>
                  <option value = "Sport">Sport</option>
                  <option value = "Worsted">Worsted</option>
                </select>
              </label>
              <label>
                <select className='inline-flex text-white items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                  <option value= "Yarn"> Patterns</option>
                  <option value = "Lace">Socks</option>
                  <option value = "Fingering">Sweaters</option>
                  <option value = "DK"> Hats</option>
                  <option value = "Sport">Scarves</option>
                </select>
              </label>
              <button className='inline-flex text-white items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                Shop</button>
      
  
          </nav>
          <a href="#contact" className="inline-flex text-white items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            About
            <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
            </div>
         
        </header>
    )
};

export default Nav;