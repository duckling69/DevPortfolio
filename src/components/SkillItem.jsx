import React from 'react'
import './styles/styles.css';
function SkillItem({title,icon,tech}) {
  return (
    <div className=' bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
    hover:-translate-y-2 p-5 trans rounded-md hover:tran'>
        <div className='trans text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
            {icon}
        </div>
        <h1 className='trans font-semibold text-lg text-gray-600 dark:text-gray-200
        mb-1'>{title}</h1>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm '>
            {tech.map(items=>(
            <span className="trans inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md text-md text-gray-600 dark:text-gray-300">{items}</span>
        )) }
        </p>
    </div>
  )
}

export default SkillItem
//