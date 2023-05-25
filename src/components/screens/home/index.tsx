import Appointment from '@/components/appointment'
import Layout from '@/components/layout'
import Meta from '@/components/meta'
import Intro from './components/intro'
import Proces from './components/process'
import Services from './components/services'

const Home = () => {
  return (
    <Meta
      title='Home'
      description='A white label patient appointment bookings system'
    >
      <Layout>
        <Intro />
        <Proces />
        <Appointment />
        <Services />
      </Layout>
    </Meta>
  )
}

export default Home