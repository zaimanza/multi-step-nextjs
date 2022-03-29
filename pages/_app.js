import { UserRegisterProvider } from '../providers/userRegister'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserRegisterProvider>
      <Component {...pageProps} />
    </UserRegisterProvider>
  )
}

export default MyApp


