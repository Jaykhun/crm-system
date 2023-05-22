import emailIcon from '@/public/icons/message-icon.svg'
import phoneIcon from '@/public/icons/phone-icon.svg'
import telegramIcon from '@/public/icons/telegram-icon.svg'
import Image from 'next/image'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__body}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__contacts}>
              <div className={styles.footer__title}>Contact Us</div>

              <a href='tel:914562122' className={styles.contacts__links}>
                <span className={styles.contacts__icon}>
                  <Image
                    src={phoneIcon}
                    width={40}
                    height={40}
                    alt='phone-icon'
                  />
                </span>
                <span>+91 4562122</span>
              </a>

              <a href='mailto:example@gmail.com' className={styles.contacts__links}>
                <span className={styles.contacts__icon}>
                  <Image
                    src={emailIcon}
                    width={40}
                    height={40}
                    alt='email-icon'
                  />
                </span>
                <span>example@gmail.com</span>
              </a>
            </div>

            <div className={styles.footer__links}>
              <div className={styles.footer__title}>Quick Links</div>

              <ul className={styles.footer__menu}>
                <li><a href="">About Us</a></li>
                <li><a href="">Contacts</a></li>
                <li><a href="">FAQs</a></li>
              </ul>
            </div>

            <div className={styles.footer__subscribe}>
              <div className={styles.footer__title}>Subscribe</div>
              <form className={styles.footer__email}>
                <input type="email" className={styles.footer__email} placeholder='Enter your eamil' />
                <button>
                  <Image
                    src={telegramIcon}
                    width={50}
                    height={60}
                    alt='telegram-icon'
                  />
                </button>
              </form>
            </div>
          </div>

          <div className={styles.footer__footer}>
            All Rights Reserved © {new Date().getFullYear()} Clinic Appointment Management
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer