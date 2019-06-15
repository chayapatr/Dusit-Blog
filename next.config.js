/* Higher Order Function */
const withCSS = require('@zeit/next-css')

/* Export */
module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            },
            {
                test: /\.css$/,
                use: 'raw-loader',
            }
        )
        return cfg;
    }
}