import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen mt-16 bg-neutral-50 dark:bg-neutral-950">
        {children}
      </div>
      <Footer />
    </>
  )
}
