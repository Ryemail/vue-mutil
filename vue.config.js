module.exports = {
    baseUrl: "/",
    outputDir: "/dist",
    devServer: {
        open: true,
        host: "0.0.0.0",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null 
    },
    pages: {
        index: {
            entry: 'src/pages/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        page: {
            entry: 'src/pages/page/main.js',
            template: 'public/page.html',
            filename: 'page.html',
            title: 'Page',
            chunks: ['chunk-vendors', 'chunk-common', 'page']
        }
        // subpage: 'src/subpage/main.js'
    }
};