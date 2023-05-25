import Button from '@/components/ui/button'
import logoPath from '@/public/images/logo.png'
import Slider from '@/src/components/slider'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
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
                        <div className={styles.slider}>
                            <Slider>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(_ =>
                                    <SwiperSlide key={_}>
                                        <div className={styles.slider__item}>
                                            <div className={styles.slider__img}>
                                                <Image
                                                    src={logoPath}
                                                    alt='photo'
                                                    width={90}
                                                    height={90}
                                                />
                                            </div>
                                            <div className={styles.slider__title}> {_}full mouth rehabilitation</div>
                                            <div className={styles.slider__txt}>full mouth rehabilitation</div>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services