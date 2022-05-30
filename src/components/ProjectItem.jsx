import React from 'react'
function ProjectItem({title,imageurl,tech}) {
  return (
    <div className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hiddens hover:-translate-y-2 hover:bg-slate-200 dark:hover:bg-slate-700 trans'>
        <img src={imageurl} alt={title} className="w-full h-36 md-48 object-cover" />
        <div className='text-gray-600 dark:text-gray-300 p-5 w-full'>
           <h3 className='trans text-lg md-text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
           <p className='trans flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm '>
                {tech.map(item=>(
                    <span key={item}
                    className=" trans inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md text-md text-gray-600 dark:text-gray-300">
                    {item}
                    </span>
                ))}
           </p>
        </div>
    </div>
  )
}

export default ProjectItem