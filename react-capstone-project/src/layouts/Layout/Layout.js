import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main data-testid="main-content">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;