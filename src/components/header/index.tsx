import Button from '@/components/ui/button'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../logo'
import Menu from './components/menu'
import styles from './styles.module.scss'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__body}>
          <div className={styles.header__img}>
            <Logo />
          </div>

          <div className={styles.menu__toggle}>
            <span
              className={clsx('', { [styles.menu__toggle__active]: isActive })}
              onClick={() => setIsActive(prev => !prev)}>
            </span>
          </div>

          <div className={clsx(styles.header__content, { [styles.header__active]: isActive })}>
            <Menu />

            <div className={styles.form}>
              <Link href="registration" className={styles.form__login}>Login</Link>
              <Button path='book'>Book an appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header