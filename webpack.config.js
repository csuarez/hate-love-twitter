const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const browser =  process.env.BROWSER;

module.exports = {
    entry: {
        'hate-love': './src/scripts/hate-love.js',
        popup: './src/scripts/popup.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
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
            { from: './src/img/icon.png'                , to: 'icon.png' },
            { from: './src/views/popup.html'            , to: 'popup.html' }
        ]),
        new ZipPlugin({
            path: '.',
            filename: `${browser}.zip`,
            include: [/\.*$/]
        })
    ]
};