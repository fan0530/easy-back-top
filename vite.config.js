import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn, util } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      features: {
        customElement: true
      }
    }),
    monkey({
      entry: 'src/main.js',
      userscript: {
        name: '一键返回顶部（EasyBackTop）',
        description: '为网页添加一个返回页面顶部的操作按钮，一键返回顶部，默认支持GitHub、v2ex、豆瓣电影这几个网站，但你可以通过“设置”添加更多需要支持的网站。',
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://movie.douban.com/*', 'https://github.com/*', 'https://www.v2ex.com/*'],
        resource: {'vant.index.css': 'https://unpkg.com/vant@4.9.6/lib/index.css'},
        "run-at": "document-end"
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js').concat(
            await util.fn2dataUrl(() => {
              // @ts-ignore
              window.Vue = Vue;
            }),
          ),
          vant: cdn.jsdelivr('vant', 'lib/vant.min.js' )
        },
        // externalResource: {
        //   'vant/lib/index.min.css': cdn.jsdelivr(),
        // },
      },
    }),
  ],
});
