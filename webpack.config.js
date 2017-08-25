var CopyWebpackPlugin = require('copy-webpack-plugin');

const browser =  process.env.BROWSER;

module.exports = {
    entry: './src/scripts/hate-love.js',
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
            { from: `./src/manifests/${browser}.json`   , to: 'manifest.json' },
            { from: './src/styles/styles.css'           , to: 'styles.css' },
            { from: './src/img/icon.png'                , to: 'icon.png' }
        ])
    ]
};