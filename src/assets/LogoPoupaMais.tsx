import React from "react";

const LogoPoupaMais = ( {color = "#fff" }: {color: string}) => (
  <svg
    width="220"
    height="60"
    viewBox="0 0 220 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Logo Poupa mais"
  >
    <rect width="220" height="60" fill="none" />
    <g
      transform="translate(5,5)"
      fill="#2C6E49"
      stroke="#2C6E49"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <rect
        x="5"
        y="15"
        width="30"
        height="25"
        rx="8"
        ry="8"
        fill="#2C6E49"
      />
      <rect
        x="13"
        y="7"
        width="14"
        height="10"
        rx="3"
        ry="3"
        fill="#A3DCA1"
      />
      <line
        x1="20"
        y1="8"
        x2="20"
        y2="15"
        stroke="#2C6E49"
        strokeWidth="2"
      />
    </g>
    <text 
      x="50"
      y="40"
      fontFamily="'Montserrat', sans-serif"
      fontWeight="700"
      fontSize="36"
      fill={color}
      letterSpacing="0.5"
    >
      Poupa
    </text>
    <g transform="translate(190,30)">
      <circle cx="0" cy="0" r="15" fill="#68D391" />
      <line
        x1="-6"
        y1="0"
        x2="6"
        y2="0"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="-6"
        x2="0"
        y2="6"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default LogoPoupaMais;