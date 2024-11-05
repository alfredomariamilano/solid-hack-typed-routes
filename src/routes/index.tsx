import { Title } from '@solidjs/meta'
import { number, object, optional } from 'valibot'
import Counter from '~/components/Counter'
import { createSearchParams } from '~/typedRouter.gen'

export const searchParams = createSearchParams(
  '/',
  object({
    count: optional(number(), 0),
  }),
)

export default function Home() {
  return (
    <main>
      <h1>{'Solid Typed Routes'}</h1>
      <Counter />
      <p>
        <span>{'Visit '}</span>
        <a
          href="https://github.com/alfredomariamilano/solid-typed-router"
          target="_blank"
          style={{ margin: 0 }}
        >
          {'https://github.com/alfredomariamilano/solid-typed-router'}
        </a>
        <span>{' to read the (currently barebones) docs.'}</span>
      </p>
    </main>
  )
}
