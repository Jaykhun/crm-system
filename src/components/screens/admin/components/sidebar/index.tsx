import Logo from '@/src/components/logo'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useAdminMenu } from '../../store/useMenuStore'
import styles from './styles.module.scss'

const SideBar = () => {
    const { sidebarMenuState, toggle } = useAdminMenu()
    return (
        <Layout.Sider
            trigger={null} collapsible
            collapsed={sidebarMenuState}
            style={{ overflow: "auto", height: '100vh', padding: "20px 10px" }}
        >
            <Logo className={styles.logo} />
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ fontSize: '17px', overflow: "auto" }}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Dashboard',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'Users',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'Doctors',
                    },
                ]}
            />
        </Layout.Sider>
    )
}

export default SideBar