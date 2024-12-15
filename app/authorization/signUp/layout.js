
export const metadata = {
  title: 'Sign up',
  description: 'Registration',
}

export default function AuthLayout({ children }) {
  return (
       <header className="bg-white">
        {children}
        </header>
  )
}
