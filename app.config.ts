import path from 'node:path'
import url from 'node:url'
import { defineConfig } from '@solidjs/start/config'
import { solidTypedRouterPlugin } from '@bizarreal/vite-plugin-solid-typed-router'

const root = import.meta.dirname || path.dirname(url.fileURLToPath(import.meta.url))

export default defineConfig({
  vite({ router }) {
    if (router !== 'server-function') {
      return {
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
