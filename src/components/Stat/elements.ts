import styled from "styled-components";
import device from "../../utils/device";

export const Wrapper = styled.div`
  text-align: center;
  margin: 0.5em;
  font-weight: 500;
  color: ${({ theme }) => theme.color.stats};
`;

export const Value = styled.div`
  font-size: 1.6em;
  line-height: 1em;
`;

export const Unit = styled.span`
  font-size: 0.6em;
  line-height: 1em;
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.8;
  white-space: nowrap;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  font-size: 0.9em;
  flex-wrap: wrap;
  padding: 2em 0;

  @media ${device.laptop} {
    font-size: 1em;
  }
`;
