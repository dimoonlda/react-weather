module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm: 'app/components/WeatherForm',
            WeatherMessage: 'app/components/WeatherMessage',
            About: 'app/components/About.jsx',
            Example: 'app/components/Example.jsx',
            openWeatherMapService: 'app/api/openWeatherMapService.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            { test: /jquery[\\\/]src[\\\/]selector\.js$/, loader: 'amd-define-factory-patcher-loader' }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
