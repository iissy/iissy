module.exports = {
    // publicPath:'https://cdn.jsdelivr.net/gh/jitask/cache/dist',
    productionSourceMap: false,
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