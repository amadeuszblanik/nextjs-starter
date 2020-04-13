import React from "react";
import styled from "styled-components";
import {Main} from "../src/app/layout";

const Title = styled.h1`
  color: ${({theme}) => theme.colors.primary};
  font-size: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

Title.displayName = "Title";

const Index: React.FunctionComponent = () => {
    return (
        <Main>
            <Title>
                Hello World!
            </Title>
        </Main>
    );
};

export default Index;
