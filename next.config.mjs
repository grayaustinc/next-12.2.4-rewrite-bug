// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const defaultConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  async rewrites() {
    return [
      //Simple Home Page Rewrite for index
      {
        source: "/",
        destination: "/home/",
      },
      //With Trailing Slash
      {
        source: "/test/with/none/",
        destination: "/test/with/none/1/",
      },
      {
        source: "/test/with/none-with-index/",
        destination: "/test/with/none-with-index/1/",
      },
      {
        source: "/test/with/ssg/",
        destination: "/test/with/ssg/1/",
      },
      {
        source: "/test/with/ssr/",
        destination: "/test/with/ssr/1/",
      },
      //Without Trailing Slash
      {
        source: "/test/without/none",
        destination: "/test/without/none/1",
      },
      {
        source: "/test/without/none-with-index",
        destination: "/test/without/none-with-index/1",
      },
      {
        source: "/test/without/ssg",
        destination: "/test/without/ssg/1",
      },
      {
        source: "/test/without/ssr",
        destination: "/test/without/ssr/1",
      },
    ];
  },

  trailingSlash: true,
};

let nextConfig = defaultConfig;

export default nextConfig;
