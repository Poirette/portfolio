import React from "react";

interface IProps {
  link?: string;
  name: string;
}

const Company = ({ link, name }: IProps) =>
  link ? (
    <a href={link} title={name}>
      {`@${name}`}
    </a>
  ) : (
    <>{name}</>
  );

export default Company;
