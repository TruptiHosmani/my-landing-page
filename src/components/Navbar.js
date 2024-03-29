// Example code for Navbar.js
import React, { useState } from 'react';

const Navbar = ({theme}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
      setIsOpen(!isOpen);
  };
  return (
  <header className={`absolute inset-x-0 top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href={`${process.env.PUBLIC_URL}/`} className="flex items-center">
          <span className="sr-only"></span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white p-2">Trupti's Portfolio</h1>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" onClick={handleToggle}  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href={`${process.env.PUBLIC_URL}/`} className="text-sm font-semibold leading-6 text-gray-900">Home</a>
        <a href={`${process.env.PUBLIC_URL}/`} className="text-sm font-semibold leading-6 text-gray-900">Projects</a>
        <a href={`${process.env.PUBLIC_URL}/pricing`} className="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
      <a href={`${process.env.PUBLIC_URL}/`} className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
      </div>
    </nav>
    <div className={`lg: ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#about" className="-m-1.5 p-1.5">
            <span className="sr-only">Trupti's Portfolio</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          <button type="button" onClick={handleToggle} className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href={`${process.env.PUBLIC_URL}/`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                <a href={`${process.env.PUBLIC_URL}/`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Products</a>
                <a href={`${process.env.PUBLIC_URL}/pricing`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Pricing</a>
                <a href={`${process.env.PUBLIC_URL}/`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  </header>
  );
};

export default Navbar;
