module.exports = {
    devServer: {
        proxy: {
            '/proxy': {
                target: 'http://localhost:81',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                }
            },
        }
    }
};