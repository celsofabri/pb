import React from 'react';
import { Wrapper } from 'assets/styles/global';
import Header from 'components/Header';
import LogoIcon from 'components/LogoIcon';

const IndexPage = () => {
  return (
    <Wrapper>
      <Header>
        <LogoIcon width={'32px'} />
      </Header>
    </Wrapper>
  );
};

export default IndexPage;

export const Head = () => <title>Priscila Batistão</title>;
