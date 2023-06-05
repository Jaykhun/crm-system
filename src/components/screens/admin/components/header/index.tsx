import Avatar from '@/components/avatar'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import { useAdminMenu } from '../../store/useMenuStore'

const Header = () => {
  const { toggle, sidebarMenuState } = useAdminMenu()

  return (
    <Layout.Header style={{ padding: '0px 20px 0px 0px', background: 'white', display: 'flex', justifyContent: 'space-between' }}>
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

      <Avatar />
    </Layout.Header>
  )
}

export default Header