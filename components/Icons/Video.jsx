import React from 'react'

const Video = () => {
    return (
        <svg
            width="24"
            height="24"
            fill="#717ef6"
            viewBox="0 0 24 24"
            className="text-primary"
        >
            <g fillRule="evenodd" clipRule="evenodd" filter="url(#video_svg__a)">
                <path
                    fill="currentColor"
                    d="M9.601 0c-3.36 0-5.04 0-6.324.654A6 6 0 0 0 .654 3.276C0 4.56.001 6.24.001 9.601v4.8c0 3.36.001 5.04.655 6.323a6 6 0 0 0 2.622 2.622C4.562 24 6.242 24 9.602 24H14.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C24 19.44 24 17.76 24 14.4V9.6c0-3.36 0-5.04-.654-6.324A6 6 0 0 0 20.725.654C19.44 0 17.76 0 14.4 0z"
                ></path>
                <path
                    fill="url(#video_svg__b)"
                    fillOpacity="0.2"
                    d="M9.601 0c-3.36 0-5.04 0-6.324.654A6 6 0 0 0 .654 3.276C0 4.56.001 6.24.001 9.601v4.8c0 3.36.001 5.04.655 6.323a6 6 0 0 0 2.622 2.622C4.562 24 6.242 24 9.602 24H14.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C24 19.44 24 17.76 24 14.4V9.6c0-3.36 0-5.04-.654-6.324A6 6 0 0 0 20.725.654C19.44 0 17.76 0 14.4 0z"
                ></path>
            </g>
            <g filter="url(#video_svg__c)">
                <path
                    fill="#fff"
                    d="M16 12.8c0 .44 0 .66.058.862.05.179.135.347.247.495.127.167.303.299.655.563l.48.36c.824.618 1.236.927 1.58.92a1 1 0 0 0 .767-.383C20 15.345 20 14.83 20 13.8v-3.6c0-1.03 0-1.545-.213-1.816A1 1 0 0 0 19.021 8c-.345-.007-.757.302-1.581.92l-.48.36c-.352.264-.528.396-.655.563a1.5 1.5 0 0 0-.247.495C16 10.54 16 10.76 16 11.2z"
                ></path>
            </g>
            <g filter="url(#video_svg__d)">
                <path
                    fill="#fff"
                    d="M5 10.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 7 7.08 7 8.2 7h3.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C15 8.52 15 9.08 15 10.2v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C13.48 17 12.92 17 11.8 17H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 15.48 5 14.92 5 13.8z"
                ></path>
            </g>
            <defs>
                <filter
                    id="video_svg__a"
                    width="24"
                    height="24"
                    x="0.001"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="0.5"></feOffset>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_22531_1628"></feBlend>
                </filter>
                <filter
                    id="video_svg__c"
                    width="8"
                    height="12"
                    x="14"
                    y="7"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        mode="multiply"
                        result="effect1_dropShadow_22531_1628"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_22531_1628"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="video_svg__d"
                    width="14"
                    height="14"
                    x="3"
                    y="6"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        mode="multiply"
                        result="effect1_dropShadow_22531_1628"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_22531_1628"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="video_svg__b"
                    x1="12"
                    x2="12"
                    y1="0"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Video