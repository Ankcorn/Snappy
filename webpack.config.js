const path = require('path')

module.exports={
    context: path.resolve(__dirname, 'src'),
    entry:'./index.js',
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'assets'),
        publicPath:'/assets',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:path.resolve(__dirname, 'src'),
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:[/node_modules/],
                use:[{
                    loader:'babel-loader',
                    options:{presets:['es2015']}
                }],
            },
        ],
    },
};