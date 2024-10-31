import { defineConfig } from '@solidjs/start/config'
import { solidTypedRoutesPlugin } from 'solid-typed-router'

export default defineConfig({
  vite({ router }) {
    if (router !== 'server-function') {
      return {
        plugins: [
          solidTypedRoutesPlugin({
            root: import.meta.dirname,
          }),
        ],
      }
    }

    return {}
  },
})
