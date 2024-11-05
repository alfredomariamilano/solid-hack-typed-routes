import './Counter.css'
import { useTypedSearchParams } from '~/typedRouter.gen'

export default function Counter() {
  const [searchParams, setSearchParams] = useTypedSearchParams('/')

  return (
    <button
      class="increment"
      onClick={() => {
        const count = searchParams().count! + 1
        setSearchParams({ count })
      }}
      type="button"
    >
      Clicks: {searchParams().count}
    </button>
  )
}
