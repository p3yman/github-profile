const path = require('path');

module.exports = {
    
    entry: './src/index.js',
    
    output: {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use : 'babel-loader',
            },
            {
                test: /\.css$/,
                use : ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use : ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    
};
