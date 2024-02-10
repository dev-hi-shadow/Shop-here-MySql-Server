module.exports = {
  apps: [
    {
      name: "shophere-staging",
      script: "./src/index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
