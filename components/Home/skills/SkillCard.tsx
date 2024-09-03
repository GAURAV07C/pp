import Image from 'next/image';
import React from 'react'

type Prop ={
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}

const SkillCard = ({skill}:Prop) => {
    const {image, percent , title} = skill;
  return (
    <div className='p-6  hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg '>
        <Image src={image} alt={title} width={80} height={80} className=' object-cover mx-auto' />
        <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
        <div className='bg-black mt-4 rounded-lg p-2 text-white opacity-40'>{percent}</div>

        </div>
  )
}

export default SkillCard
