import styled from "styled-components";

export const HelloStyled = styled.div`
    color: ${({ theme }) => theme.light.text};
    background: ${({ theme }) => theme.light.background};
    text-align: center;
`;
