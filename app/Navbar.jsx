"use client"
import Link from 'next/link';
import React, {Fragment} from 'react';
import  { useState } from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/solid';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

 
  return (
    <div>
      <nav className=" backdrop-sepia-0 backdrop-blur-lg bg-white/40 px-8 h-20 top-0 left-0 w-full justify-between items-center fixed z-10 bg-black flex flex-row text-white shadow">
      <div className='container m-auto flex justify-between items-center text-white'>

      {/* <img src= "https://img.freepik.com/free-vector/gradient-code-logo-template_23-2148825387.jpg?size=626&ext=jpg" alt='logo' className='absolute h-[32px] w-[124px]'/> */}

      <Link href='/' className="py-4 text-xl text-black font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-[40px]">ClimateGradient</Link>

      <ul className="hidden md:flex items-center text-base font-semi-bold cursor-pointer">
          <li>
            <Link href='/' className="text-white font-semibold py-4 mx-8">Home</Link>
          </li>

          <li>

          <Menu as="div" className="relative inline-block text-left mx-8">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Discover
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="co2/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  CO2
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Temprature/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Global Temperature
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Sealevel/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sea Level
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href=" Methane/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                     Methane
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Uppera/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                     Upper Atmosphere
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Oceanw/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                     Ocean Warming
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

          </li>

          {/* <li  className={`option dropdown ${isDropdownVisible ? 'active' : ''}`}
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
            onClick={toggleDropdown}>
            <div className="dropdown-toggle hover:bg-gray-300 py-4 px-6" style={{ cursor: 'pointer' }}>
              Discover {isDropdownVisible ? '›' : '›'}
            </div>
            {isDropdownVisible && (
              <ul className={`dropdown-menu list-none pl-0 ${isDropdownVisible ? 'visible' : ''} flex flex-co`}>
                <li>
                  <Link href="co2/" className="dropdown-item text-white">CO2</Link>
                </li>
                <li>
                  <Link href="Temprature/" className="dropdown-item text-blue-500">Global Temperature</Link>
                </li>
                <li>
                  <Link href="Sealevel/" className="dropdown-item text-white">Sea Level</Link>
                </li>
                <li>
                  <Link href="Methane/" className="dropdown-item text-white">Methane</Link>
                </li>
                <li>
                  <Link href="Uppera/" className="dropdown-item text-white">Upper Atmosphere</Link>
                </li>
                <li>
                  <Link href="Oceanw/" className="dropdown-item text-white">Ocean Warming</Link>
                </li>
              </ul>
            )}
          </li> */}
          <li>
              <Link href="About/"className="text-black font-semibold dropdown-item text-white py-4 mx-8">About</Link>
              </li>
        </ul>

    </div>

    </nav>
    </div>
  );
};

export default Navbar;
