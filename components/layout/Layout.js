
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
       <>
       <Header/>
       <div style={{minHeight:"700px"}}>
        {children}
       </div>
       <Footer/>
       </>
    );
};

export default Layout;