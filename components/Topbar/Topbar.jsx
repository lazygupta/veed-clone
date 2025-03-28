import React from 'react'
import Cloud from '../Icons/Cloud'
import { Button, Input } from '@mantine/core'
import Undo from '../Icons/Undo'
import Redo from '../Icons/Redo'

const Topbar = (props) => {
    return (
        <div className='flex items-center w-full h-15 p-2'>
            <div className='m-6'>
              <Cloud/>  
            </div>
            
            <Button
                variant="light"
                radius="md"
                size="sm"
                className='ml-4'
            >
                {props.file_name}
            </Button>
            <div className='flex gap-3 ml-5'>
               <Undo/>
            <Redo/> 
            </div>
            
        </div>
    )
}

export default Topbar