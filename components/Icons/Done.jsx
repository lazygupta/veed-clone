import React from 'react'

const Done = () => {
    return (
        <button className="relative flex items-center justify-center gap-2 font-medium whitespace-nowrap rounded-lg ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 [&amp;_svg]:pointer-events-none bg-primary text-primary-foreground hover:enabled:bg-primary-hover active:enabled:bg-primary-hover h-10 px-3 min-w-20" ><svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="overflow-visible hidden lg:block"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 4-8 8-4-4"></path></svg><span>Done</span></button>
    )
}

export default Done