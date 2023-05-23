import Button from '@/components/ui/button'
import styles from './styles.module.scss'

const Services = () => {
    return (
        <div className={styles.services}>
            <div className="container">
                <div className={styles.services__inner}>
                    <div className={styles.services__content}>
                        <div className={styles.services__subtitle}>Services</div>
                        <div className={styles.services__title}>We Cover A Big Variety Of Medical Services</div>
                        <div className={styles.services__txt}>We provide the special tips and advice’s of heath care treatment and high level of best.</div>
                        <Button path='services'>All services</Button>
                    </div>

                    <div className={styles.services__slider}>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services