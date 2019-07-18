const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports =  withCSS({
    exportPathMap: () => {
        return {
            '/': { page: '/' }
        };
    },
    publicRuntimeConfig: {
        staticFolder: '/out',
    },
    webpack (config, options) {
        config.resolve.alias['react'] = 'preact/compat',
        config.resolve.alias['react-dom'] = 'preact/compat',
        config.resolve.alias['react-ssr-prepass'] = 'preact-ssr-prepass',
        config.resolve.alias['react-render-to-string'] = 'preact-render-to-string',
        config.resolve.alias['assets'] = path.join(__dirname, 'static/assets'),
        config.resolve.alias['css'] = path.join(__dirname, 'static/css'),
        config.resolve.alias['components'] = path.join(__dirname, 'components'),
        config.resolve.alias['mockup'] = path.join(__dirname, 'static/mockup'),
        config.resolve.alias['static'] = path.join(__dirname, 'static'),
        config.resolve.alias['stores'] = path.join(__dirname, 'stores'),
        config.resolve.alias['icon'] = path.join(__dirname, 'components/icon')

        return config
    }
})