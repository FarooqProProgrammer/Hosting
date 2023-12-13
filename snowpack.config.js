// snowpack.config.js
module.exports = {
    mount: {
        public: '/',
        src: '/src',
    },
    plugins: [
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-babel',
        '@snowpack/plugin-webpack',
    ],
};
