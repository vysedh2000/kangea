import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default function Home() {
  return (
    <>
      <div className='m-auto w-[90%]'>
        <Hero></Hero>
      </div>
    </>
  );
}
