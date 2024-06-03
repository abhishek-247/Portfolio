import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
           

        
        <div className='h-full w-full'>

            <div className='flex bg-white justify-between  items-center mt-4 '>
                <h2 className='text-xl font-bold '>lucaDCZ <span className='text-sky-600 text-4xl'>.</span></h2>
                <ul className='hidden justify-between items-center gap-12 text-1xl font-bold sm:flex '>
                    <li className='text-sky-600'>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                </ul>
                {/* <div className=' bg-black rounded-lg'> */}
                    <Image
                        src="/sms.svg"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                        className='bg-black border rounded-full sm:flex-col'
                    />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Navbar
