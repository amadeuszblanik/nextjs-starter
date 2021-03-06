import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Title from '@/components/Title';
import { NextPage } from 'next';

const StyledMain = styled.main`
  padding: 18px 24px;
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

const SortingHat = styled.div`
  padding: 24px 0;
  text-align: center;
`;

const Home: NextPage<{ sortingHat: string }> = ({ sortingHat }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <StyledMain>
      <Title />
      <SortingHat>Sorting hat says: {sortingHat}</SortingHat>
    </StyledMain>

    <StyledFooter>
      <a href="https://zeit.co" target="_blank" rel="noopener noreferrer">
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </StyledFooter>
  </div>
);

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`https://bme-potter-api.herokuapp.com/sorting-hat/`);
  const json = await res.json();
  return { sortingHat: json.data };
};

export default Home;
