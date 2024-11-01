import path from 'node:path'
import url from 'node:url'
import { defineConfig } from '@solidjs/start/config'
import { solidTypedRouterPlugin } from 'solid-typed-router'

const root = import.meta.dirname || path.dirname(url.fileURLToPath(import.meta.url))

export default defineConfig({
  vite({ router }) {
    if (router !== 'server-function') {
      return {
        server: {
          // use this to open the correct port in Stackblitz
          preview: true,
        },
        plugins: [
          solidTypedRouterPlugin({
            root,
          }),
        ],
      }
    }

    return {}
  },
})
