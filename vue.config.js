// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     publicPath: '/kkwedding/'
// })

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/kk-wedding/' : '/'
}