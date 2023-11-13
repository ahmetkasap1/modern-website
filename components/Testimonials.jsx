import Link from 'next/link';
import React from 'react'
import { ImQuotesLeft } from 'react-icons/im';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Testimonials = () => {
  return (

    <div className='bg-white'>
      <hr className='text-black mt-16 '></hr>

      <div className='w-1/2 mx-auto mt-16 flex flex-row justify-between items-center'>
        <h1 className='text-5xl font-roboto text-black '>Client testimonials</h1>

        <div className='flex flex-row '>
          <button className='border-2 ml-8 hover:border-gray-500  p-4 rounded-lg bg-black hover:bg-white hover:text-black text-white'><AiOutlineArrowLeft className=' w-8 h-8'></AiOutlineArrowLeft></button>
          <button className='border-2 ml-8 hover:border-gray-500  p-4 rounded-lg bg-black hover:bg-white hover:text-black text-white'><AiOutlineArrowRight className=' w-8 h-8'></AiOutlineArrowRight></button>
        </div>
      </div>


      <div className='flex flex-row w-1/2 mx-auto mt-8 gap-8 '>
        <div className='basis-1/2  rounded-2xl border-2 p-4 drop-shadow-4xl backdrop-brightness-100 mb-16 card-animation'>
          <ImQuotesLeft className='w-12 h-12 mt-4 ml-4 mr-4 text-black'></ImQuotesLeft>
          <p className='font-sanSerif text-lg text-black mt-4 text-paragraph indent-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap </p>
          <p className='font-roboto text-lg text-black mt-8 '>Joen Doe</p>
        </div>

        <div className='basis-1/2  rounded-2xl border-2 p-4 drop-shadow-4xl backdrop-brightness-100 mb-16 card-animation'>
          <ImQuotesLeft className='w-12 h-12 mt-4 ml-4 mr-4 text-black'></ImQuotesLeft>
          <p className='font-sanSerif text-black mt-4 text-paragraph indent-3 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap </p>
          <p className='font-roboto text-lg text-black mt-8 '>Micheal</p>
        </div>
      </div>
      <div className='w-1/2 mx-auto '>
        <button className='w-full mx-auto  text-center border-2 text-xl hover:border-gray-500  p-4 rounded-lg bg-black hover:bg-white hover:text-black text-white mb-8'> Browse all testimonials </button>
      </div>


    </div>
  )
}

export default Testimonials