module.exports = {

    async redirects() {
      return [
        {
          source: '/github',
          destination: 'https://github.com/FayazRafeek',
          permanent: false
        }
      ];
    }
  };