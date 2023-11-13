import React from 'react'
import { AiFillStop,AiFillFire,AiFillPieChart } from 'react-icons/ai';



const Changing = () => {
  
  return (
    <>
        <hr className='text-black mt-16'></hr>

      <div className='w-4/5 mx-auto mt-16'>
        <h1 className='font-roboto text-white text-5xl text-center '> We're changing the Lorem İpsum </h1>

        <div className='flex flex-row justify-center gap-4 mt-8 '>
          <div className='w-96 rounded-lg border-2 border-gray-700 hover:border-gray-500 card-animation'>
              <AiFillStop className='w-12 h-12 text-white ml-8 mr-8 mt-2' ></AiFillStop>
              <h1 className='text-white text-2xl font-roboto ml-8 mr-8 mt-4'>Transforming</h1>
              <p className='text-white font-sanSerif m-8'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
              </p>
          </div>
          <div className='w-96 rounded-lg border-2 border-gray-700 hover:border-gray-500 card-animation' >
              <AiFillPieChart className='w-12 h-12 text-white ml-8 mr-8 mt-2' ></AiFillPieChart>
              <h1 className='text-white text-2xl font-roboto ml-8 mr-8 mt-4 text-paragraph'>Empowering</h1>
              <p className='text-white font-sanSerif m-8 text-paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc

              </p>
          </div>
          <div className='w-96 rounded-lg border-2 border-gray-700 hover:border-gray-500 card-animation'>
              <AiFillFire className='w-12 h-12 text-white ml-8 mr-8 mt-2' ></AiFillFire>
              <h1 className='text-white text-2xl font-roboto ml-8 mr-8 mt-4'>Achieving</h1>
              <p className='text-white font-sanSerif m-8 text-paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc

              </p>
          </div>  
        </div>
        <div className='flex flex-row justify-center gap-4 mt-8 '>
          <div className='w-96 rounded-lg border-2 border-gray-700 hover:border-gray-500 card-animation'>
              <AiFillStop className='w-12 h-12 text-white ml-8 mr-8 mt-2' ></AiFillStop>
              <h1 className='text-white text-2xl font-roboto ml-8 mr-8 mt-4'>Transforming</h1>
              <p className='text-white font-sanSerif m-8'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
              </p>
          </div>
          <div className='w-96 rounded-lg border-2 border-gray-700 hover:border-gray-500 card-animation' >
              <AiFillPieChart className='w-12 h-12 text-white ml-8 mr-8 mt-2' ></AiFillPieChart>
              <h1 className='text-white text-2xl font-roboto ml-8 mr-8 mt-4 text-paragraph'>Empowering</h1>
              <p className='text-white font-sanSerif m-8 text-paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc

              </p>
          </div>
          <div className='w-96 rounded-lg border-2 border-gray-700 hover:border-gray-500 card-animation'>
              <AiFillFire className='w-12 h-12 text-white ml-8 mr-8 mt-2' ></AiFillFire>
              <h1 className='text-white text-2xl font-roboto ml-8 mr-8 mt-4'>Achieving</h1>
              <p className='text-white font-sanSerif m-8 text-paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc

              </p>
          </div>  
        </div>
      </div>
                 
    </>
  )
}

export default Changing