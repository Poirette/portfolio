export default {
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `src/fonts`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
