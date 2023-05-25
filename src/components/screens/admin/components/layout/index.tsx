import { Layout } from 'antd'
import { ReactNode } from 'react'
import Header from '../header'
import SideBar from '../sidebar'
import styles from './styles.module.scss'

interface DashboardProps {
    children: ReactNode
}

const Dashboard = ({ children }: DashboardProps) => {
    return (
        <div className={styles.dashboard}>
            <Layout>
                <SideBar />
                <Layout>
                    <Header />
                    <Layout.Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Layout.Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Dashboard