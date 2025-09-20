
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"

interface LayoutProps {
    children:React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Header/>
     <div>
         {children}
     </div>
    <Footer/>
    </>
  )
}

export default Layout