import styles from './styles.module.scss'

const Process = () => {
    return (
        <section className={styles.process}>
            <div className='container'>
                <div className={styles.process__inner}>
                    <div className={styles.process__subtitle}>Working Process</div>
                    <div className={styles.process__title}>How we works?</div>
                    <div className={styles.process__content}>
                        <div className={styles.item}>
                            <div className={styles.item__number}>
                                1
                            </div>

                            <div className={styles.item__title}>
                                Registration
                            </div>
                            <div className={styles.item__txt}>
                                Patient can do registration from here with basic information.
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.item__number}>
                                2
                            </div>

                            <div className={styles.item__title}>
                                Make Appointment
                            </div>
                            <div className={styles.item__txt}>
                                Patient can book an appointment with doctor from landing page or from his login panel.
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.item__number}>
                                3
                            </div>

                            <div className={styles.item__title}>
                                Take Treatment
                            </div>
                            <div className={styles.item__txt}>
                                Doctors can interact with patients and do related treatment.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Process