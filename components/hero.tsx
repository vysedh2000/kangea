import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className='mb-16 mt-16 flex flex-col justify-center'>
        <h1 className='text-title text-primary block text-center font-bold'>
          Welcome to Job Cambodia
          <br />
          Your Gateway to Opportunities!
        </h1>

        <div className='mt-16 flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0'>
          <p className='text-description basis-1/3 pr-0 text-center sm:text-left md:basis-1/2 lg:pr-56'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='w-[400px] basis-1/2 md:w-[700px] md:basis-1/2'>
            <Image
              src='/img/hero-graphic.png'
              alt='hero-graphic'
              width={700}
              height={0}
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </>
  );
}
