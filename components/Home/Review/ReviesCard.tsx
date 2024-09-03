import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';


type Prop = {
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
    }
}

const ReviesCard = ({review}:Prop) => {
    const {image,review : clientReviews , rating , profession } = review
  return (
    <div className=' rounded-md overflow-hidden bg-[#140c1c]'>
        <div className='p-6'>
            <Image src="/images/q.png" alt="image" width={50} height={50} />
            <p className='text-white text-opacity-70' >{clientReviews}</p>
            <Image src="/images/q.png" alt="image" width={50} height={50}  className='ml-auto' />
        </div>
        <div className='px-6 py-3 mb-3 w-fit mx-auto  rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold'>
            <span>{rating}/5</span>
            <FaStar />

        </div>
        <div className='bg-gray-100 '>
            <div className='p-6 flex items-center scroll-px-6'>
                <Image src={image} alt={name} width={40} height={40} className='rounded-full' />
            </div>
            <div className=''>

            </div>
        </div>

    </div>
  )
}

export default ReviesCard
