import React from 'react';
import { DiGitMerge } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { FaDocker } from "react-icons/fa"

export default [
    {
        title: 'General Programming',
        icon: <VscCode className='w-full h-full' />,
        tech: ['C++', 'C', 'Python', 'Java', "Golang", 'Data Structures', 'Algorithms', 'OS', "Git", "GitHub"]
    },
    {
        title: 'Frontend Devleopment',
        icon: <DiGitMerge className='w-full h-full' />,
        tech: ['HTML', 'CSS', 'JavaScript', 'TailWind', 'React', "Material UI"]
    },
    {
        title: 'Backend Development',
        icon: <DiNodejsSmall className='w-full h-full' />,
        tech: ['Firebase', 'NodeJs', "Golang", "MongoDB", "MySQL", "PostgreSQL", "ExpressJs", "GraphQL", "REST API"]
    },
    {
        title: 'DevOps',
        icon: <FaDocker className='w-full h-full' />,
        tech: ["Docker", "Kubernetes", "ci/cd"]
    }
]