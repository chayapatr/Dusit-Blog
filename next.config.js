const path = require('path')
const withCSS = require('@zeit/next-css')

const withPreact = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                )
            }

            if (options.isServer) {
                config.externals = ['react', 'react-dom', ...config.externals]
            }

            config.resolve.alias = Object.assign({}, config.resolve.alias, {
                react: 'preact/compat',
                react$: 'preact/compat',
                'react-dom': 'preact/compat',
                'react-dom$': 'preact/compat',
                'assets': path.join(__dirname, 'static/assets'),
                'css': path.join(__dirname, 'static/css'),
                'components': path.join(__dirname, 'components'),
                'mockup': path.join(__dirname, 'static/mockup'),
                'static': path.join(__dirname, 'static'),
                'stores': path.join(__dirname, 'stores')
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}

module.exports = withCSS(withPreact())