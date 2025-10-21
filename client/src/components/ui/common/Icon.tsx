import React from 'react';

type IconProps = {
  color?: string;
  size?: number;
};

export const ZevaroIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 1000 1000"
    fill="none"
  >
    <polygon
      points="787.23 164.77 626.42 164.77 625.73 165.89 349.33 614.03 255.18 766.46 212.77 835.23 366.7 835.23 366.72 835.19 366.72 835.19 787.23 835.19 787.23 766.51 409.87 766.51 409.89 766.46 787.23 164.77"
      fill={color}
    />
    <polygon
      points="406.37 233.43 406.37 164.77 212.77 164.77 212.77 233.43 212.77 358.37 406.37 358.37 406.37 233.43"
      fill={color}
    />
  </svg>
);

export const TikTok: React.FC<IconProps> = ({ color = '#FFFFFF', size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 448 512"
    // className="w-4 h-5 text-white fill-current"
    fill="none"
  >
    <path d="M448,209.9a210,210,0,0,1-122.2-38.9V346.5c0,91.5-74.5,165.5-166,165.5S-6,438-6,346.5,68.5,181,160,181a165,165,0,0,1,25.8,2V290.6A84.6,84.6,0,1,0,160,425c46.6,0,84.2-37.4,84.2-83.5V0h81.6a127.7,127.7,0,0,0,1.9,23.3A127.2,127.2,0,0,0,448,122.5Z" 
      fill={color}/>
  </svg>
);

