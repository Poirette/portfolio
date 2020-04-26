import React from 'react'
import * as Icons from './Icons'

export enum Tools {
  redux = "Redux",
  flow = "Flow",
  apollo = "Apollo",
  graphql = "Graphql",
  typescript = "Typescript",
  webpack = "Webpack",
  circleci = "Circleci",
  reactjs = "ReactJS",
  php = "PHP",
  nodejs = "NodeJS",
  sqlserver = "Sql Server",
  jquery = "Jquery",
  mongodb = "Mongo DB",
  symfony = "Symfony",
};

const tools = {
  [Tools.redux]: {
    web: "https://redux.js.org",
    Icon: Icons.Redux,
  },
  [Tools.flow]: {
    web: "https://www.flow.org",
    Icon: Icons.Flow,
  },
  [Tools.apollo]: {
    web: "https://www.apollographql.com",
    Icon: Icons.Apollo,
  },
  [Tools.graphql]: {
    web: "https://www.graphql.org",
    Icon: Icons.Graphql,
  },
  [Tools.typescript]: {
    web: "https://www.typescriptlang.org",
    Icon: Icons.Typescript,
  },
  [Tools.webpack]: {
    web: "http://www.webpack.js.org",
    Icon: Icons.Webpack,
  },
  [Tools.circleci]: {
    web: "https://www.circleci.com",
    Icon: Icons.Circleci,
  },
  [Tools.reactjs]: {
    web: "https://www.reactjs.org",
    Icon: Icons.Reactjs,
  },
  [Tools.php]: {
    web: "https://www.php.net",
    Icon: Icons.Php,
  },
  [Tools.nodejs]: {
    web: "https://www.nodejs.org",
    Icon: Icons.Nodejs,
  },
  [Tools.sqlserver]: {
    web: "https://www.microsoft.com/en-us/sql-server",
    Icon: Icons.SqlServer,
  },
  [Tools.jquery]: {
    web: "https://jquery.com",
    Icon: Icons.Jquery,
  },
  [Tools.mongodb]: {
    web: "https://www.mongodb.com",
    Icon: Icons.Mongodb,
  },
  [Tools.symfony]: {
    web: "https://www.symfony.com",
    Icon: Icons.Symfony,
  },
};

const Tool = ({ name }) => {
  const { Icon, web } = tools[name];

  return (
    <a href={web} target="_blank" title={name} data-tip={name}>
      <Icon />
    </a>
  );
};

export default Tool;
