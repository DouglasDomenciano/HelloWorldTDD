import { join } from 'path';

const include = join(__dirname, 'src');

export default {
    entry: './src/js/main',
    output: {
        path: join(__dirname,'dist'),
        libraryTarget: 'umd',
        library: 'HelloWorldTDD',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node_modules/'
            },
        ]
    }
}
