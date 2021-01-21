module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { useBuiltIns: 'usage', corejs: '3.8.3', targets: { esmodules: true } },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}
