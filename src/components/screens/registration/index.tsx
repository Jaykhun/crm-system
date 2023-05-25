import Logo from '@/components/logo'
import Meta from '@/components/meta'
import styles from './styles.module.scss'

const Registration = () => {
    return (
        <Meta title='Registration' description='Registration place'>
            <div className={styles.registration}>
                <div className={styles.registration__img}>
                    <Logo />
                </div>
                <div className={styles.registration__body}>
                    <div className={styles.registration__title}>
                        Registration
                    </div>

                    <form className={styles.form}>
                        <div className={styles.form__info}>
                            <div className={styles.form__firstname}>
                                <label htmlFor="firstname">First name</label>
                                <input type="text" id='firstname' placeholder='First name' />
                            </div>

                            <div className={styles.form__lastname}>
                                <label htmlFor="lastname">Last name</label>
                                <input type="text" id='lastname' placeholder='Last name' />
                            </div>
                        </div>

                        <div className={styles.form__email}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' placeholder='Email' />
                        </div>

                        <div className={styles.form__password}>
                            <label htmlFor="password">Password</label>
                            <input type="text" id='password' placeholder='Password' />
                        </div>

                        <div className={styles.form__confirm}>
                            <label htmlFor="confirm">Confirm</label>
                            <input type="text" id='confirm' placeholder='Confirm' />
                        </div>

                        <button className={styles.form__btn}>Submit</button>
                    </form>

                    <div className={styles.form__question}>
                        <div className={styles.form__txt}>Already have an account?</div>
                        <div className={styles.form__link}>Sign in</div>
                    </div>
                </div>
            </div>
        </Meta>
    )
}

export default Registration