/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  env: {
    API_BASE_URL: "https://alejandria.edu.mx:3005/api-ale/v1",
    NEXTAUTH_SECRET: "J/ivEgYbytTfx+YK9RcMFgLQJgSd09uZ6BQRGioHoZg=",
  },
};
