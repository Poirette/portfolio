import React, { ReactNode } from 'react';

import {
  Container,
  Header,
  Job,
  Description,
  Location,
  SubHeader,
  Icons,
} from "./elements";
import Company from "./Company";
import Period from "./Period";
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
  period: [Date, Date],
};

const Experience = ({
  job,
  location,
  company,
  children,
  tools,
  period,
}: IProps) => (
  <Container>
    <Header>
      <Job>{job}</Job>
      <Company link={company.web} name={company.name} />
    </Header>
    <SubHeader>
      <Location>{location}</Location>
      <Period from={period[0]} to={period[1]} />
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
