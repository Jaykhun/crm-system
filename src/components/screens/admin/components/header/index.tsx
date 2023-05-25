import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import { useAdminMenu } from '../../store/useMenuStore'

const Header = () => {
  const { toggle, sidebarMenuState } = useAdminMenu()

  return (
    <Layout.Header style={{ padding: 0, background: 'white' }}>
      <Button
        type="text"
        icon={sidebarMenuState ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => toggle()}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  )
}

export default Header