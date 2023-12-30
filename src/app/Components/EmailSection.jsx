import React from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let&apos;s Connect
                </h5>
                <span className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as I can! Feel free to reach out to me at <a href = "mailto: dmamritesh@gmail.com" className='text-white'>dmamritesh@gmail.com</a>
                </span>
                <div className='socials flex flex-row gap-2 my-2'>
                    <Link href="https://github.com/amritesh-dasari">
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/amritesh-dasari">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            {/* <div>
                <form className='flex flex-col'>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block text-sm mb-2 font-medium'>
                            Your Email
                        </label>
                        <input type='email' id='email' required placeholder='dummy@email.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block text-sm mb-2 font-medium'>
                            Subject
                        </label>
                        <input type='text' id='subject' required placeholder='Opportunity Available!' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>
                            Your Message
                        </label>
                        <textarea name="message" id="message" placeholder="Let's connect regarding this opportunity!" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div>
                        <button type="submit" className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div> */}
        </section>
    )
}

export default EmailSection