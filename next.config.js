/** @type {import('next').NextConfig} */
const { authMiddleware } = require('./authMiddleware');
const nextConfig = {}

module.exports = {
    async rewrites() {
      return [
        {
          source: '/protected',
          destination: '/protected',
          has: [
            {
              type: 'cookie',
              key: 'token',
              value: '.+', // Match any value (non-empty token)
            },
          ],
          middleware: authMiddleware,
        },
        // Add more rewrite rules as needed for other protected routes
      ];
    },
  };
module.exports = nextConfig
