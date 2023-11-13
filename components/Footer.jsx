import Link from 'next/link'
import React from 'react'
import { AiOutlineTwitter,AiFillInstagram,AiFillLinkedin,AiFillYoutube} from "react-icons/ai";


 


const Footer = () => {
  return (
    <>
    <div className='w-1/3 mx-auto text-white mb-16 mt-36'>
    <div className='  flex flex-row items-start justify-around '>
        <div className='basis-1/4 flex flex-col justify-around gap-2'>
          <h1 className='text-white font-roboto'>Resources</h1>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Docs</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Learn</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Showcase</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Blog</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Analytics</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Previews</h2></Link>
        </div>
        <div className='basis-1/4 flex flex-col justify-around gap-2'>
          <h1 className='text-white font-roboto'>More</h1>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Commerce</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Learn</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Contact Sales</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>GitHub</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Analytics</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Telemetry</h2></Link>
        </div>
        <div className='basis-1/4 flex flex-col justify-around gap-2'>
          <h1 className='text-white font-roboto'>Resources</h1>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>GitHub</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Twitter</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Showcase</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Previews</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Analytics</h2></Link>
        </div>
        <div className='basis-1/4 flex flex-col justify-around gap-2'>
          <h1 className='text-white font-roboto'>Resources</h1>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Docs</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Learn</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Showcase</h2></Link>
          <Link href='/'><h2 className='text-gray-400 hover:text-white font-sanSerif'>Blog</h2></Link>
        </div>
      </div>

      <div className='mt-16 flex flex-row gap-6'>
        <Link href='/'><AiOutlineTwitter className='w-8 h-8 text-gray-500 hover:text-white card-animation'></AiOutlineTwitter></Link>
        <Link href='/'><AiFillInstagram className='w-8 h-8 text-gray-500 hover:text-white card-animation'></AiFillInstagram></Link>
        <Link href='/'><AiFillLinkedin className='w-8 h-8 text-gray-500 hover:text-white card-animation'></AiFillLinkedin></Link>
        <Link href='/'><AiFillYoutube className='w-8 h-8 text-gray-500 hover:text-white card-animation'></AiFillYoutube></Link>
      </div>

    </div>
      
    </>
  )
}

export default Footer