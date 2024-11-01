import { array, number, object, optional, string } from 'valibot'
import {
  createSearchParams,
  useTypedNavigate,
  useTypedParams,
  useTypedSearchParams,
} from '~/typedRouter.gen'

const getRandom = () => `${Math.round(Math.random() * 100)}`

const searchParamsSchema = object({
  timestamp: optional(number(), Date.now()),
  random: optional(
    object({
      current: optional(string(), getRandom()),
      history: optional(array(string()), []),
    }),
    {},
  ),
})

export const searchParams = createSearchParams('/:nested/searchParams', searchParamsSchema)

export default () => {
  const params = useTypedParams('/:nested/searchParams')
  const typedNavigate = useTypedNavigate()

  const [searchParams_, setSearchParams] = useTypedSearchParams('/:nested/searchParams')

  // set the default values and replace the current location
  // setSearchParams({}, { replace: true })

  return (
    <div>
      <div>
        <h1>{'URL Params'}</h1>
        <input
          value={params().$nested}
          onInput={e => {
            typedNavigate('/:nested/searchParams', {
              params: {
                $nested: (e.target as HTMLInputElement).value,
              },
            })
          }}
        />
        <pre>{JSON.stringify(params(), null, 2)}</pre>
      </div>
      <div>
        <h1>
          {'Search Params'}
          <br />
          <span style={{ 'font-size': '0.2em' }}>
            {'(Anything that is JSON serializable at least)'}
          </span>
        </h1>

        <button
          onClick={() => {
            setSearchParams({
              timestamp: Date.now(),
            })
          }}
        >
          {'Set timestamp'}
        </button>

        <button
          onClick={() => {
            const random = getRandom()

            setSearchParams({
              random: {
                current: random,
                history: [...searchParams_()!.random!.history!, random],
              },
            })
          }}
        >
          {'Set random.current'}
        </button>

        <button
          onClick={() => {
            setSearchParams({
              random: {
                history: [],
              },
            })
          }}
        >
          {'Clear random.history'}
        </button>

        <pre>{JSON.stringify(searchParams_(), null, 2)}</pre>
      </div>
    </div>
  )
}
