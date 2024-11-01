import path from 'node:path'
import url from 'node:url'
import { defineConfig } from '@solidjs/start/config'
import { solidTypedRouterPlugin } from 'solid-typed-router'
import type { Plugin } from 'vinxi'

const root = import.meta.dirname || path.dirname(url.fileURLToPath(import.meta.url))
let launchedBrowser = false

export default defineConfig({
  vite({ router }) {
    const openBrowserPlugin = {
      name: 'open-browser',
      configResolved(config) {
        import('open').then(({ default: open }) => {
          if (!launchedBrowser) {
            open(`::${config.dev.port}`)

            launchedBrowser = true
          }
        })
      },
    } as Plugin

    if (router !== 'server-function') {
      return {
        plugins: [
          openBrowserPlugin,
          solidTypedRouterPlugin({
            root,
          }),
        ],
      }
    }

    return {
      plugins: [openBrowserPlugin],
    }
  },
})
