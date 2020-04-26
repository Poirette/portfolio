import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 3rem;

  a {
    color: ${props => props.theme.color.link};
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${props => props.theme.color.linkHovered};
    }
  }

  ul {
    margin-top: 1em;

    & > li {
      margin-bottom: 0;
    }
  }
`;

export const Header = styled.h3`
  display: flex;
  margin: 0;
`;

export const Job = styled.span`
  text-transform: capitalize;
  flex: 1;
`;

export const Location = styled.span``;

export const Period = styled.span``;

export const SubHeader = styled.div`
  color: ${props => props.theme.color.secondaryText};
  font-weight: normal;
  border-bottom: 1px dashed ${props => props.theme.color.border};
  padding-bottom: 0.2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Company = styled.span``;

export const Description = styled.p`
  padding-right: 1rem;
`;

export const Icons = styled.div`
  font-size: 2rem;
  text-align: right;

  & > a {
    margin: 0 5px;
    transition: transform 200ms ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale3d(1.3, 1.3, 1.3);
    }
  }

  & > a:last-child {
    margin-right: 0;
  }

  & > a:first-child {
    margin-left: 0;
  }
`;
