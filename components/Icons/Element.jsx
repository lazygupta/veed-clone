import React from "react";

const Element = () => {
  return (
    <div className="text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
        viewBox="0 0 24 25"
        className="block"
      >
        <g filter="url(#elements_svg__a)">
          <path
            fill="currentColor"
            d="M0 9.6c0-3.36 0-5.04.654-6.324A6 6 0 0 1 3.276.654C4.56 0 6.24 0 9.6 0h4.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C24 4.56 24 6.24 24 9.6v3.424c0 1.467 0 2.2-.166 2.891a6 6 0 0 1-.718 1.735c-.371.605-.89 1.124-1.928 2.162l-1.376 1.376c-1.038 1.038-1.557 1.557-2.162 1.928a6 6 0 0 1-1.735.718c-.69.166-1.424.166-2.891.166H9.6c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C0 19.44 0 17.76 0 14.4z"
          ></path>
          <path
            fill="url(#elements_svg__b)"
            fillOpacity="0.2"
            d="M0 9.6c0-3.36 0-5.04.654-6.324A6 6 0 0 1 3.276.654C4.56 0 6.24 0 9.6 0h4.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C24 4.56 24 6.24 24 9.6v3.424c0 1.467 0 2.2-.166 2.891a6 6 0 0 1-.718 1.735c-.371.605-.89 1.124-1.928 2.162l-1.376 1.376c-1.038 1.038-1.557 1.557-2.162 1.928a6 6 0 0 1-1.735.718c-.69.166-1.424.166-2.891.166H9.6c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C0 19.44 0 17.76 0 14.4z"
          ></path>
        </g>
        <g filter="url(#elements_svg__c)">
          <path
            fill="#fff"
            d="M18.365 14H15.92c-.672 0-1.008 0-1.265.13a1.2 1.2 0 0 0-.524.525C14 14.912 14 15.248 14 15.92v2.445c0 1.454 0 2.18.288 2.517a1.2 1.2 0 0 0 1.006.417c.441-.035.955-.549 1.984-1.577l2.444-2.444c1.028-1.028 1.542-1.542 1.577-1.984a1.2 1.2 0 0 0-.417-1.007C20.546 14 19.82 14 18.365 14"
          ></path>
        </g>
        <defs>
          <filter
            id="elements_svg__a"
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
            <feBlend in2="shape" result="effect1_innerShadow_22531_673"></feBlend>
          </filter>
          <filter
            id="elements_svg__c"
            width="11.303"
            height="11.303"
            x="12"
            y="13"
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
            <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_22531_673"></feBlend>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_22531_673" result="shape"></feBlend>
          </filter>
          <linearGradient
            id="elements_svg__b"
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
    </div>
  );
};

export default Element;
