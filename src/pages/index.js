import React from 'react';
import { StyledWrapper } from 'assets/styles/global';
import { colors } from 'assets/styles/tokens';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
import LogoIcon from 'components/LogoIcon';

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header>
        <StyledWrapper>
            <LogoIcon width={'32px'} />
        </StyledWrapper>
      </Header>
      <Banner/>
      <Footer>
        <StyledWrapper>
          <LogoIcon width={'32px'} color={colors.white} />
        </StyledWrapper>
      </Footer>
    </React.Fragment>
  );
};

export default IndexPage;

export const Head = () => <title>Priscila Batistão</title>;
