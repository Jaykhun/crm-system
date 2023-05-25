import { ReactNode } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/swiper-bundle.css'

import styles from './styles.module.scss'

interface SliderProps {
    children: ReactNode
}

const Slider = ({ children }: SliderProps) => {
    return (
        <div className={styles.swiper}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                className='swiper'
                breakpoints={{
                    650: {
                        slidesPerView: 2,
                        slidesPerGroup: 1
                    }
                }}
            >
                {children}
            </Swiper>
        </div>
    )
}

export default Slider