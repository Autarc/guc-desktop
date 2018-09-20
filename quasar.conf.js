// Configuration for your app

const path = require('path')

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      'fontawesome'
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      vueCompiler: true,
      gzip: true,
      analyze: true,
      // extractCSS: false,
      chainWebpack (chain) {
        chain.module.rule('lint')
          .test(/\.(js|vue)$/)
          .use('eslint')
          .loader('eslint-loader')
          .options({
            cache: true
          })
        chain.module.rule('template-engine')
          .test(/\.pug$/)
          .use('pug')
          .loader('pug-plain-loader')
        chain.resolve.alias
          .set('~', __dirname)
          .set('@', path.resolve(__dirname, 'src'))
      }
    },
    devServer: {
      https: false,
      port: 8081,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnDropdown',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemSeparator',
        'QItemMain',
        'QItemSide',
        'QItemTile',
        'QChip'
      ],
      directives: [
        'Ripple',
        'CloseOverlay'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'Meta',
        'Cookies'
      ]
    },
    animations: [],
    electron: {
      // optional; webpack config Object for
      // the Main Process ONLY (/src-electron/main-process/)
      extendWebpack (cfg) {
        // directly change props of cfg;
        // no need to return anything
      },

      // optional; EQUIVALENT to extendWebpack() but uses webpack-chain;
      // for the Main Process ONLY (/src-electron/main-process/)
      chainWebpack (chain) {
        // chain is an webpack-chain instance
        // of the Webpack configuration
      },

      bundler: 'builder',
      builder: {
        // ...
      }
    },
    ssr: {
      pwa: {
        runtimeCaching: [
          {
            urlPattern: '/statics',
            handler: 'networkFirst'
          }
        ]
      }
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'Quasar PWA',
        short_name: 'Quasar PWA',
        description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    }
  }
}
