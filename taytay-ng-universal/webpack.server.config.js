const {AotPlugin} = require('@ngtools/webpack');
const path = require('path');

module.exports = {
    entry: './src/server.ts',
    output: {
        filename: './dist/server.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.(ts|tsx)$/],
                "use": [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {test: /\.css$/, loader: 'raw-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {
                "test": /\.scss$|\.sass$/,
                "use": [
                    "exports-loader?module.exports.toString()",
                    {
                        "loader": "css-loader",
                    },
                    {
                        "loader": "sass-loader",
                    }
                ]
            }
        ]
    },
    target: 'node'
};
