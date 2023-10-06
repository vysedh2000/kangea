import React from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import NavBarItem from './navbarItem';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className='bg-primary-color w-full'>
        <div className='m-auto flex h-[100px] w-[90%] items-center justify-between text-white'>
          <div className='w-[141px]'>
            <Image
              src='/img/kanhea-logo.png'
              width={141}
              height={79}
              alt='kanhea-logo'
            />
          </div>
          <div className='flex items-center justify-center gap-16'>
            <NavBarItem></NavBarItem>
            <ul>
              <li className='grid place-items-center'>
                <button
                  type='button'
                  className='bg-button rounded-md px-6 py-3 text-xl font-bold shadow-sm'
                >
                  <Link href='/add-job'>Post Job</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
