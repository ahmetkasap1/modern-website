import Link from 'next/link'
import React from 'react'
import Image from 'next/image'




const Navbar = () => {
  return (
    <>
      <nav className='flex flex-row items-center justify-evenly w-4/5 mx-auto mt-16  '>
        <div className='basis-1/12 ml-32'>
            <Image src="/logo.png" alt='logo' width={70} height={70} className=''/> 
        </div>

        <div className='basis-auto '>
            <ul className='flex  flex-row gap-6 mr-16'>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>Home</li></Link>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>Lifesycle</li></Link>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>Neouron</li></Link>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>Future</li></Link>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>News</li></Link>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>About Us</li></Link>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>Careers</li></Link>
                <Link href='/' className='text-white text-lg hover:text-gray-500 font-roboto'><li>Careers</li></Link>
            </ul>
        </div>
        <div className='basis-2/12'>
            <Link href='/' className='text-black font-roboto text-xl p-3 bg-white hover:bg-black hover:text-white border-2 rounded-2xl'>Contact Us</Link>
        </div>

      </nav>

    </>
  )
}

export default Navbar