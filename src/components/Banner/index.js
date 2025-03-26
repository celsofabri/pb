import React from 'react';
import { StyledWrapper } from 'assets/styles/global';
import { 
  StyledBanner, 
  StyledBannerContent,
  StyledBannerTitle,
  StyledBannerDescription
} from './styled';

const Banner = () => {
  return (
    <StyledBanner>
      <StyledWrapper>
        <StyledBannerContent>
          <StyledBannerTitle>
            Title Here
          </StyledBannerTitle>
          <StyledBannerDescription>
            <p>Description Here</p>
          </StyledBannerDescription>
        </StyledBannerContent>
      </StyledWrapper>
    </StyledBanner>
  );
};

export default Banner;
