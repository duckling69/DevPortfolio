import React from 'react'

function SkillsTitle({children,id}) {
  return (
    <h1 id={id && id}
    className='text-3xl font-bold mb-5 w-40 text-indigo-600 dark:text-indigo-500'>
        {children}
    </h1>
  )
}

export default SkillsTitle