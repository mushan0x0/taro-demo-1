export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  renderer: "skyline",
  lazyCodeLoading: "requiredComponents",
  rendererOptions: {
    skyline: {
      defaultDisplayBlock: true,
    },
  },
  componentFramework: "glass-easel",
})
