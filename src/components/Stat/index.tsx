import React from 'react';
import styled from 'styled-components';
import { Value, Label, Wrapper, Unit, Group } from "./elements";

interface IProps {
  value: string;
  label: string;
  unit: string
}

const Stat = ({ value, label, unit }: IProps) => (
  <Wrapper>
    <Value>
      {value}
      <Unit>{unit}</Unit>
    </Value>
    <Label>{label}</Label>
  </Wrapper>
);

Stat.Group = Group;

export default Stat;
