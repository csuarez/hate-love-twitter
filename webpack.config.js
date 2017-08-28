require('dotenv').config()

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const WebpackWebExt = require('webpack-webext-plugin');

const browser =  process.env.BROWSER;
const firefoxIssuer = process.env.FIREFOX_JWT_ISSUER;
const firefoxSecret = process.env.FIREFOX_JWT_SECRET;

const browserBuilds = [
    {
        browser: 'chrome',
        plugin: new ZipPlugin({
            path: '.',
            filename: `${browser}.zip`,
            include: [/\.*$/]
        })
    },
    {
        browser: 'firefox',
        plugin: new WebpackWebExt({
            runOnce: false,
            argv: [
                'sign',
                '--api-key', firefoxIssuer,
                '--api-secret', firefoxSecret,
                '-a', 'dist/',
                '-s', 'dist/'],
        }),
    }
];

const defaultBrowserBuild = browserBuilds[0].plugin;
const selectedBuilds = browserBuilds.filter((plugin) => browser === plugin.browser);
const browserBuildPlugin = selectedBuilds.length !== 0 ? selectedBuilds[0].plugin : defaultBrowserBuild;

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
        browserBuildPlugin
    ]
};