import '@/styles/styles.scss'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={poppins.className}>
      <Component {...pageProps}/>
    </div>
  )
}

export default App