import logoPath from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
    className?: string
}

const Logo = ({ className }: LogoProps) => {
    return (
        <Link href='/' className={className}>
            <Image
                src={logoPath}
                alt='logo'
            />
        </Link>
    )
}

export default Logo