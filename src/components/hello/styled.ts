import styled from "styled-components";

export const HelloStyled = styled.div`
  color: ${({ theme }) => theme.light.text};
  text-align: center;
  background: ${({ theme }) => theme.light.background};
`;
