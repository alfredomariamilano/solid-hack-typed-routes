import { Title } from '@solidjs/meta'
import { HttpStatusCode } from '@solidjs/start'
import { useTypedNavigate, useTypedParams } from '~/typedRouter.gen'

export default function NotFound() {
  const params = useTypedParams('/*404')
  const typedNavigate = useTypedNavigate()

  return (
    <div>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <div style={{ 'text-align': 'left' }}>
        <h1>{'URL Params'}</h1>
        <input
          value={params()[404]}
          onInput={e => {
            typedNavigate('/*404', {
              params: {
                404: (e.target as HTMLInputElement).value,
              },
            })
          }}
        />
        <pre>{JSON.stringify(params(), null, 2)}</pre>
      </div>
    </div>
  )
}
