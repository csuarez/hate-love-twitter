var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './hate-love.js',
    output: {
        path: __dirname + '/dist',
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
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'manifest.json' , to: 'manifest.json' },
            { from: 'styles.css'    , to: 'styles.css' },
            { from: 'icon.png'      , to: 'icon.png' }
        ])
    ]
};