import Logo from '@/src/components/logo'
import {
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import { FaStethoscope } from 'react-icons/fa'
import { MdDashboard, MdOutlineMiscellaneousServices } from 'react-icons/md'
import { useAdminMenu } from '../../store/useMenuStore'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const { sidebarMenuState, toggle } = useAdminMenu()
  const route = usePathname()

  const adminPages = [
    {
      key: '1',
      path: '/admin',
      value: 'Dashboard',
      icon: <MdDashboard />,
    },

    {
      key: '2',
      path: '/admin/patients',
      value: 'Patients',
      icon: <UserOutlined />,
    },

    {
      key: '3',
      path: '/admin/doctors',
      value: 'Doctors',
      icon: <FaStethoscope />,
    },

    {
      key: '4',
      path: '/admin/services',
      value: 'Services',
      icon: <MdOutlineMiscellaneousServices />,
    },
  ]

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={sidebarMenuState}
      style={{ overflow: 'auto', height: '100vh', padding: '20px 10px' }}
    >
      <Logo className={styles.logo} />
      <div className="demo-logo-vertical" />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ fontSize: '17px', overflow: 'auto' }}
      >
        {adminPages.map(page =>
          <Menu.Item key={page.key} icon={page.icon}>
            <Link
              href={page.path}
              className={clsx(route === page.path, styles.active)}
            >
              {page.value}
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Layout.Sider >
  )
}

export default SideBar
