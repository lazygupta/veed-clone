import React from 'react';

const Text = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="text-primary"
        >
            <g filter="url(#text_svg__a)">
                <path
                    fill="currentColor"
                    d="M0 9.6c0-3.36 0-5.04.654-6.324A6 6 0 0 1 3.276.654C4.56 0 6.24 0 9.6 0h4.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C24 4.56 24 6.24 24 9.6v4.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C19.44 24 17.76 24 14.4 24H9.6c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C0 19.44 0 17.76 0 14.4z"
                ></path>
                <path
                    fill="url(#text_svg__b)"
                    fillOpacity="0.2"
                    d="M0 9.6c0-3.36 0-5.04.654-6.324A6 6 0 0 1 3.276.654C4.56 0 6.24 0 9.6 0h4.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C24 4.56 24 6.24 24 9.6v4.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C19.44 24 17.76 24 14.4 24H9.6c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C0 19.44 0 17.76 0 14.4z"
                ></path>
            </g>
            <g filter="url(#text_svg__c)">
                <path
                    fill="#fff"
                    d="M6 7.5A1.5 1.5 0 0 0 7.5 9h3v7.5a1.5 1.5 0 0 0 3 0V9h3a1.5 1.5 0 0 0 0-3h-9A1.5 1.5 0 0 0 6 7.5"
                ></path>
            </g>
            <defs>
                <filter
                    id="text_svg__a"
                    width="24"
                    height="24"
                    x="0"
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
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                    <feColorMatrix
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_22531_113"></feBlend>
                </filter>
                <filter
                    id="text_svg__c"
                    width="16"
                    height="16"
                    x="4"
                    y="5"
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
                    <feColorMatrix
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        mode="multiply"
                        result="effect1_dropShadow_22531_113"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_22531_113"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="text_svg__b"
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
    );
};

export default Text;
