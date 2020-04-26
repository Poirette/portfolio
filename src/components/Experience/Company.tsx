import React from 'react';

const Company = ({
  link,
  name,
}) => (
  <a href={link} title={name}>
    {`@${name}`}
  </a>
);

export default Company;
