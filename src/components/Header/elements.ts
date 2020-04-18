import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 6em;
  padding: 1em;
  background-color: ${props => props.theme.color.headerBackground};
  color: ${props => props.theme.color.headerText};
`;
