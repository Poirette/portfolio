import React, { ReactNode } from 'react';
import {
  Container,
  Header,
  Job,
  Period,
  Description,
  Location,
  SubHeader,
  Icons,
} from "./elements";
import Company from "./Company";
import Tool, { Tools } from "../Tool";

interface ICompany {
  name: string,
  web: string,
};

interface IProps {
  job: string,
  location: string,
  company: ICompany,
  children: ReactNode,
  tools: Tools[],
};

const Experience = ({ job, location, company, children, tools }: IProps) => (
  <Container>
    <Header>
      <Job>{job}</Job>
      <Company link={company.web} name={company.name} />
    </Header>
    <SubHeader>
      <Location>{location}</Location>
      <Period>mai 2016 - en poste</Period>
    </SubHeader>
    <Description>{children}</Description>
    <Icons>
      {tools.map(tool => (
        <Tool name={tool} />
      ))}
    </Icons>
  </Container>
);

export default Experience;
