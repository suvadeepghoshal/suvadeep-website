import Container from '../components/Container'
import { routeSchema } from '../public/schemas/routeSchema'

const Home = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <main>
        <Container routes={(() => routeSchema())()} />
      </main>
    </div>
  )
}

export default Home
