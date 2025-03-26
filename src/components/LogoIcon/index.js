import React from 'react';
import { StyledLogoIcon } from './styles';
import { colors } from 'assets/styles/tokens';

const isValidHex = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

const LogoIcon = ({ width, height, color }) => {
  const fillColor = isValidHex(color) ? color : colors.black;
  const fillWidth = width ? width : 'auto';
  const fillHeight = height ? height : 'auto';

  return (
    <StyledLogoIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={fillWidth}
        height={fillHeight}
        viewBox="0 0 369.426 739.977"
      >
        <g
          id="pb"
          transform="translate(-853.464 -292.574)"
          fill={fillColor}
        >
          <path
            id="Caminho_7"
            data-name="Caminho 7"
            d="M218.189,541.255-9.2,8.56,20.058-3.926,247,527.729l-14.181,7.283Z"
            transform="translate(862.664 296.5)"
          />
          <path
            id="Caminho_8"
            data-name="Caminho 8"
            d="M114.428,302.369,108.5,271.123c54.672-10.368,94.613-46.181,109.6-98.254,15.321-53.27,1.022-110.117-36.427-144.837C138.994-11.538,72.086-17.2-6.736,12.078L-17.811-17.733C104.5-63.172,173.22-23.176,203.3,4.708c46.17,42.8,63.977,112.264,45.368,176.952C230.249,245.687,181.32,289.683,114.428,302.369Z"
            transform="translate(966.953 535.312)"
          />
          <path
            id="Caminho_9"
            data-name="Caminho 9"
            d="M218.189,541.255-9.2,8.56,20.058-3.926l227.389,532.7Z"
            transform="translate(897.647 491.296)"
          />
        </g>
      </svg>
    </StyledLogoIcon>
  );
};

export default LogoIcon;
