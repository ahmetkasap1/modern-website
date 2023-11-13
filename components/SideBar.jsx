import Link from 'next/link'
import React from 'react'

const SideBar = () => {
    return (
        <div className='bg-black'>
            <h1 className='font-roboto text-7xl text-white text-edit w-1/2 mx-auto text-center mt-36'>Lorem Ipsum is Simply Dummy Text Of The Printing </h1>

            <div className='flex flex-col items-center justify-center mt-8 w-1/3 mx-auto bg-black'>

                <p className='text-gray-300 font-sanSerif text-center indent-4 text-paragraph text-lg  mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type spec
                </p>
                <p className='text-gray-300 font-sanSerif text-center indent-4 text-paragraph text-lg  mt-8'>It is a long established fact that a reader will be distracted by the readable
                 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here', making it look like readable English. Many desktop publishing packages and web 
                </p>

                <Link href='/' className='text-black font-roboto text-2xl p-5 bg-white hover:bg-black hover:text-white border-2 rounded-2xl mt-8'>Learn More</Link>
            </div>
        </div>
    )
}

export default SideBar