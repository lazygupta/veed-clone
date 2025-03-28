import { usePlaybackContext } from '@/FileContext/TogglePlayback'
import { IconRewindBackward5, IconStackBackward } from '@tabler/icons-react';
import { FastForward, Heart, Pause, Play } from 'lucide-react';
import React from 'react'
import Forward from '../Icons/Forward';
import Backward from '../Icons/Backward';
import { useTimeContext } from '@/FileContext/TimeContext';
import Timeline from '../Timeline/Timeline';

const BottomBar = () => {
    const { isPlaying, setIsPlaying } = usePlaybackContext();

    const { currentTime, duration } = useTimeContext();

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        const milliseconds = Math.floor((timeInSeconds % 1) * 10);

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${milliseconds}`;
    };

    const handlePlayback = () => {
        setIsPlaying(!isPlaying);
    }
    return (
        <div className='h-42 bg-white'>
            <div className='flex h-1/2 justify-center items-center shadow-xl'>
                <Backward />
                <button
                    onClick={handlePlayback}
                    className="p-2 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <Forward />
                <div className='ml-2 flex items-center justify-center'>
                    <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>

            </div>
            <div className=' h-1/2 flex-col jsutify-center items-center'>
                <Timeline />

            </div>

        </div>

    )
}

export default BottomBar