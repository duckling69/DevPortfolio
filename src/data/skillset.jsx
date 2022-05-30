import React from 'react';
import {DiGitMerge} from 'react-icons/di';
import {DiNodejsSmall} from 'react-icons/di';
import {VscCode} from 'react-icons/vsc';

export default [
    {
        title: 'General Programming',
        icon: <VscCode className ='w-full h-full'/>,
        tech: ['C++','C','Python','Java','Data Structures','Algorithms','OS']
    },
    {
        title: 'Frontend Devleopment',
        icon: <DiGitMerge className ='w-full h-full'/>,
        tech: ['HTML','CSS','JavaScript','TailWind','React']
    },
    {
        title: 'Backend Development',
        icon: <DiNodejsSmall className ='w-full h-full'/>,
        tech: ['Firebase','NodeJs']
    }
]