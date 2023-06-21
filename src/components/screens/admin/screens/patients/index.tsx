import Dashboard from '../../components/layout'
import Header from './components/header'
import styles from './styles.module.scss'

const Patients = () => {
  return (
    <Dashboard>
      <div className={styles.users}>
        <Header />
      </div>
    </Dashboard>
  )
}

export default Patients