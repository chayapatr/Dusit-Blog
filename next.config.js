/* Higher Order Function */
const withCSS = require('@zeit/next-css')

/* Export */
module.exports = withCSS({
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            }
        )
        return cfg;
    }
})