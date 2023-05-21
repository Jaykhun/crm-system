import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles.module.scss'

export type TypeLink = {
  path: string
  value: string
}

const Menu = () => {
  const { pathname } = useRouter()

  const links: TypeLink[] = [
    {
      path: '/',
      value: 'Home'
    },
    {
      path: '/doctors',
      value: 'Doctors'
    },
    {
      path: '/about',
      value: 'About us'
    },
    {
      path: '/contacts',
      value: 'Contacts Us'
    },
    {
      path: '/services',
      value: 'Services'
    },
  ]

  return (
    <div className={styles.menu}>
      {links.map(({ path, value }) =>
        <Link
          href={path}
          className={clsx(styles.menu__item, { [styles.menu__active]: pathname === path })}
          key={value}
        >
          {value}
        </Link>)
      }
    </div>
  )
}

export default Menu