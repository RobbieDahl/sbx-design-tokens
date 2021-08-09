const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  webpack: function (config, env) {
    if (env === 'development') {
        config.plugins.push(
            new StylelintPlugin({
                configFile: '.stylelintrc.json',
                files: 'src/styles/**/*.scss',
                cache: true
            })
      )
    }
    return config
  }
}