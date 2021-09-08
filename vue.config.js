module.exports = {
    // publicPath:'https://cdn.jsdelivr.net/gh/iissy/soul@main/dist',
    devServer: {
        proxy: {
            '/proxy': {
                target: 'http://localhost',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                }
            },
        }
    }
};