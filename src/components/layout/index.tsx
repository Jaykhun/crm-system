import Footer from '@/components/footer'
import Header from '@/components/header'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
            </div>
            
            <div>{children}</div>

            <Footer />
        </div>
    )
}

export default Layout