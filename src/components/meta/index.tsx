import Head from 'next/head'
import { ReactNode } from 'react'

interface MetaProps {
    children: ReactNode,
    title: string,
    description?: string
}

const Meta = ({ children, title, description }: MetaProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                {description
                    ? <>
                        <meta name='description' content={description} />
                        <meta name='og:title' content={title} />
                        <meta name='og:description' content={description} />
                    </>
                    :
                    <meta name='robots' content='noindex, nofollow' />
                }
            </Head>
            {children}
        </>
    )
}

export default Meta