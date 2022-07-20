import Navbar from './navbar/Navbar'

const Layout = ({children}) => {
    return ( 
        <div className="min-h-screen pb-3 bg-black overflow-hidden">
            <Navbar />
            {children}
        </div>
     );
}
 
export default Layout;