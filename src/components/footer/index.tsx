import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__body}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__contacts}>
              <div className={styles.footer__title}>Contact Us</div>

              <a href='tel:914562122'><span></span> +91 4562122</a>
              <a href='mailto:example@gmail.com'>example@gmail.com</a>
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
              <input type="email" className={styles.footer__email} placeholder='Enter your eamil' />
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