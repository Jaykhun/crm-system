import Appointment from '@/components/appointment'
import Layout from '@/components/layout'
import Intro from './components/intro'
import Proces from './components/process'
import Services from './components/services'


const Home = () => {
  return (
    <Layout>
      <Intro />
      <Proces />
      <Appointment />
      <Services />
    </Layout>
  )
}

export default Home