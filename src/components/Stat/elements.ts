import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding: 1em;
  margin: 1em;
  margin-top: 5em;
  font-weight: 500;
  color: ${({ theme }) => theme.color.stats};
`;

export const Value = styled.div`
  font-size: 1.6em;
  line-height: 1em;
`;

export const Unit = styled.span`
  font-size: 1rem;
  line-height: 1em;
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.8;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;
