import { usePlaybackContext } from '@/FileContext/TogglePlayback'
import { IconRewindBackward5, IconStackBackward } from '@tabler/icons-react';
import { FastForward, Pause, Play } from 'lucide-react';
import React from 'react'
import Forward from '../Icons/Forward';
import Backward from '../Icons/Backward';

const BottomBar = () => {
    const { isPlaying, setIsPlaying } = usePlaybackContext();

    const handlePlayback = () => {
        setIsPlaying(!isPlaying);
    }
    return (
        <div className='h-42'>
            <div className='flex h-1/2 justify-center items-center shadow-2xl border-1 border-gray-300'>
            <Backward/>
                <button
                    onClick={handlePlayback}
                    className="p-2 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <Forward/>
            </div>
            <div className='h-1/2 '>
                Timestamp
            </div>
        </div>

    )
}

export default BottomBar