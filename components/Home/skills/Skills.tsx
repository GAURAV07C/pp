import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>My Skills</SectionHeading>
      <div className='pt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
        {skillsData.map((skill) => {
          return <div key={skill.id}>
              <SkillCard skill={skill} />

          </div>
        })}

      </div>


      </div>
  )
}

export default Skills
