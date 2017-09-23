/*
 *
 */

const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const NullPlugin = require( 'webpack-null-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

const { join } = require( 'path' );

const environment = process.env.NODE_ENV;
const production = environment === 'production';

module.exports = {
    entry: { app: join( __dirname, 'src/index.js' ) },

    output: {
        path: join( __dirname, 'public' ),
        filename: 'js/bundles/[name].[hash].bundle.js',
        pathinfo: !production
    },

    devtool: 'source-map',

    devServer: {
        contentBase: join( __dirname, 'public' ), historyApiFallback: false
    },

    module: {
        rules: [ {
            test: /\.css$/,
            use: ExtractTextPlugin.extract( { fallback: 'style-loader', use: 'css-loader' } )
        }, {
            test: /\.js$/,
            include: [ join( __dirname, 'src' ) ],
            use: [ 'babel-loader' ]
        } ]
    },

    plugins: [
        new ExtractTextPlugin( {
            filename: 'css/bundles/[name].[hash].bundle.css',
            disable: false, allChunks: true
        } ),

        new HtmlWebpackPlugin( {
            env: environment || 'development',
            title: 'Angular ES6 Seed',
            template: 'src/index.ejs',
            filename: 'index.html'
        } ),

        production ? new UglifyJsPlugin( { mangle: false } ) : new NullPlugin()
    ]
};
