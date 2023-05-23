import appointmentPath from '@/public/images/appointment.png'
import { DatePicker, Select } from 'antd'
import Image from 'next/image'
import styles from './styles.module.scss'

const Appointment = () => {
    return (
        <div className={styles.appointment}>
            <div className='container'>
                <div className={styles.appointment__inner}>
                    <div className={styles.appointment__img}>
                        <Image
                            src={appointmentPath}
                            width={540}
                            height={515}
                            alt='appointment'
                        />
                    </div>

                    <div className={styles.appointment__content}>
                        <div className={styles.appointment__title}>Book an appointment</div>
                        <form className={styles.form}>
                            <div className={styles.form__names}>
                                <input type='text' className={styles.form__input} placeholder='First name' />
                                <input type='text' className={styles.form__input} placeholder='Last name' />
                            </div>

                            <div className={styles.form__names}>
                                <input type='email' className={styles.form__input} placeholder='Email' />
                                <input type='password' className={styles.form__input} placeholder='Password' />
                            </div>

                            <div className={styles.form__names}>

                                <div className={styles.form__select}>
                                    <Select
                                        placeholder='Choose a doctor'
                                    />
                                </div>

                                <div className={styles.form__date}>
                                    <DatePicker
                                        format='DD.MM.YYYY'
                                        inputReadOnly
                                    />
                                </div>
                            </div>

                            <button className={styles.form__btn}>Book now</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Appointment