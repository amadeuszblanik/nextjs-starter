import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const Title: React.FC = () => (
  <>
    <StyledTitle>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </StyledTitle>
  </>
);

export default Title;
