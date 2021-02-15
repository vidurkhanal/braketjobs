const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    HomeFetchUrl: "https://jobs.github.com/positions.json?description=code",
    JobFetchUrl: "https://jobs.github.com/positions/",
  },
  pwa: {
    dest: "public",
  },
});

// export {};
