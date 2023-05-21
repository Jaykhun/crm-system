import logoPath from '@/public/images/logo.png'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Menu from './components/menu'
import styles from './styles.module.scss'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__body}>
          <div className={styles.header__img}>
            <Image
              src={logoPath}
              alt='logo'
              width={80}
              height={80}
            />
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
              <Link href="login" className={styles.form__login}>Login</Link>
              <Link href="book" className={styles.form__book}>Book an appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header