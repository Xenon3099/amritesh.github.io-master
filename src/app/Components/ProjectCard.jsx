import React from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({ title, description }) => {
    return (
        <div>
            {/* <div className='h-52 md:h-72' style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
            </div> */}
            <div className='text-white h-52 md:h-72 rounded-t-xl rounded-b-xl bg-[#181818] py-6 px-4'>
                <h3 className='font-xl font-semibold mb-2'>{title}</h3>
                <p className='text-[#ADB7BE]'>{description}</p>
                <div className='top-0 left-0'>
                    <Link href="/" className='h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white'>
                        <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:border-white' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard