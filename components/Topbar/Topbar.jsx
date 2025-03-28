"use client"

import React, { useState } from 'react'
import Cloud from '../Icons/Cloud'
import { } from '@mantine/core'
import Undo from '../Icons/Undo'
import Redo from '../Icons/Redo'
import { useFileContext } from '@/FileContext/FileContext'
import Search from '../Icons/Search'
import Question from '../Icons/Question'
import Upgrade from '../Icons/Upgrade'
import Done from '../Icons/Done'

const Topbar = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { fileName, setFileName } = useFileContext();

    const handleInputChange = (e) => {
        setFileName(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };
    return (
        <div className='flex items-center w-full h-15 p-2'>
            <div className='ml-5'>
                <Cloud />
            </div>

            <div className="ml-4 max-w-[200px]">
                {isEditing ? (
                    <input
                        type="text"
                        value={fileName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        autoFocus
                        className="p-2 w-full rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ) : (
                    <button
                        className="max-w-full truncate transition-all delay-100 duration-200 cursor-text p-2 rounded-xl text-black hover:bg-[#eaecff] hover:text-black"
                        onClick={() => setIsEditing(true)}
                    >
                        {fileName}
                    </button>
                )}
            </div>

            <div className='flex gap-3 ml-5'>
                <Undo />
                <Redo />
            </div>
            <div className=' w-full flex justify-between items-center gap-5 ml-15'>
                <div className='flex gap-4'>
                    <div className='flex gap-5'>
                        <Search />
                        <Question />
                    </div>

                    <div className='text-nowrap text-gray-600 text-xs'>
                        Save your project for later - <span className='text-blue-400 underline'>sign up</span> or <span className='underline text-blue-400'>log in</span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-end gap-4 items-end'>
                        <div className='text-white gap-4 bg-[#ffa319] rounded-xl'>
                            <Upgrade label="Upgrade" />
                        </div>
                        <div className='text-white gap-4 bg-blue-500 rounded-xl'>
                            <Done />
                        </div>

                    </div>
                </div>




            </div>


        </div>
    )
}

export default Topbar