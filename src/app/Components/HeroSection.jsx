"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400'>Hello, I&apos;m{" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                'Mohan Amritesh',
                1000,
                'Distributed Systems Dev',
                1000,
                'Backend Developer',
                1000,
                'Flutter Developer',
                1000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mt-4 mb-6 lg:text-xl'>
            I&apos;m ingesting new knowledge and leveling up my skills by pulling lessons asynchronously from the Kafka queue of experience.
          </p>
          <div>
            <Link href="mailto:dmamritesh@gmail.com" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white'>
              Hire Me
            </Link>
            <Link href="https://drive.google.com/file/d/1dP1FSCjf-r2i0wrMjxGXeQhl7oUtPDuQ/view?usp=sharing">
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-800 text-white mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
              </button>
            </Link>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-clip'>
            <Image src="/images/Himemoji.png"
              alt='Hi Memoji'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection