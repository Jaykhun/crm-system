import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
    children: ReactNode,
    path: string
}

const Button = ({ children, path }: ButtonProps) => {
    return (
        <Link href={path} className={styles.button}>
            {children}
        </Link>
    )
}

export default Button