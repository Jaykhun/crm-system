import Button from '@/components/ui/button'
import carePath from '@/public/images/care.png'
import Image from 'next/image'
import styles from './styles.module.scss'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className='container'>
                <div className={styles.intro__inner}>
                    <div className={styles.intro__banner}>
                        <div className={styles.intro__subtitle}>
                            Custom Doctor Appointment Booking Software
                        </div>
                        <h1 className={styles.intro__title}>
                            A white label patient appointment bookings system.
                        </h1>
                        <div className={styles.intro__btn}>
                            <Button path='/'>Sign Up</Button>
                        </div>
                    </div>

                    <div className={styles.intro__img}>
                        <Image
                            src={carePath}
                            width={620}
                            height={470}
                            alt='intro-banner'
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro