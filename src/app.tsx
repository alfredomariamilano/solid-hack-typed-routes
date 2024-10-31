import './app.css'
import '~/typedSearchParams.gen'

import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { TypedLink, routesMap, useTypedNavigate } from '~/typedRoutes.gen'

export default function App() {
  return (
    <Router
      root={props => {
        const typedNavigate = useTypedNavigate()

        return (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <button
              onClick={() => {
                typedNavigate('/')
              }}
            >
              {'Home'}
            </button>

            <TypedLink
              href={routesMap.$nested.searchParams.route}
              params={{
                $nested: 'typed',
              }}
              search={{
                timestamp: 1,
                random: {
                  current: `random`,
                  history: Array.from({ length: 3 }, () => `${Math.random()}`),
                },
              }}
            >
              {'Search Params'}
            </TypedLink>

            <a
              href="/not-found"
              onClick={e => {
                e.preventDefault()

                typedNavigate('/*404', {
                  params: {
                    $$404: 'not-found',
                  },
                })
              }}
            >
              {'404'}
            </a>

            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )
      }}
    >
      <FileRoutes />
    </Router>
  )
}
