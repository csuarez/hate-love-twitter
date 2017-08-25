module.exports = {
    entry: './hate-love.js',
    output: {
        path: __dirname + '/build',
        filename: 'hate-love.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    }
};