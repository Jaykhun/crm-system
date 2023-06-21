import React from 'react'
import Dashboard from '@/admin/components/layout'
import styles from './styles.module.scss'

const PatientsAdd = () => {
    return (
        <Dashboard>
            <div className={styles.add}>
                <div className={styles.add__title}>Add patient</div>
                <form className={styles.add__form}>

                    <div className={styles.form__firstname}>
                        <label htmlFor="name">First name</label>
                        <input type="text" id="name" />
                    </div>

                    <div className={styles.form__secondname}>
                        <label htmlFor="secondname">Second name</label>
                        <input type="text" id="secondname" />
                    </div>
                </form>
            </div>
        </Dashboard>
    )
}

export default PatientsAdd