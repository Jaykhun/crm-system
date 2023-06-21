import Meta from '@/components/meta'
import Dashboard from './components/layout'
import styles from './styles.module.scss'

const Admin = () => {
    return (
        <Meta title='Admin Panel'>
            <Dashboard>
                <div className={styles.admin}>
                    
                </div>
            </Dashboard>
        </Meta>
    )
}

export default Admin