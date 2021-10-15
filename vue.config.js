module.exports = {
    publicPath:'https://cdn.jsdelivr.net/gh/jitask/jitask/dist',
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