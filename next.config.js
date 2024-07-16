module.exports = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    loader: "imgix",
    path: "",
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
