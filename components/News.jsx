import React from 'react'
import Image from 'next/image'

const News = () => {
  return (
    <div className='bg-white'>
      <div className=' bg-white h-36'></div>
      
      <div className='w-1/2 mx-auto flex flex-row items-start justify-evenly gap-32 mb-32'>
        <div className='flex flex-col w-auto'>
          <h1 className='text-5xl font-roboto text-edit'>Lorem ipsum dolor adipisicing future of estate</h1>
          <p className='text-lg text-paragraph text-gray-500 font-sanSerif mt-6'>Dedicated to the future of estate agency, Estate Agency X comprises of events and podcasts with leading local and international speakers, an Academy, Innovation & Growth Programme, and a community of like-minded estate agents, just like you, sharing ideas.</p>
          <button className='p-4 bg-black text-white hover:bg-white hover:text-black border-2 border-gray-500 rounded-xl font-roboto text-lg mt-8'>Browse</button>
        </div>
        <Image width={500} height={500} src='/card2.jpg' className='rounded-lg  shadow-lg shadow-gray-600' ></Image>
      </div>

      <div className='w-1/2 mx-auto flex flex-row items-start justify-evenly gap-32 mb-32'>
        <div className='flex flex-col w-auto'>
          <h1 className='text-5xl font-roboto text-edit'>There are many variations of passages of Lorem</h1>
          <p className='text-lg text-paragraph text-gray-500 font-sanSerif mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione explicabo animi, temporibus consectetur 
          harum placeat qui tempore commodi neque distinctio impedit libero velit possimus reprehenderit modi? Nemo necessitatibus voluptas voluptate!</p>
          <button className='p-4 bg-black text-white hover:bg-white hover:text-black border-2 border-gray-500 rounded-xl font-roboto text-lg mt-8'>Browse</button>
        </div>
        <Image width={500} height={500} src='/card1.jpg' className='rounded-lg  shadow-lg shadow-gray-600' ></Image>
      </div>

      <div className='w-1/2 mx-auto flex flex-row items-start justify-evenly gap-32 mb-32'>
        <div className='flex flex-col w-auto'>
          <h1 className='text-5xl font-roboto text-edit'>Contrary to popular belief, Lorem Ipsum</h1>
          <p className='text-lg text-paragraph text-gray-500 font-sanSerif mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione explicabo animi, temporibus consectetur 
          harum placeat qui tempore commodi neque distinctio impedit libero velit possimus reprehenderit modi? Nemo necessitatibus voluptas voluptate!</p>
          <button className='p-4 bg-black text-white hover:bg-white hover:text-black border-2 border-gray-500 rounded-xl font-roboto text-lg mt-8'>Browse</button>
        </div>
        <Image width={500} height={500} src='/card3.jpg' className='rounded-lg  shadow-lg shadow-gray-600' ></Image>
      </div>

      <div className=' bg-white h-2  '></div>
    </div>
  )
}

export default News