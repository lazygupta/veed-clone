import React from 'react'

const Upgrade = (props) => {
    return (
        <button className="relative flex items-center justify-center gap-2 font-medium whitespace-nowrap rounded-lg ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 [&amp;_svg]:pointer-events-none text-primary-foreground hover:enabled:bg-primary-hover active:enabled:bg-primary-hover h-10 px-3 bg-upgrade [&amp;&amp;]:hover:bg-[#FF961C]"><div className="w-4 h-4 rounded-sm bg-yellow-600 flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible"><path d="M9.255 7.2h3.45c.485 0 .786.448.541.803l-5.332 7.732c-.324.47-1.169.275-1.169-.27V8.8h-3.45c-.485 0-.786-.448-.541-.803L8.086.264c.324-.469 1.169-.274 1.169.27V7.2Z" fill="currentColor"></path></svg></div>{props.label}</button>
    )
}

export default Upgrade