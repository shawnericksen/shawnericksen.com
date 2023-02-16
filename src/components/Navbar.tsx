import React from "react";
import reactLogo from '../assets/react.svg'

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-5 text-xs">
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </a> */}
        <nav className='md:ml-auto md:mr-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center  text-white'>
          <a href="#home" className="ml-5 hover:text-indigo-500">
            Home
          </a>
          {/* <a href="#about" className="ml-5 hover:text-indigo-500">
            About
          </a>
          <a href="#work" className="ml-5 hover:text-indigo-500">
            Work
          </a>
          <a href="#contact" className="ml-5 hover:text-indigo-500">
            Contact
          </a> */}
          <a href="https://github.com/shawnericksen" target="_blank" className="flex items-center ml-5 hover:text-indigo-500">
            GitHub&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
